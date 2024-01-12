import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ModalOne from "./components/modalOne";
import ModalTwo from "./components/modalTwo";
import ModalThree from "./components/modalThree";
import ModalFour from "./components/modalFour";
import { Helmet } from "react-helmet-async";

const App = () => {
  const [current, setCurrent] = useState("Introduction");
  const [open, setOpen] = useState("off");

  const onScroll = () => {
    const introductionElement = document.getElementById("Introduction");
    const contactElement = document.getElementById("Contact");
    const skillElement = document.getElementById("Skill");
    const projectsElement = document.getElementById("Projects");
    const experienceElement = document.getElementById("Experience");
    const myLifeElement = document.getElementById("MyLife");
    const scrollY = window.scrollY;

    if (scrollY >= 0 && scrollY < contactElement.offsetTop) {
      setCurrent("Introduction");
    } else if (
      scrollY >= introductionElement.offsetTop &&
      scrollY < skillElement.offsetTop
    ) {
      setCurrent("Contact");
    } else if (
      scrollY >= contactElement.offsetTop &&
      scrollY < projectsElement.offsetTop
    ) {
      setCurrent("Skill");
    } else if (
      scrollY >= skillElement.offsetTop &&
      scrollY < experienceElement.offsetTop
    ) {
      setCurrent("Projects");
    } else if (
      scrollY >= projectsElement.offsetTop &&
      scrollY < myLifeElement.offsetTop
    ) {
      setCurrent("Experience");
    } else if (scrollY >= myLifeElement.offsetTop) {
      setCurrent("MyLife");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
      <title>소개합니다. 프론트엔드 개발자 박인국</title>
        <meta property="og:image" content="./images/박인국프로필.jpg" />
        <meta property="og:url" content="https://makerobin97.github.io" />
      </Helmet>
      <BackgroundDiv>
        <GlobalStyle modalOpen={open !== "off"} />
        <ModalOne value={open} onFunction={setOpen} />
        <ModalTwo value={open} onFunction={setOpen} />
        <ModalThree value={open} onFunction={setOpen} />
        <ModalFour value={open} onFunction={setOpen} />
        <LeftSide>
          <NavigateBar>
            <Link to="Introduction" smooth={true} duration={500}>
              <NavigateContent
                $check={current === "Introduction" ? true : false}
              >
                Introduction
              </NavigateContent>
            </Link>
            <Link to="Contact" smooth={true}>
              <NavigateContent $check={current === "Contact" ? true : false}>
                Contact
              </NavigateContent>
            </Link>
            <Link to="Skill" smooth={true}>
              <NavigateContent $check={current === "Skill" ? true : false}>
                Skill
              </NavigateContent>
            </Link>
            <Link to="Projects" smooth={true}>
              <NavigateContent $check={current === "Projects" ? true : false}>
                Projects
              </NavigateContent>
            </Link>
            <Link to="Experience" smooth={true}>
              <NavigateContent $check={current === "Experience" ? true : false}>
                Experience
              </NavigateContent>
            </Link>
            <Link to="MyLife" smooth={true}>
              <NavigateContent $check={current === "MyLife" ? true : false}>
                My Life
              </NavigateContent>
            </Link>
          </NavigateBar>
        </LeftSide>

        <RightSide>
          <Title id="Introduction">
            불편함을 해결하고 싶은 개발자, 박인국입니다.
          </Title>
          <ProfileBox>
            <ProfilePicture
              src="/images/박인국프로필.jpg"
              alt="박인국 프로필"
            />
            <ProfileInstruction>
              <ProfileTitle>
                안녕하세요, 프론트엔드 개발자 박인국입니다.
              </ProfileTitle>
              <br />
              <br />
              1년여간 마케터로 일하면서 자동화 툴을 만들어,
              <ProfileHighLite>
                마케터 동료들의 불편함을 해소했습니다.
              </ProfileHighLite>
              <br />
              <br />
              자동화 툴을 만들어가는 과정에서 사람들이 원하는 제품과 서비스를
              만드는 일에 크게 매료되었습니다. 그 열정으로 프론트엔드 공부를
              시작했습니다.
              <br />
              <br />
              동료 개발자들과 협업하고, 기업에서의 실제 업무 경험을 쌓고
              싶었기에 2023년 8월 ~ 2023년 11월 까지 오프라인 코딩 부트캠프
              위코드에서 프로젝트 경험을 쌓고,{" "}
              <ProfileHighLite>기업에서 프론트엔드 인턴</ProfileHighLite>으로
              업무를 했습니다.
              <br />
              <br />
              현재는 진행하던 리액트 프로젝트를 이어서 고도화 작업을 진행하고
              있습니다. 실력과 경험을 갈고 닦아{" "}
              <ProfileHighLite>
                세상의 불편함을 해결해주는 개발자
              </ProfileHighLite>
              가 되고싶습니다.
            </ProfileInstruction>
          </ProfileBox>
          <InfoTitle id="Contact">Contact</InfoTitle>
          <InfoBox>
            <InfoDetailBox>
              <InfoDetailTitle>Email</InfoDetailTitle>
              <ContactInfo>pkook7@gmail.com</ContactInfo>
            </InfoDetailBox>
            <InfoDetailBox>
              <InfoDetailTitle>Blog</InfoDetailTitle>
              <Blog
                onClick={() =>
                  window.open("https://velog.io/@pkook7/posts", "_blank")
                }
              >
                Blog
              </Blog>
            </InfoDetailBox>
            <InfoDetailBox>
              <InfoDetailTitle>Github</InfoDetailTitle>
              <Github
                onClick={() =>
                  window.open("https://github.com/MakeRobin97", "_blank")
                }
              >
                Github
              </Github>
            </InfoDetailBox>
          </InfoBox>

          <InfoTitle id="Skill">Skill</InfoTitle>
          <InfoBox>
            <InfoDetailBox>
              <InfoDetailTitle>Language</InfoDetailTitle>
              <SkillInfoBox>
                <SkillInfo>JavaScript</SkillInfo>
                <SkillInfo>TypeScript</SkillInfo>
                <SkillInfo>Python</SkillInfo>
              </SkillInfoBox>
            </InfoDetailBox>
            <InfoDetailBox>
              <InfoDetailTitle>Frontend</InfoDetailTitle>
              <SkillInfoBox>
                <SkillInfo>React</SkillInfo>
                <SkillInfo>Next.js</SkillInfo>
                <SkillInfo>HTML</SkillInfo>
                <SkillInfo>CSS</SkillInfo>
              </SkillInfoBox>
            </InfoDetailBox>
            <InfoDetailBox>
              <InfoDetailTitle>Styling</InfoDetailTitle>
              <SkillInfoBox>
                <SkillInfo>Styled Components</SkillInfo>
                <SkillInfo>Scss</SkillInfo>
              </SkillInfoBox>
            </InfoDetailBox>
            <InfoDetailBox>
              <InfoDetailTitle>Tools</InfoDetailTitle>
              <SkillInfoBox>
                <SkillInfo>Git</SkillInfo>
                <SkillInfo>Slack</SkillInfo>
              </SkillInfoBox>
            </InfoDetailBox>
          </InfoBox>

          <InfoTitle id="Projects">Projects</InfoTitle>
          <ProjectInfoBox>
            <ProjectInfo
              onClick={() => {
                setOpen("one");
              }}
            >
              <ProjectImg
                src="/images/치킨추천사이트.png"
                alt="치킨추천사이트캡쳐"
              />
              <ProjectInsideBox>
                <ProjectTitle>
                  치킨 추천 사이트 [당신과 어울리는 치킨은?]
                </ProjectTitle>
                <ProjectSkillBox>
                  <ProjectSkill $color="blue">React</ProjectSkill>
                  <ProjectSkill $color="red">Styled-components</ProjectSkill>
                  <ProjectSkill $color="yellow">TypeScript</ProjectSkill>
                </ProjectSkillBox>
                <ProjectTime>2023.12월 - 2023.01월</ProjectTime>
              </ProjectInsideBox>
            </ProjectInfo>
            <ProjectInfo
              onClick={() => {
                setOpen("two");
              }}
            >
              <ProjectImg
                src="/images/링크드인사이트.png"
                alt="링크드인사이트캡쳐"
              />
              <ProjectInsideBox>
                <ProjectTitle>
                  사내 신사업용 의료 종사자 커뮤니티 프로토타입 구축
                </ProjectTitle>
                <ProjectSkillBox>
                  <ProjectSkill $color="blue">Next.js</ProjectSkill>
                  <ProjectSkill $color="red">TypeScript</ProjectSkill>
                  <ProjectSkill $color="yellow">Styled-components</ProjectSkill>
                </ProjectSkillBox>
                <ProjectTime>2023.10월 - 2023.11월</ProjectTime>
              </ProjectInsideBox>
            </ProjectInfo>
            <ProjectInfo
              onClick={() => {
                setOpen("three");
              }}
            >
              <ProjectImg src="/images/OneMore.png" alt="OneMore캡쳐" />
              <ProjectInsideBox>
                <ProjectTitle>홈트레이닝 앱 [OneMore]</ProjectTitle>
                <ProjectSkillBox>
                  <ProjectSkill $color="blue">React</ProjectSkill>
                  <ProjectSkill $color="red">Styled-components</ProjectSkill>
                  <ProjectSkill $color="yellow">TypeScript</ProjectSkill>
                </ProjectSkillBox>
                <ProjectTime>2023.10월 - 2023.10월</ProjectTime>
              </ProjectInsideBox>
            </ProjectInfo>
            <ProjectInfo
              onClick={() => {
                setOpen("four");
              }}
            >
              <ProjectImg src="/images/오셜록사이트.png" alt="OneMore캡쳐" />
              <ProjectInsideBox>
                <ProjectTitle>차 판매 사이트 [오셜록]</ProjectTitle>
                <ProjectSkillBox>
                  <ProjectSkill $color="blue">React</ProjectSkill>
                  <ProjectSkill $color="red">Sass</ProjectSkill>
                </ProjectSkillBox>
                <ProjectTime>2023.9월 - 2023.10월</ProjectTime>
              </ProjectInsideBox>
            </ProjectInfo>
          </ProjectInfoBox>

          <InfoTitle id="Experience">Experience</InfoTitle>
          <InfoSubTitle>학력</InfoSubTitle>
          <ExperienceBox>
            <ExperienceLeft>
              <ExperienceTitle>숭실대학교</ExperienceTitle>
              <ExperiencePic
                src="./images/숭실대학교로고.png"
                alt="숭실대학교로고"
              />
            </ExperienceLeft>
            <ExperienceRight>
              <HighLight>경영학부</HighLight>
              <br />
              2016.03 ~ 2022.03 졸업
              <br />
              학점 : 4.24/4.5
              <br />
            </ExperienceRight>
          </ExperienceBox>
          <InfoSubTitle>경력</InfoSubTitle>
          <ExperienceBox>
            <ExperienceLeft>
              <ExperienceTitle>케어마인드</ExperienceTitle>
            </ExperienceLeft>
            <ExperienceRight>
              <HighLight>개발팀 / 인턴</HighLight>
              <br />
              2023.10 ~ 2022.11
              <br />
              환자 치료 예후 경과 관리 서비스 제공
              <br />
              <br />
              - 기업의 신사업 기획 (의료 종사자 전용 커뮤니티) 단계에서의
              프로토타입 개발.
              <br />
              - 기존에 사용하고 있던 리액트 대신에 Next.14를 이용한 MVP 검증
              <br />
              - 의료 종사자 커뮤니티 제공을 위해 유사 서비스(링크드인) 구조 분석
              및 클론 코딩
              <br />
              - 클론 코딩 과정에서 해당 서비스 개발에 필요한 리소스 파악, 문제점
              정리, 구현 과정 정리 하여 동료 팀원 및 조직 구성원에게 공유
              <br />-{" "}
              <HighLight>Next.14를 활용한 MVP에 대해서 긍정적인 반응</HighLight>
              을 이끌어냄
            </ExperienceRight>
          </ExperienceBox>
          <ExperienceBox>
            <ExperienceLeft>
              <ExperienceTitle>에스케어</ExperienceTitle>
              <ExperiencePic
                src="./images/에스케어로고.png"
                alt="에스케어로고"
              />
            </ExperienceLeft>
            <ExperienceRight>
              <HighLight>마케팅팀</HighLight>
              <br />
              2021.08 ~ 2022.11
              <br />
              보안 솔루션 IT 기업
              <br />
              <br />
              - 기업의 단일 마케터로서 전략 기획, 실행, 성과 분석 및 비즈니스
              프로세스 전반 경험
              <br />
              - 월간 뉴스레터, 블로그, SNS 등 콘텐츠 기획 및 제작 담당
              <br />
              - 오프라인 행사 이벤트 총괄 기획 및 진행
              <br />
              - 회사 홈페이지 기획, 제작 및 운영
              <br />
            </ExperienceRight>
          </ExperienceBox>
          <InfoSubTitle>교육이력</InfoSubTitle>
          <ExperienceBox>
            <ExperienceLeft>
              <ExperienceTitle>
                위코드
                <br /> 프론트엔드
                <br /> 개발자 과정
              </ExperienceTitle>
              <ExperiencePic src="./images/위코드.png" alt="위코드로고" />
            </ExperienceLeft>
            <ExperienceRight>
              2023.08 ~ 2023.11
              <br />
              개발자 오프라인 부트캠프 위코드에서
              <HighLight>프론트엔드 개발</HighLight> 교육. 1,2,3차 프로젝트를
              통해 백엔드와 통신하는 법을 심도 있게 익혔고, 리액트에 대한 이해
              높임.
              <br />
              <br />
              <BackHighLight>
                4주간 케어마인드 기업에 인턴으로 참가
              </BackHighLight>
              하여, 의료인 커뮤니티 구현 프로젝트를 실현. 해당 기업 협업에서는
              Next.js, TypeScript에 대한 이해를 높임.
            </ExperienceRight>
          </ExperienceBox>
          <ExperienceBox>
            <ExperienceLeft>
              <ExperienceTitle>
                패스트 캠퍼스
                <br /> 데이터 분석가
                <br /> 과정
              </ExperienceTitle>
              <ExperiencePic
                src="./images/패스트캠퍼스.png"
                alt="패스트캠퍼스"
              />
            </ExperienceLeft>
            <ExperienceRight>
              2022.11 ~ 2023.03
              <br />
              데이터 분석가 역량을 위한 파이썬, 태블러, SQL등을 공부.
              <br />
              편의점 상권 데이터, 서울 부동산 데이터, 네이버 쇼핑 데이터 를 통해
              데이터 분석 역량을 향상
            </ExperienceRight>
          </ExperienceBox>
          <InfoTitle id="MyLife">My Life</InfoTitle>
          <MyLifeBox>
            <MyLifeTitle>핵심 보유 역량 - 프론트엔드 개발 역량</MyLifeTitle>
            <MyLifeContent>
              프론트엔드 개발자가 되기 위해, 처음에는 HTML,CSS , JavaScript를
              익혔습니다. 배운 뒤에는 프로젝트를 통해서 제가 관심 있는 것들을
              만들었습니다. 그 과정에서 닌텐도 클론 코딩, 모멘텀 프로젝트, 오목
              프로젝트 등을 개발해 봤습니다.
              <br />
              <br />
              이후 동료 개발자와의 협업, 리액트 활용을 위해 위코드 오프라인
              부트캠프를 참여했습니다. 해당 부트 캠프에서는 1,2,3차 프로젝트를
              진행했습니다. 1차 프로젝트에서는 Project Manager를 맡아서 팀원들의
              스케줄 관리와 로그인 회원가입 로직 등을 개발했습니다. 2차
              프로젝트에서는 Product Manager를 맡아서 제품의 구성과 완성에
              초점을 맞췄습니다. 3차 프로젝트 때는 프론트엔드 리더로서,
              프론트엔드 팀원들에게 티켓을 적절히 할당하고 수준에 맞는 과제를
              주려고 노력했습니다.
              <br />
              <br />
              1,2,3차 프로젝트에서 리액트를 사용했으며, 이 과정에서 기본적인
              리액트 관련 훅 사용들을 익혔으며, 라이브러리를 가져와서 다양한
              기능을 구현해 봤습니다.
              <br />
              <br />
              프로젝트가 끝난 뒤에는{" "}
              <BackHighLight>
                의료 서비스 기업과 4주간 기업 협업을 진행
              </BackHighLight>
              했습니다. 해당 협업에서는 의료 종 사자들 커뮤니티를 Next.js와
              TypeScript를 이용해서 구현했습니다. 그 결과{" "}
              <BackHighLight>
                해당 기업에서 Next 14버전에 대한 긍정적인 검토가 이루어졌고,
                MVP로서 활용할 수 있겠다
              </BackHighLight>
              는 좋은 반응을 받았습니다. 이후, Next.js, TypeScript, 상태관리
              라이브러리를 공부중에 있습니다.
            </MyLifeContent>

            <MyLifeTitle>핵심 보유 역량 - 개발 관련 학습 역량</MyLifeTitle>
            <MyLifeContent>
              개발 전체 과정에 관심이 있어서, 서비스 기획도 공부했습니다. 그 중
              데이터 분석을 집중적으로 공부했습니다. 2022년 11월 부터 2023년
              3월까지 패스트캠퍼스 데이터 분석가 과정을 수료했습니다.
              <br />
              <br />
              이 과정 에서 SQL,Python, Excel, Tableau 활용법을 더욱 익히고,
              다양한 분석 프로젝트에 참여하였습니다. 분 석한 프로젝트로는 1.
              편의점 상권 분석 2. 부동산 가격 영향 요인 분석 3. 네이버 모바일
              쇼핑광고 크롤링 키워드 분석 등이 있습니다. 해당 3가지 주제의 팀
              프로젝트를 통해 SQL을 활용한 데이터 추출, Pyth on을 활용한 데이터
              분석 Tableau를 활용한 데이터 시각화로 프로젝트에서 인사이트를
              발굴할 수 있었습니다.
              <br />
              <br />
              개발자라면, 개발 역량 뿐만 아니라 서비스 자체에 관심을 가지는 것도
              중요하다고 생각합니다. 데이터 분석 공부를 통해 공부한 데이터 관련
              역량은{" "}
              <BackHighLight>
                개발 시에 기획자와의 소통 영역 그리고 백엔드 개발자와 소통을
                원활히 할 수 있도록 도움
              </BackHighLight>
              을 준다고 생각합니다. 입사하게 된다면 관심을 가지고 향상시켜온 데
              이터 역량을 바탕으로 프론트엔드 개발자 역할을 효과적으로 수행할
              자신이 있습니다.
            </MyLifeContent>

            <MyLifeTitle>핵심 보유 역량 - 커뮤니케이션 역량</MyLifeTitle>
            <MyLifeContent>
              다양한 부서와 협업을 하는 프론트엔드 개발자가 필수적으로 가질
              소프트스킬은 바로 커뮤니케이션 능력이라고 생각합니다. 다양한 사업
              조직에서 데이터 요구사항을 접수해, 직접 커뮤니케이션 하기 때문입
              니다.
              <br />
              <br />
              1학년 때는 클래식 기타 동아리 담락재에서 활동하면서 합주 연습을
              하며 다른 사람들과 적극적으로 피드백을 했습니다. 그 결과 연말에
              연주회에서 좋은 연주를 할 수 있었습니다. 2학년부터 3학년 까지는 아
              카펠라 동아리 SSUGAR’에서 아카펠라를 팀끼리 연습하면서 다양한
              사람들과 얘기할 수 있었습니다. 그 결과{" "}
              <BackHighLight>
                아카펠라 공연 시에 좋은 팀워크를 끌어내며
              </BackHighLight>{" "}
              좋은 호응을 얻을 수 있었습니다.
              <br />
              <br />
              3학년 전공수업 중 광고와 판매 촉진론에서는 리더를 맡아 조별 과제를
              수행했습니다. 다이소에서 선정 한 제품을 홍보하는 과제여서 팀원들과
              오랜 시간 회의를 통해 아이디어 회의를 했습니다. 그 결과 군인들을
              위한 따끈따끈 내 몸 좋아 패키지를 떠올렸고 해당 내용 구체화를
              위해서 교수님과 얘기를 나눴습 니다. 교수님을 설득하는 과정에서
              군인이었던{" "}
              <BackHighLight>
                조원들의 경험들을 모아 커뮤니케이션을 했고
              </BackHighLight>{" "}
              이는 좋은 결과로 반영되어 A+란 점수를 받을 수 있었습니다.
              <br />
              <br />
              그리고 1년여간 보안 기업에 마케터로 일하면서 회사 내 다양한 부서와
              커뮤니케이션을 했습니다. 제품 브로셔 제작 시에 영업팀이 영업 시에
              필요한 내용과 개발팀이 브로셔에 요구한 내용을 커뮤니케이션을 통해
              원활하게 정리해 브로셔에 반영했습니다.{" "}
              <BackHighLight>
                회사 홈페이지를 만들 때는 엔지니어 팀과 적극적으로 커뮤니케이션
              </BackHighLight>
              을 했고 그 결과 기술적으로도 핵심이 있지만, 비전공자들도 이해하기
              쉬운 보안 홈페이지가 완성되었습니다.
            </MyLifeContent>
          </MyLifeBox>
        </RightSide>
      </BackgroundDiv>
    </>
  );
};

export default App;

const BackgroundDiv = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 150px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.modalOpen ? "hidden" : "auto")};
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavigateBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 50px;
`;

const NavigateContent = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => (props.$check ? "black" : "#CCCCCC ")};
  font-family: pretendard;
`;

