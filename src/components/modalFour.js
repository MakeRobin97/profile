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
          <InfoCategory>역할</InfoCategory>
          <InfoContentBox> PM으로써, 제품 구현 범위 설정 및 설계한 기능 구현에 집중</InfoContentBox>
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
            [문제 사항] <br/> 제품 리스트에 있는 메뉴, 필터 버튼의 UI가 반복적으로 들어가
있었음. 이로 인해, 코드의 길이가 굉장히 길어졌으며, 유지 보수 접근도 힘들어졌음.
<br/>
<br/>
[고민 사항] <br/> 코드가 길수록, 다른 개발자들이 알아보기 힘들 가능성이 높으므로 불필요한 반복은 줄이는 게 좋다고 판단됨.

            <br />
            <br />
            [결과]  <br/> 메뉴와 필터에 필요한 데이터를 따로 분리해서, 해당 데이터를 m
ap 함수로 돌릴 수 있게 함. 그 결과 해당 코드의 오류를 데이터만 분
리해서 볼 수 있게 해서 유지 보수를 쉽게 함. 또한 코드의 길이가 줄
어드는 결과를 가져옴.


            <br />
            <br />
            <br />
            <HighLight>2. 페이지 이동 시, 스크롤 초기화</HighLight>
            <br />
            [문제 사항]  <br/>스크롤을 내리고 페이지를 이동하면, 내려진 상태로 페이지가 이
동되는 문제가 있었음. 해당 사항은 고객 UX 적인 측면에서 악영향을 줄 거라 판단했음. 따라서 스크롤을 내리고 페이지를 이동하면, 강제적으로 스크롤을 맨 위로 올리려고 함.
<br/>
<br/>
[고민 사항] <br/>해당 문제는 한 페이지에 해당하는 것이 아니라, 모든 페이지에 필요한 UX였기에 Router에 적용하는 것이 좋다고 판단됨
            <br />
            <br />
            [결과]  <br/>ScrollToTop.js라는 파일을 만들었음. 해당 파일은 useLocation()을 이용해서, url 주소가 달라질 때마다 useEffect 안에서 scrollTo(0,0)을 이용해서 강제적으로 올려줬음. 해당 JS 파일은 Router에
넣어서 모든 파일에 해당 되게 했음. 이를 통해 스크롤을 내리고 이동해도 스크롤이 올라가도록 구현했음

            <br />
            <br />
            <br />
            <HighLight>3. 페이지네이션 로직 구현</HighLight>
            <br />
            [문제 사항] <br/> 제품 리스트에 있는 제품의 수량에 따라 페이지를 그려줘야 했음.
한 페이지에 들어갈 제품의 개수, 그 개수를 토대로 기본적으로 보여
줄 최대 페이지 구현을 해야 했음. 기존에 있는 페이지네이션 라이브
러리나 작성된 코드들을 활용하려고 했으나, 해당 기능들을 모두 반
영하기에 유연한 코드가 아니었음
<br/>
<br/>
[고민 사항] <br/> 기존에 있는 페이지네이션 라이브러리나 작성된 코드들을 활용하려고 했으나, 해당 기능들을 모두 반영하기에 유연한 코드가 아니었음
            <br />
            <br />
            [결과]  <br/>제품 리스트 숫자를 한 페이지에 보여줄 최대 개수로 나누고, 나
머지를 이용해서 최대 페이지 개수를 보여주는 로직을 작성했음. 이
를 통해서 언제든지 페이지의 UI를 원하는 대로 변경할 수 있는 유연
한 코드를 작성함
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