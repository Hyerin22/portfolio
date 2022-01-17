import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";


import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import Footer from '../comps/Footer';
import BodyText from '../comps/BodyText';
import Button from '../comps/Button';
import SubText from '../comps/SubText';
import IntroBodyText from '../comps/IntroBodyText';

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavCont = styled.div`
  display: flex;
  padding-left:3%;
  box-sizing: border-box;
  flex-direction: row;
  box-sizing: border-box;
`;

const LogoCont = styled.div`
  display:flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content:space-between;
  cursor: pointer;
`
const Logo = styled.img`
  width: auto;
`;

const MainCont = styled.div`
  justify-content: center;
  margin-top: 120px;
`;

const HeroCont = styled.div`
  justify-content: center;
  align-items: center;
`;
const HeroImg = styled.img`
  width: 100%;
`;

const IntroCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  margin-left: 7%;
`;
const IntroHeader = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 55px;
  font-weight: 800;
  color: #1E1B18;
  margin-bottom: 10px;
  margin-left:0;
  padding-left:0;

`;
const IntroSub = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: #4B4B4B;
  margin-bottom: 25px;
  margin-left:0;
  padding-left:0;
`;

const ContentCont = styled.div``;

const SectionCont = styled.div`
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }

`;
const ImgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BottContentCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
`;
const ContentContGrid = styled.div`
  justify-content: center;
  align-items: center;
  // margin-right: 8%;
`;
const RightCont = styled.div`
  justify-content: center;
  margin-left: 10%;
  margin-top: 10px;

  @media (max-width: 576px) {
    margin-left: 20%;

  }
`;
const LeftCont = styled.div`
  justify-content: center;
  margin-left: -4%;
`;
const DesignImg = styled.img`
  max-width: 80%;
  justify-content: center;
  height: auto;

  @media (max-width: 576px) {
    max-width: 70%;
  }
`;
const ProjectImg = styled.img`
  max-width: 85%;
  height: auto; 
`;



export default function Wecycle() {
  const router = useRouter();

  return (
    <Cont 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.25}}}
      >
      {/* TopNav */}
      <NavCont className="myLogo">
        <LogoCont onClick={() => router.push("/")}>
          <Logo src="/Logo.svg" />
        </LogoCont>
        <Nav />
        <Hamburger />
      </NavCont>

      {/* Intro Proj */}
      <MainCont className="grid hero_margin">
        <HeroCont>
          <HeroImg src="/natiiveProj.svg" />
        </HeroCont>
         
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Natiive</IntroHeader>
          <IntroSub className='intro_sub'>Indigenous Territory Education Web Applicatioin</IntroSub>
          <IntroBodyText 
            text = "Natiive is a responsive web application. Through this application, people can learn about the indigenous people and their territory with articles and quizzes."
            marginB = "50px"
          />
          <IntroBodyText 
            text = "Role"
            fcolor = "#1E1B18"
            paddingR = "0px"
            marginB = "0px"
          />
          <IntroBodyText
            text="Deisnger, Developer"
            paddingR="0px"
            marginB="15px"
          />
          <IntroBodyText 
            text="Date"
            fcolor="#1E1B18"
            paddingR="0px"
            marginB="0px"
          />
          <IntroBodyText
            text="September 2021 - Decemper 2021"
            paddingR="0px"
            marginB="15px"
          />
          <IntroBodyText 
            text="Tools"
            fcolor="#1E1B18"
            paddingR="0px"
            marginB="0px"
          />
          <IntroBodyText
            text="HTML, CSS, jQuery, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <Button routeTo='https://github.com/Hyerin22/Natiive'/>
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Ideation" marginL="8%"/>
          <BodyText 
            marginL="8%"
            marginB='0'
            text = "Throughout Canadian history the discrimination and mistreatment of Indigenous peoples have been repeated many times even up to today, however, it is not talked about enough. For our website, we would like people to be more aware of the Indigenous peoples and their territory." 
          />
        </SectionCont>

        <SectionCont>
          <SubText text = "Wireframe" />
          <ImgCont>
            <ProjectImg src="natiiveWF.svg" />
          </ImgCont>
        </SectionCont>

        <BottContentCont>
          <SubText text="Final" marginL="8%"/>
          <ImgCont>
            <ProjectImg src="natiiveFinal.svg" />
          </ImgCont>
        </BottContentCont>
        <Footer />
      </ContentCont>
    </Cont>
  )
}