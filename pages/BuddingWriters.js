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

  .gitHubIcon{
    display: none;
  }
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
          <HeroImg src="/buddingProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
        <IntroHeader className='intro_header'>Budding Writer</IntroHeader>
          <IntroSub className='intro_sub'>Book Cafe Website</IntroSub>
          <IntroBodyText 
            text = "Budding writer is a book cafe website that includes information on the cafe's menu and various events."
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
            text="January 2021 - May 2021"
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
            text="WordPress, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <Button paddingLeft='0' text='Link' routeTo='https://hyerincheon.com/budding_writers/'/>
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Ideation" marginL="8%"/>
          <BodyText 
            marginL="8%"
            marginB='0'
            text = "The website we had to create was for a book cafe. The book cafe was not just a cafe, but spaces for many writers and book lovers, and there were many events for them. We had weekly meetings with our client and modified the design to create a website with the client's preference." 
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Design" />
          <ContentContGrid className="grid">
            <LeftCont className='center bodyTextMargin'>
              <BodyText 
                marginL="20%"
                text = "Since this website is a space for book lovers' gatherings, the logo was designed to be inspired by people sitting around campfires in the campsite."
                marginB="30px"
                
              />
              <BodyText 
                text = "Afterward, the customer wanted a logo that emphasized the cafe more, and the design was modified using coffee beans, which symbolized coffee."
                marginB="30px"
                marginL="20%"
              />
            </LeftCont>
            
            <RightCont>
              <DesignImg src="buddingDesign.svg" />
            </RightCont>
          </ContentContGrid>
        </SectionCont>

        <SectionCont>
          <SubText text = "Personas & Sitemap" />
          <ImgCont>
            <ProjectImg src="buddingPersona.svg" />
          </ImgCont>
        </SectionCont>

        <BottContentCont>
          <SubText text="Process" marginL="8%"/>
          <ImgCont>
            <ProjectImg src="buddingProcess.png" />
          </ImgCont>
        </BottContentCont>
        <Footer />
      </ContentCont>
    </Cont>
  )
}