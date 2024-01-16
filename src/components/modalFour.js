import styled from "styled-components";
import YouTube from "react-youtube";

const ModalFour = ({value, onFunction}) => {

if(value !=='four') return null;

  return (
    <ModalOutsideBackGround open={value} onClick={()=>{onFunction('off')}} >
      <ModalInsideBackGround   onClick={(e) => e.stopPropagation()}>
        <ExitBtn onClick={()=>{onFunction('off')}} src="./images/exit.png" alt="나가기"/>
        <ModalTitle>차 판매 사이트 [오셜록]</ModalTitle>
        <BasicInfoBox>
          <InfoCategory>사용기술</InfoCategory>
          <InfoSkillBox>
            <Skill>React</Skill>
            <Skill>Sass</Skill>
          </InfoSkillBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>작업기간</InfoCategory>
          <InfoContentBox>2023년 9월 - 2023년 10월</InfoContentBox>
        </BasicInfoBox>
        <ProjectImg
          src="/images/오셜록사이트.png"
          alt="오셜록 이미지"
        />

        <YouTubeBox>
          <YouTube
            videoId="-dnFsE2nu9c"
            opts={{
              width: "600",
              height: "355",
              playerVars: {
                autoplay: 0,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </YouTubeBox>
        <BasicInfoBox>
          <InfoCategory>요약</InfoCategory>
          <InfoContentBox>
          차 전문 브랜드 오설록 클론 프로젝트
          </InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>담당 영역</InfoCategory>
          <InfoContentBox>차 리스트 / 결제 페이지</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>참여인원</InfoCategory>
          <InfoContentBox>프론트 3명 / 백엔드 4명</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>저장소 링크</InfoCategory>
          <GitLink   onClick={() =>
                window.open("https://github.com/MakeRobin97/5Sherlock", "_blank")
              } >https://github.com/MakeRobin97/5Sherlock</GitLink>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>배운점</InfoCategory>
          <InfoContentBox>
            <br />
            <HighLight>1. 메뉴, 필터 코드 간결화</HighLight>
            <br />
            [문제 사항] <br/> 제품 리스트에 있는 메뉴, 필터 버튼의 UI가 반복적으로 들어가 있었습니다. <br/>
이로 인해, 코드의 길이가 굉장히 길어졌으며, 유지 보수 접근도 힘들어졌습니다.
<br/>
<br/>
[고민 사항] <br/> 코드의 불필요한 반복은 줄이는 게 좋다고 판단되었습니다.

            <br />
            <br />
            [결과]  <br/> 메뉴와 필터에 필요한 데이터를 따로 분리해서, 해당 데이터를 map 함수로 돌릴 수 있게 했습니다.<br/> 
그 결과 해당 코드의 오류를 데이터만 분리해서 볼 수 있게 해서 유지 보수를 용이하게 했습니다. <br/>
또한 코드의 길이가 줄어드는 결과를 가져왔습니다.


            <br />
            <br />
            <br />
            <HighLight>2. 페이지 이동 시, 스크롤 초기화</HighLight>
            <br />
            [문제 사항]  <br/>스크롤을 내리고 페이지를 이동하면 내려진 상태로 페이지가 이동하는 문제가 있었습니다.
            <br />
            <br />
[고민 사항] <br/>해당 사항은 프로젝트 시 뿐만 아니라, UX 적인 측면에서 악영향을 줄 거라 판단했습니다. <br/> 
따라서 스크롤을 내리고 페이지를 이동하면, 강제적으로 스크롤을 맨 위로 올려야 했습니다.
            <br />
            <br />
            [결과]  <br/>페이지가 바뀔 경우 스크롤을 맨 위로 올리는 파일을 라우터에 적용시켰습니다. <br/>
이를 통해 프로젝트 시연 시에 원활하게 실행할 수 있었습니다.

          
          </InfoContentBox>
        </BasicInfoBox>
      </ModalInsideBackGround>
    </ModalOutsideBackGround>
  );
};
export default ModalFour;

const ModalOutsideBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalInsideBackGround = styled.div`
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 800px;
  height: calc(100vh - 256px);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
  display: flex;
  flex-direction: column;
  padding: 70px 80px 50px 80px;
  overflow: auto;

`;

const ExitBtn = styled.img`
  width:50px;
  height:50px;
  position: absolute;
  top:70px;
  right:50px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-family: pretendardBold;
  font-size: 50px;
  margin-bottom: 40px;
`;

const ProjectImg = styled.img`
  width: 600px;
  height: 355px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const YouTubeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
`;

const BasicInfoBox = styled.div`
  display: flex;
  font-family: pretendard;
  line-height: 2.7;
`;

const InfoCategory = styled.div`
  width: 100px;
  font-family: pretendardBold;
`;

const InfoContentBox = styled.div`
  width: 100%;
`;

const InfoSkillBox = styled.div`
  display:flex;
  gap:15px;
  width:100%;
`;

const Skill = styled.div`
  padding: 0px 10px;
  background-color: rgb(240, 240, 240);
  border-radius: 20px;
`;

const HighLight = styled.div`
  font-family: pretendardBold;
`;

const PlaySite = styled.div`
  cursor: pointer;
  color: #F6B17A;
  width:100%;
`;

const GitLink = styled.div`
  cursor: pointer;
  color: #65B741;
  width:100%;
`;