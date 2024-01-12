import styled from "styled-components";
import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiAnnotation, HiDatabase } from "react-icons/hi";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterClick = (param) => {
    if(param === 'project'){
      searchParams.delete('category');
    } else {
      searchParams.set('category', param);
    }
      setSearchParams(searchParams);
  }


useEffect(()=>{
},[searchParams])

  return (
    <BackgroundDiv>
      <LeftSide>
        <Title>협업하기 좋은 개발자, 박인국</Title>
        <ProfilePicture src="/images/박인국프로필.jpg" alt="박인국 프로필" />
        
        <Contact>Contact</Contact>
        <ContactInfoBox>
        <PhoneNumber><FaPhoneAlt /> 010-8908-4135</PhoneNumber>
        <Mail><IoIosMail /> pkook7@naver.com</Mail>
        <Blog onClick={() => window.open('https://velog.io/@pkook7/posts', '_blank')}><HiAnnotation /> Blog</Blog>
        <Github onClick={() => window.open('https://github.com/MakeRobin97', '_blank')}><HiDatabase /> Github</Github>
        </ContactInfoBox>
      </LeftSide>

      <RightSide>
        <ButtonBox>
        <Button onClick={()=>{filterClick('project')}}>자기소개</Button>
        <Button onClick={()=>{filterClick('myProfile')}}>프로젝트</Button>
        <Button onClick={()=>{filterClick('education')}}>교육이력</Button>
        <Button onClick={()=>{filterClick('career')}}>학력/경력</Button>
        </ButtonBox>
        <Main>dddddddddddd</Main>
      </RightSide>
    </BackgroundDiv>
  );
};

export default App;

const BackgroundDiv = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 150px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const Contact = styled.div`
  margin-top:15px;
  font-size:25px;
  width:95%;
  border-bottom: 1px solid black;
  padding-bottom:7px;
`;

const ContactInfoBox = styled.div`
  padding-top:10px;
  display:flex;
  flex-direction: column;
  gap:13px;
  width:95%;
  font-size: 17px;
  font-weight:700;
`;

const PhoneNumber = styled.div`

`;


const Mail = styled.div`

`;

const Blog = styled.div`
  cursor: pointer;
  color:#3468C0;
`;

const Github = styled.div`
  cursor: pointer;
  color:#65B741;
`;

const RightSide = styled.div`

width: 850px;
`;

const ButtonBox = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;

`;

const Button = styled.div`
  border-radius: 10px;
  padding: 15px 25px 15px 25px;
  background-color: blue;;
  color:white;
  cursor: pointer;
`;

const Main = styled.div`
  width:100%;
  height: 350px;
  border-radius: 10px;
  background-color: red;
  padding:10px;
  box-sizing: border-box;
`;
