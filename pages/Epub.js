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

const EpubImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;



export default function Epub() {
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
          <HeroImg src="/ePubProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Let&#39;s Save A Life!</IntroHeader>
          <IntroSub className='intro_sub'>InDesign E-publication</IntroSub>
          <IntroBodyText 
            text = "This is an integrative children&#39;s book. It is intended to educate children about how to CPR &#40;Cardiopulmonary resuscitation&#41;. There are eight fundamental steps of CPR for children."
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
            text=" InDesign, Illustrator, Adobe Animate, Adobe After Effects"
            paddingR="0px"
            marginB="15px"
          />
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Motivation" marginL="8%"/>
          <BodyText 
            marginL="8%"
            marginB='0'
            text = "I saw the news that the two boys saved their grandmother from death using CPR techniques taught by their mother. A little training proves that everyone can save lives regardless of age or physique. Since we can't predict where to save people, everyone, even children should know how to help someone by learning CPR."
          />
        </SectionCont>

        <BottContentCont>
          <SubText text="Design" marginL="8%"/>
          <DesignCont>
            <ImgCont>
              <EpubImg src="ePubDesign1.svg" />
            </ImgCont>
            <ImgCont>
              <EpubImg src="ePubDesign2.svg" />
            </ImgCont>
            <ImgCont>
              <EpubImg src="ePubDesign3.svg" />
            </ImgCont>
            <ImgCont>
              <EpubImg src="ePubDesign4.svg" />
            </ImgCont>
          </DesignCont>
        </BottContentCont>



        <Footer />
      </ContentCont>
    </Cont>
  )
}