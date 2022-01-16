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
  margin-top: 70px;

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
  margin-top: 70px;
  margin-bottom: 30px;
`;
const ContentContGrid = styled.div`
  justify-content: center;
  align-items: center;
  margin-right: 8%;
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
  max-width: 100%;
  height: auto;

  @media (max-width: 576px) {
    max-width: 90%;
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
      animate={{opacity: 1, transition:{delay: 0.15}}}>
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
          <HeroImg src="/wecycleProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>WeCycle</IntroHeader>
          <IntroSub className='intro_sub'>Recycling Education App</IntroSub>
          <IntroBodyText 
            text = "Wecycle is an education app for children, their parents, and teachers. Through this app, children can learn how to recycle with interactive animations and quizzes."
            marginB = "50px"
          />
          <IntroBodyText 
            text = "Role"
            fcolor = "#1E1B18"
            paddingR = "0px"
            marginB = "0px"
          />
          <IntroBodyText
            text="Front-End Developer, UX/UI Designer"
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
            text="April 2021 - May 2021"
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
            text="HTML5, React, JavaScript, Next.js, Storybook, GitHub, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <Button routeTo='https://github.com/Hyerin22/WeCycle'/>
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Ideation" marginL="8%"/>
          <BodyText 
            marginL="8%"
            text = "Our mission is to educate our users about the importance of recycling. We want to be the bridge between parents/teachers and children when it comes to an engaging and fun learning experience." 
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Design" />
          <ContentContGrid className="grid">
            <LeftCont className='center bodyTextMargin'>
              <BodyText 
                marginL="20%"
                text = "Our goal was to create a logo that reflects being sustainable as well as appealing to children. We felt that creating a youthful and eco-friendly logo by including the earth and recycling symbol."
                marginB="30px"
              />
              <BodyText 
                text = "We selected purple, yellow, and green as a colour palette. Through these intuitive colours, we tried to approach children more friendly. "
                marginB="30px"
                marginL="20%"
              />
              <BodyText 
                text = "This way it would communicate our goals for our app, WeCycle."
                marginB="30px"
                marginL="20%"
              />
            </LeftCont>
            
            <RightCont>
              <DesignImg src="wecycleDesign.svg" />
            </RightCont>
          </ContentContGrid>
        </SectionCont>

        <SectionCont>
          <SubText text = "Wireframe" />
          <ImgCont>
            <ProjectImg src="wecycle_wireframe.svg" />
          </ImgCont>
        </SectionCont>

        <BottContentCont>
          <SubText text = "Final" />
          <ImgCont>
            <ProjectImg src="wecycleFinal.svg" />
          </ImgCont>
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  )
}