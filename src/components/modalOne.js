import styled from "styled-components";
import YouTube from "react-youtube";

const ModalOne = ({value, onFunction}) => {

if(value !=='one') return null;

  return (
    <ModalOutsideBackGround open={value} onClick={()=>{onFunction('off')}} >
      <ModalInsideBackGround   onClick={(e) => e.stopPropagation()}>
        <ExitBtn onClick={()=>{onFunction('off')}} src="./images/exit.png" alt="나가기"/>
        <ModalTitle>당신과 어울리는 치킨은?</ModalTitle>
        <BasicInfoBox>
          <InfoCategory>사용기술</InfoCategory>
          <InfoSkillBox>
            <Skill>React</Skill>
            <Skill>TypeScript</Skill>
            <Skill>Styled-components</Skill>
          </InfoSkillBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>작업기간</InfoCategory>
          <InfoContentBox>2023년 12월 - 2023년 12월</InfoContentBox>
        </BasicInfoBox>
        <ProjectImg
        onClick={() =>
          window.open("https://your-chicken.netlify.app/", "_blank")
        }
          src="/images/치킨추천사이트.png"
          alt="치킨추천사이트 이미지"
        />

        <YouTubeBox>
          <YouTube
            videoId="k_wjgPxDCso"
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
          <InfoCategory>사이트</InfoCategory>
          <PlaySite         onClick={() =>
          window.open("https://your-chicken.netlify.app/", "_blank")
        }>
          https://your-chicken.netlify.app/
          </PlaySite>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>요약</InfoCategory>
          <InfoContentBox>
          어떤 치킨을 먹을지 고민하는 사람을 위한 이벤트성 웹페이지 입니다.
          </InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>담당 영역</InfoCategory>
          <InfoContentBox>메인 페이지 / 선택지 페이지 / 결과 페이지</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>참여인원</InfoCategory>
          <InfoContentBox>프론트엔드 1명</InfoContentBox>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>저장소 링크</InfoCategory>
          <GitLink   onClick={() =>
                window.open("https://github.com/MakeRobin97/chicken", "_blank")
              } >https://github.com/MakeRobin97/chicken</GitLink>
        </BasicInfoBox>
        <BasicInfoBox>
          <InfoCategory>배운점</InfoCategory>
          <InfoContentBox>
            <br />
            <HighLight>1. 기획 과정 고려</HighLight>
            <br />
            [고민 사항] <br/> 하드코딩 데이터로 프로젝트를 만들면 유지보수가 힘들 거라 판단했습니다. <br/>
            그래서 데이터를 가진 부분만 따로 파일을 만드는 것을 고려했습니다.
            <br/>
            <br/>
            [결과]<br/> json 파일로 데이터를 추가할 수 있게 구성을 바꿨습니다. <br/>
             홈페이지 접속 시 fetch를 이용해서 데이터를 불러오는 형태로 구조를 설계했습니다. <br/>
             그 결과 유지 보수성을 높일 수 있었습니다.

            <br />
            <br />
            <br />
            <HighLight>2. 결과 저장값에 대한 조건식 정의</HighLight>
            <br />
            [문제 사항] <br/>특정 쿼리 파라미터로 이동하는 경우 state 값이 사라졌습니다.<br/>
             이로 인해 기존 질문의 데이터가 제대로 저장이 안 되는 문제가 발생했습니다.
            <br />
            <br />
            [고민 사항] <br/>
            강제로 질문 3으로 갈 경우, 질문 1,2에 대한 데이터 처리를 어떻게 해줘야 할지에 대해서 고민했습니다. <br/>
            이전 값에 대한 처리 필요성을 느껴서 비정상적인 페이지 이동에 대해서 조건을 걸어주기로 했습니다.
            <br/><br/>

            [결과] <br/>쿼리 스트링과 데이터의 길이를 비교하는 조건식을 이용해 해결했습니다. <br/>
            특정 쿼리 파라미터에서 잘못된 값을 입력받는 경우 강제로 메인 페이지로 돌아갈 수 있도록 설정했습니다. <br/>
            이를 통해서 더욱 정교한 테스트 결과를 받을 수 있도록 했습니다.
            <br />
            <br />
            <br />
           <HighLight>3. useEffect CSS 조정</HighLight>
            <br />
            [문제 사항] <br/>useEffect 안에 있는 데이터 fetch 함수가 실행되기 전에, 빈 UI가 렌더링 돼서 보이는 문제가 발생했습니다.
            <br />
            <br />
            [고민 사항]<br/>UX를 해칠 수 있기에, 화면이 약간 늦게 나오더라도 빈 UI를 방지하는 게 옳다고 판단했습니다.
              <br/>
            <br/>
            [결과] <br/>state의 초기값 길이와 내용 조건문을 통해서 렌더링을 막아줬습니다. <br/>
            그 결과 빈 UI가 등장하는 문제를 방지했습니다.
            <br />
            <br />
            <br />
            <HighLight>4. 사진 로딩 문제</HighLight>
            <br />
            [문제 사항] <br/>사진의 용량이 큰 경우, 처음에는 빈 화면이었다가 서서히 로딩되는 문제점이 발생했습니다.
            <br />
            <br />
            [고민 사항] <br/>빈 화면이 뜬 경우 사용자가 페이지에 대한 신뢰감이 떨어질 수 있었습니다. <br/>
             사진 용량을 줄이거나 사진이 나오기 전에 로딩 화면이 필요하다고 판단되었습니다.
            <br/>
            <br/>

            [결과] <br/>리액트에 있는 onLoad 프로퍼티를 활용해서 UX를 높였습니다. <br/>
            사진이 로딩 중일 때는 '로딩 중입니다'라는 상자를 띄우게 변경했습니다. <br/>
            해당 변경점으로 인해서 페이지가 멈추지 않았다는 것을 알려줬습니다.
            <br />
            <br />
          </InfoContentBox>
        </BasicInfoBox>
      </ModalInsideBackGround>
    </ModalOutsideBackGround>
  );
};
export default ModalOne;

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

  :hover {
  transform: scale(1.05);
  }

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