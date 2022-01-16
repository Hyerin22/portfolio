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
const ContentContGrid = styled.div`
  justify-content: center;
  align-items: center;
`;
const PaintingImg = styled.img`
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



export default function DigitalPainting() {
  const router = useRouter();

  return (
    <Cont 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.15}}}
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
          <HeroImg src="/paintingProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Anya Taylor-Joy</IntroHeader>
          <IntroSub className='intro_sub'>Photograph Recreation Drawing</IntroSub>
          <IntroBodyText 
            text = "This is a digital painting using Photoshop."
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
            text="September 2021 - December 2021"
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
            text="Adobe Photoshop"
            paddingR="0px"
            marginB="15px"
          />
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Description" marginL="8%"/>
          <BodyText 
            marginL="8%"
            marginB='0'
            text = "The goal of this project was to draw a person in a photo in black and white using only Photoshop brush tools. Through this project, I was able to get used to brushes and blending mode tools."
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Process" />
          <ImgCont>
            <PaintingImg src="OriginalPhoto.jpg" />
            <ProjTitle>Original</ProjTitle>
          </ImgCont>
          <ContentContGrid className="grid">
          <ImgCont>
            <PaintingImg src="painting_S1.jpg" />
            <ProjTitle>Step1: Base & Outline</ProjTitle>
          </ImgCont>
          <ImgCont>
            <PaintingImg src="painting_S2.svg" />
            <ProjTitle>Step2: Posterize painting</ProjTitle>
          </ImgCont>
          </ContentContGrid>
          <ContentContGrid className="grid">
          <ImgCont>
            <PaintingImg src="painting_S3.svg" />
            <ProjTitle>Step3: Blending</ProjTitle>
          </ImgCont>
          <ImgCont>
            <PaintingImg src="painting_S4.svg" />
            <ProjTitle>Step4: Hair & Watch Details</ProjTitle>
          </ImgCont>
          </ContentContGrid>
        </SectionCont>

        <BottContentCont>
          <SubText text = "Final" />
          <ImgCont>
            <PaintingImg src="painting_Final.svg" />
            <ProjTitle>Final Results</ProjTitle>
          </ImgCont>
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  )
}