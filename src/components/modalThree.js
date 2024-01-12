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
          <InfoCategory>역할</InfoCategory>
          <InfoContentBox> 기획부터 개발 완료까지 전 과정 참여</InfoContentBox>
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
            [문제 사항] <br/>운동 앱 서비스를 기획했기 때문에, 리액트로 반응형 레이아웃을
만들어야 했음. 하지만 아이패드부터, 아이폰 SE 시리즈까지 다양한
사이즈가 있었기 때문에 레이아웃에 적용에 대해서 범위 고민이 있
었음.
<br/>
<br/>
[고민 사항] <br/>확장성이 뛰어난 웹이 배경이었기 때문에, 웹으로 볼때는 큰 화면에서는 고정된 px로 서비스를 구성할 수 있도록 하는 것이 좋다고 판단함. 일정 범위 밑에서는 px보다는 %를 이용해서, 구성하기로 함.
            <br />
            <br />
            [결과] <br/>다양성을 고려해서, 아이패드 사이즈를 기준으로 잡음. 아이패드
사이즈보다 커질 경우 고정 px를 적용해서, 웹 화면 중앙에 서비스를
이용할 수 있도록 만듦. 아이패드 사이즈보다 작을 경우는 반응형으
로 조절해서 구현함. 해당 사항을 통해서 PC로 볼 때도 부담스럽지
않은 UI를 구성함.

            <br />
            <br />
            <br />
            <HighLight>2.  무한 스크롤 + 필터 동시 적용</HighLight>
            <br />
            [문제 사항] <br/>offset을 통해서, 백엔드와 통신 시 일정 개수 만큼 데이터를 불러
오는 형태. 무한 스크롤을 내리다가, 위에 있는 필터를 누르면 이미
받아온 데이터에 필터 데이터가 중첩되어 나타나는 결과가 있었음
<br/>
<br/>
[고민 사항] <br/>쿼리스트링 offset을 통해서, 백엔드와 통신 시 일정 개수 만큼 데이터를 불러오는 형태로 구현함. 그런데 무한 스크롤을 내리다가, 위에 있는 필터를 누르면 이미 받아온 데이터에 필터 데이터가 중첩되어 나타나는 결과가 있었음
            <br />
            <br />
            [결과] <br/>offset의 기존 로직에서 queryParameter가 변경될 경우, setOff
set을 0으로 변경시켜서, get을 요청하는 로직으로 바꿈. 해당 변경
사항으로 인해서 무한 스크롤과 필터의 결과가 겹치지 않고 독립적
으로 실행되었음.


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