const Title = styled.div`
  padding-top: 30px;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 80px;
  font-family: pretendardBold;
`;

const ProfileBox = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 100px;
`;

const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const ProfileHighLite = styled.span`
  background-color: #efefef;
`;

const BackHighLight = styled.span`
  background-color: #efefef;
`;

const ProfileInstruction = styled.div`
  font-family: pretendardLight;
  font-size: 18px;
`;

const ProfileTitle = styled.span`
  font-family: pretendard;
  font-weight: 600;
  font-size: 20px;
`;

const InfoTitle = styled.div`
  margin-top: 15px;
  padding-top: 55px;
  font-size: 25px;
  font-family: pretendardBold;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 7px;
  margin-bottom: 10px;
`;

const InfoBox = styled.div`
  padding-top: 10px;
  gap: 25px;
  font-size: 17px;
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const InfoDetailBox = styled.div`
  display: flex;
`;

const InfoDetailTitle = styled.div`
  font-family: pretendard;
  width: 110px;
  font-size: 18px;
`;

const ContactInfo = styled.div`
  font-family: pretendard;
  font-size: 18px;
`;

const Blog = styled.div`
  cursor: pointer;
  color: #3468c0;
`;

const Github = styled.div`
  cursor: pointer;
  color: #65b741;
`;

