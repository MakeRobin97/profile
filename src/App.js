import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ModalOne from "./components/modalOne";
import ModalTwo from "./components/modalTwo";
import ModalThree from "./components/modalThree";
import ModalFour from "./components/modalFour";

const App = () => {
  const [current, setCurrent] = useState("Introduction");
  const [open, setOpen] = useState("off");


  // 스크롤 로직
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
              <br/> 
              <HighLight>
                마케터 동료들의 불편함을 해소했습니다.
              </HighLight>
              <br />
              <br />
              그 과정에서 사람들이 원하는 제품과 서비스를
              만드는 일에 크게 매료되었습니다. 그 열정으로 프론트엔드 공부를
              시작했습니다.
              <br />
              <br />
              동료 개발자들과 협업하고, 기업에서의 실제 업무 경험을 쌓고
              싶었기에 오프라인 코딩 부트캠프에서 프로젝트 경험을 쌓았습니다,{" "}
              <br />
              <br />
              <HighLight>
                세상의 불편함을 해결해주는 개발자
              </HighLight>
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
              2023.10 ~ 2023.11
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
              <HighLight>
                4주간 케어마인드 기업에 인턴으로 참가
              </HighLight>
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
            1년간 보안회사에서 마케터로 일하면서 많은 것들을 느꼈습니다. 그중 하나가 <HighLight>세상에 도움이 되고 싶다는 동기</HighLight>였습니다. 회사에서 기술과 고객에 대한 이해로 만들어진 서비스가 고객들에게 도움이 되는 것을 본 후, 제품 혹은 서비스를 만드는 일에 참여하고 싶다는 생각이 들었습니다. 
              <br />
              <br />
              이후, JavaScript를 독학으로 배우고 오목, TodoList 등 간단한 프로젝트를 만든 후, 위코드 오프라인 부트캠프를 참여했습니다. 해당 부트캠프에서는 1,2,3차 프로젝트를 진행했습니다.
              <br />
              <br />
              1,2,3차 프로젝트에서 리액트를 사용했으며, 프로젝트가 끝난 뒤에는 의료 서비스 기업과 4주간 기업 협업을 진행했습니다. 해당 협업에서는 의료 종사자들 커뮤니티를 Next.js와 TypeScript를 이용해서 구현했습니다. 그 결과 해당 기업에서 Next 14버전에 대한 긍정적인 검토가 이루어졌고, <HighLight>MVP로서 활용할 수 있겠다</HighLight>는 좋은 반응을 이끌어 낼 수 있었습니다.
              <br />
              <br />
            
            </MyLifeContent>

            <MyLifeTitle>핵심 보유 역량 - 커뮤니케이션 역량</MyLifeTitle>
            <MyLifeContent>
            다양한 부서와 협업을 하는 프론트엔드 개발자가 필수적으로 가질 소프트스킬은 바로 커뮤니케이션 능력이라고 생각합니다. 다양한 사업 조직에서 데이터 요구사항을 접수해, 직접 커뮤니케이션 하기 때문입니다.
              <br />
              <br />
              보안 기업에 마케터로 근무하며 여러 부서와 커뮤니케이션을 통해 <HighLight>완성도 있는 결과물을 만들어냈습니다.</HighLight> 영업팀과 개발팀 사이에서 의견을 취합하여 개발팀이 원하는 요구사항을 포함하고, 영업팀에게 영업에 도움이 될 수 있는 브로셔를 만들어낸 경험이 있습니다. 또한 엔지니어 팀과의 커뮤니케이션을 통해 기술적으로 핵심 있고, 모두가 이해하기 쉬운 보안 관련 내용을 포함한 홈페이지를 완성했습니다.
              <br />
              <br />
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

