import styled from "styled-components";
import YouTube from "react-youtube";

const ModalTwo = ({value, onFunction}) => {

if(value !=='two') return null;

  return (
    <ModalOutsideBackGround open={value} onClick={()=>{onFunction('off')}} >
      <ModalInsideBackGround   onClick={(e) => e.stopPropagation()}>
        <ExitBtn onClick={()=>{onFunction('off')}} src="./images/exit.png" alt="나가기"/>
        <ModalTitle>의료 종사자 커뮤니티</ModalTitle>
        <BasicInfoBox>
          <InfoCategory>사용기술</InfoCategory>
          <InfoSkillBox>
            <Skill>Next.js</Skill>
            <Skill>TypeScript</Skill>
            <Skill>Styled-components</Skill>
          </InfoSkillBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>작업기간</InfoCategory>
          <InfoContentBox>2023년 10월 - 2023년 11월</InfoContentBox>
        </BasicInfoBox>
        <ProjectImg
          src="/images/링크드인사이트.png"
          alt="커뮤니티사이트 이미지"
        />

        <YouTubeBox>
          <YouTube
            videoId="iskMrMXEZGw"
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
          의료인 대상 커뮤니티를 만들기 위해, 링크드인을 클론 코딩
          </InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>담당 영역</InfoCategory>
          <InfoContentBox>메인 페이지 / 프로필 상세 / 프로필 수정</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>참여인원</InfoCategory>
          <InfoContentBox>프론트 2명 / 백엔드 2명</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>저장소 링크</InfoCategory>
          <GitLink   onClick={() =>
                window.open("https://github.com/MakeRobin97/caremind_community", "_blank")
              } >https://github.com/MakeRobin97/caremind_community</GitLink>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>배운점</InfoCategory>
          <InfoContentBox>
            <br />
            <HighLight>1. 프로필 수정 문제</HighLight>
            <br />
            [문제 사항] <br/>프로필 수정 모달창을 컴포넌트로 만들어서 적용했습니다. <br/>
내용을 수정하고 나가기 버튼을 누르면, 다시 열었을 때 수정 내용이 남아있는 문제가 있었습니다.
<br/>
<br/>
[고민 사항]<br/>유저가 해당 행동을 취했을 때, 의도하는 바를 고민해 봤습니다. <br/>
자신이 입력했던 내용이 저장되지 않길 바란다고 생각해서 값을 다시 받아오는 게 옳다고 판단했습니다.

            <br />
            <br />
            [결과]  <br/>모달을 다시 열 때 백엔드로부터 해당 내용을 다시 받아오는 것으로 수정했습니다. <br/> 
이를 통해서 유저가 원하는 행동에 맞는 사이트를 구축했습니다.



            <br />
            <br />
            <br />
            <HighLight>2. MvvM, TypeScript 적용</HighLight>
            <br />
            [문제 사항]  <br/>React 작업 시, 백엔드 통신 부분과 UI 부분 모두를 한 페이지에 작성했었습니다. <br/>
이로 인해 오류가 나도 동료 개발자끼리 코드를 읽기 힘든 상황에 이르렀습니다. 
<br/>
<br/>
[고민 사항]<br/>유지 보수를 위해 기존에 한 페이지에 작성했던 코드들을 디자인 패턴 적용을 고민했습니다. <br/>
디자인 패턴 공부 결과 MVC, MvvM등이 있었습니다. <br/>
그중에서 MvvM이 차후 유지 보수가 좋다고 판단되어, MvvM 디자인 패턴을 채택하기로 했습니다.
            <br />
            <br />
            [결과]  <br/>그 결과 효율적인 코드 작성을 할 수 있었습니다. <br/>
데이터와 통신하는 Model , 데이터를 관리하는 View-Model, UI를 보여주는 View로 분리해서, MvvM 디자인 패턴으로 코드를 작성했습니다. 

            <br />
            <br />
            <br />
           
          </InfoContentBox>
        </BasicInfoBox>
      </ModalInsideBackGround>
    </ModalOutsideBackGround>
  );
};
export default ModalTwo;

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