const RightSide = styled.div`
  width: 850px;
`;

const SkillInfoBox = styled.div`
  display: flex;
  gap: 15px;
`;

const SkillInfo = styled.div`
  padding: 0px 10px;
  background-color: rgb(240, 240, 240);
  border-radius: 50px;
`;

const ProjectInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

const ProjectInfo = styled.div`
  width: 260px;
  height: 330px;
  cursor: pointer;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  margin-bottom: 30px;
  &:hover {
    background-color: rgb(240, 240, 240);
    transform: scale(1.05);
    transition: 0.5s;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
  border-radius: 15px;
`;
const InfoSubTitle = styled.div`
  padding: 5px 5px 5px 5px;
  border-radius: 25px;
  font-size: 20px;
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  text-align: center;
  width: 80px;
  margin-bottom: 15px;
`;

const ExperienceBox = styled.div`
  display: flex;
  margin-bottom: 55px;
`;

const ExperienceLeft = styled.div`
  font-family: pretendard;
  width: 200px;
`;

const ExperienceRight = styled.div`
  font-family: pretendard;
  font-size: 18px;
  line-height: 1.5;
  width: 100%;
`;

const ExperienceTitle = styled.div`
  font-size: 20px;
  font-family: pretendardBold;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const ExperiencePic = styled.img`
  height: 50px;
  object-fit: cover;
  padding-left: 15px;
