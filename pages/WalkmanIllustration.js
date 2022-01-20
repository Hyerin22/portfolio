import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";


import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import Footer from '../comps/Footer';
import BodyText from '../comps/BodyText';
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

const ContentCont = styled.div`
  
`;

const SectionCont = styled.div`
  margin-top: 70px;

  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }

`;
const DesignCont = styled.div`
  margin-left: 8%;
`;

const ImgCont = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 10px;

  @media screen and (max-width: 480px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (min-width: 481px) and (max-width: 1024px){ 
    padding-left: 25px;
    padding-right: 25px;
  }
`;
const BottContentCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const ProjImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjTitle = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  display: inline-block;
  overflow: hidden;
  white-space: wrap;
  font-weight: 400;
  color: #4B4B4B;
  margin-bottom: 90px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-top:0;
  }
  @media (min-width: 481px) and (max-width: 834px){
    font-size: 18px;
    margin-top:0;
  }
  @media screen and (min-width: 835px) {
    font-size: 18px;
  }
`;



export default function WalkmanIllustration() {
  const router = useRouter();

  return (
    <Cont 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.25}}}
      className="center">
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
          <HeroImg src="/illustPaintProj.png" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Realistic Illustration</IntroHeader>
          <IntroSub className='intro_sub'>Sony Walkman Sports</IntroSub>
          <IntroBodyText 
            text = "This project is to recreate a photo image with advanced skills of Illustrator. The goal was making illustration looks as original photo as much as possible."
            marginB = "50px" 
          />
          <IntroBodyText 
            text = "Role"
            fcolor = "#1E1B18"
            paddingR = "0px"
            marginB = "0px"
          />
          <IntroBodyText
            text="Designer"
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
            text="January 2021"
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
            text=" Illustrator"
            paddingR="0px"
            marginB="15px"
          />
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Process" marginL="8%"/>
          <BodyText 
            marginL="8%"
            marginB='0'
            text = "To make the picture as realistic as possible, I started drawing Walkman by dividing the layers in detail utilizing all the tools such as pathfinder, pen tool and gradient tool."
          />
          <ImgCont>
            <ProjImg src="/illustPaintLayers.png" />
            <ProjTitle>Layer Structure</ProjTitle>
          </ImgCont>
          <ImgCont>
            <ProjImg src="/illustPaintOriginal.png" />
            <ProjTitle>Original Photo</ProjTitle>
          </ImgCont>
          <ImgCont>
            <ProjImg src="/illustPaintFinal.jpg" />
            <ProjTitle>Final Result</ProjTitle>
          </ImgCont>
        </SectionCont>

        <Footer />
      </ContentCont>
    </Cont>
  )
}