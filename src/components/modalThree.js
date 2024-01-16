import styled from "styled-components";
import YouTube from "react-youtube";

const ModalThree = ({value, onFunction}) => {

if(value !=='three') return null;

  return (
    <ModalOutsideBackGround open={value} onClick={()=>{onFunction('off')}} >
      <ModalInsideBackGround   onClick={(e) => e.stopPropagation()}>
        <ExitBtn onClick={()=>{onFunction('off')}} src="./images/exit.png" alt="나가기"/>
        <ModalTitle>홈트레이닝 서비스 앱 [OneMore]</ModalTitle>
        <BasicInfoBox>
          <InfoCategory>사용기술</InfoCategory>
          <InfoSkillBox>
            <Skill>React</Skill>
            <Skill>Styled-Components</Skill>
            <Skill>Figma</Skill>
          </InfoSkillBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>작업기간</InfoCategory>
          <InfoContentBox>2023년 10월 - 2023년 10월</InfoContentBox>
        </BasicInfoBox>
        <ProjectImg
          src="/images/OneMore.png"
          alt="원모어 이미지"
        />

        <YouTubeBox>
          <YouTube
            videoId="TAxebfJnmi8"
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
          운동 초보자를 타깃으로 한 홈트레이닝 앱
          </InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>담당 영역</InfoCategory>
          <InfoContentBox>메인 페이지 / 프로필 상세 / 프로필 수정</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>참여인원</InfoCategory>
          <InfoContentBox>프론트 4명 / 백엔드 4명</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>저장소 링크</InfoCategory>
          <GitLink   onClick={() =>
                window.open("https://github.com/MakeRobin97/49-3rd-OneMore-frontend", "_blank")
              } >https://github.com/MakeRobin97/49-3rd-OneMore-frontend</GitLink>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>배운점</InfoCategory>
          <InfoContentBox>
            <br />
            <HighLight>1. 모바일 / PC 기준 레이아웃</HighLight>
            <br />
            [문제 사항] <br/>운동 앱 서비스를 기획했기 때문에, 리액트로 반응형 레이아웃을 만들어야 했습니다. <br/> 
앱과 다른 화면이라, 설계 레이아웃에 대한 문제가 있었습니다.
<br/>
<br/>
[고민 사항] <br/>실제 모바일에서 돌아갈 수 있게 만드는 것과 단순히 모바일 px로 조정하는 것을 고민했습니다. 
            <br />
            <br />
            [결과] <br/>모바일에서도 구현할 수 있게, 반응형 웹사이트를 만들기로 결정했습니다.<br/>
모바일 기기의 다양성을 고려해, 아이패드 사이즈를 기준으로 잡았습니다. <br/>
아이패드 사이즈보다 커질 경우 고정 px를 적용해서, 웹 화면 중앙에 서비스를 이용할 수 있도록 만들었습니다. <br/>
해당 사항을 통해서 앱 서비스에 대한 이해도도 높일 수 있었습니다.

            <br />
            <br />
            <br />
            <HighLight>2.  무한 스크롤 + 필터 동시 적용</HighLight>
            <br />
            [문제 사항] <br/> 운동 리스트 페이지에서 한 번에 모든 운동을 가져오는 로직으로 구현했습니다.
<br/>
<br/>
[고민 사항] <br/>운동 개수가 늘어날수록, 데이터 로딩 속도가 느려질 것으로 예상되었습니다.
            <br />
            <br />
            [결과] <br/>쿼리 스트링 offset을 통해서, 백엔드와 통신 시 일정 개수만큼 데이터를 불러오는 형태로 구현했습니다. <br/>
이를 통해, 동일한 UX를 제공할 수 있었습니다.


            <br />
            <br />
            <br />
           
          </InfoContentBox>
        </BasicInfoBox>
      </ModalInsideBackGround>
    </ModalOutsideBackGround>
  );
};
export default ModalThree;

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