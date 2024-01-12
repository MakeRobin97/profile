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
          <InfoCategory>역할</InfoCategory>
          <InfoContentBox> 프론트엔드PM으로써, FrontEnd 팀원 관리 및 계획된 설계 범위 구현</InfoContentBox>
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
            [문제 사항] <br/>프로필 수정 모달창을 컴포넌트로 만들어서 적용했음. 모달창은
기본적으로 띄워져있는데, display를 이용해서 모달창을 열고 끄는
2023.10 - 2023.11로직으로 작성했음. 이로 인해 문제가 발생함. 내용을 수정하고 그냥
나가기 버튼을 누르면, 다시 열었을 때 그 수정 내용이 그대로 남아있
는 문제가 있었음.
<br/>
<br/>
[고민 사항]<br/>UX차원에서 창을 종료했다가, 다시 여는 행동은 기존에 있는 값을 다시 받아오는게 옳다고 판단했음. 

            <br />
            <br />
            [결과]  <br/>모달의 내용은 그대로 남아있기 때문에, 모달을 다시 열 때 백엔
드로부터 해당 내용을 다시 받아오는 것으로 수정함. 이를 통해서 모
달창을 열 때마다, 백엔드와 통신을 진행했고 문제를 해결할 수 있었
음. 모달창을 열 때마다 통신을 하는 덕분에 모달창의 최신화도 이끌
어 낼 수 있었음.



            <br />
            <br />
            <br />
            <HighLight>2. MvvM, TypeScript 적용</HighLight>
            <br />
            [문제 사항]  <br/>React 작업 시, 백엔드와 통신 부분과 UI 부분 모두를 한 페이지
에 작성했었음. 이로 인해 유지 보수 관점에서 다른 사람이 코드를 읽
기 힘든 상황에 쳐함. 유지 보수, 의존성 감소를 위해 기존에 한 페이
지에 작성했던 코드들을 새로운 디자인 패턴으로 바꿔야 됐음. 그리
고 코딩 시, 협업하는 개발자로 인한 의도치 않은 데이터 변경을 막기
위한 수단이 필요했음.
<br/>
<br/>
[고민 사항]<br/>디자인 패턴 공부 결과 MVC, MvvM등이 있었음. 그 중에서 모바일 앱 개발에서도 사용된다는 MvvM이 차후 유지보수가 좋다고 판단되어, MvvM디자인 패턴을 채택하기로 함
            <br />
            <br />
            [결과]  <br/>데이터와 통신하는 Model , 데이터를 관리하는 View-Model, UI
를 보여주는 View로 분리해서, MvvM 디자인 패턴으로 코드를 작성
함. 해당 패턴으로 인해서 백엔드와 통신 시, 신경 써야 할 범위를 직
관적으로 알 수 있게 됨. TypeScript를 통해서 의도치 않는 데이터
변환이 일어나지 않게 함.

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