`;

const MyLifeBox = styled.div`
  font-family: pretendard;
`;

const MyLifeContent = styled.div`
  font-family: pretendardLight;
  font-size: 18px;
  margin-bottom: 150px;
  line-height: 1.5;
`;

const MyLifeTitle = styled.div`
  padding: 5px 5px 5px 5px;
  border-radius: 25px;
  font-size: 20px;
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  text-align: center;
  margin-bottom: 25px;
`;

const HighLight = styled.span`
  font-family: pretendardBold;
`;

const ProjectImg = styled.img`
  width: 100%;
  border-bottom: 1px solid rgba(15, 15, 15, 0.1);
  height: 150px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ProjectTitle = styled.div`
  font-family: pretendardBold;
  font-size: 17px;
  margin-top: 10px;
  height: 37px;
`;

const ProjectSkillBox = styled.div`
  margin-top: 10px;
  gap: 10px;
  font-family: pretendard;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  height: 50px;
`;

const ProjectSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  height: 23px;
  border-radius: 50px;
  background-color: ${(props) => {
    if (props.$color === "red") {
      return "#F2AFEF";
    } else if (props.$color === "blue") {
      return "#B4D4FF";
    } else if (props.$color === "yellow") {
      return "#F8E559";
    }
  }};
`;

const ProjectTime = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-family: pretendard;
`;

const ProjectInsideBox = styled.div`
  padding: 0 10px 0 10px;
`;

const ProjectSlideBox = styled.div`
  display: flex;
`;

const ProjectLeftSlide = styled.div``;

const ProjectRightSlide = styled.div``;
