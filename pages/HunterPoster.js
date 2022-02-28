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
  // margin-left: 7%;
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
const ImgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 480px) {
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
  // @media (min-width: 481px) and (max-width: 1024px){ 
  //   // padding-left: 25px;
  //   padding-right: 25px;
  // }
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
  // margin-left: 8%;
`;
const PaintingImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.3));
`;



export default function DigitalPainting() {
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
          <HeroImg src="/hunterProj.png" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Hunter Poster</IntroHeader>
          <IntroSub className='intro_sub'>Advertising poster</IntroSub>
          <IntroBodyText 
            text = 'This is an advertising for Hunter Slogan "For the world outside".'
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
            text="Illustrator, Photoshop"
            paddingR="0px"
            marginB="15px"
          />
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Description" marginL='0'/>
          <BodyText 
            // marginL="8%"
            marginB='0'
            text = "This poster was designed for a final project in Advanced Photoshop class. I had to create an advertising poster by incorporating it based on the skills I learned in class. I used techniques such as layer styles, brushes, motion blur, and blending mode that I learned."
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Original Photo Sources" marginL='0'/>
          <ContentContGrid className="grid">
            <ImgCont>
              <PaintingImg src="hunterSource1.png" />
            </ImgCont>
            <ImgCont>
              <PaintingImg src="hunterSource2.png" />
            </ImgCont>
          </ContentContGrid>
        </SectionCont>


        <SectionCont>
          <SubText text="Process" marginL='0'/> 
          <ContentContGrid className="grid">
            <ImgCont>
              <PaintingImg src="hunter1.png" />
            </ImgCont>
            <ImgCont>
              <PaintingImg src="hunter2.png" />
            </ImgCont>
            <ImgCont>
              <PaintingImg src="hunter3.jpg" />
            </ImgCont>
            <ImgCont>
              <PaintingImg src="hunter4.png" />
            </ImgCont>

          </ContentContGrid>
        </SectionCont>

        <BottContentCont>
          <SubText text = "Final" marginL='0'/>
          <ImgCont>
            <PaintingImg src="hunterFinal.png" />
          </ImgCont>
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  )
}