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
import DownloadButton from '../comps/DownloadButton';

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

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    .live_link {
      display: none;
    }
  }
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
`;
const RightCont = styled.div`
  justify-content: center;
  margin-top: 10px;
`;
const LeftCont = styled.div`
  justify-content: center;
`;
const DesignImg = styled.img`
  max-width: 100%;
  justify-content: center;
  height: auto;

`;
const ProjectImg = styled.img`
  max-width: 100%;
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
          <HeroImg src="/mylandlordProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>MyLandlord</IntroHeader>
          <IntroSub className='intro_sub'>Landlord Review Website</IntroSub>
          <IntroBodyText 
            text = "MyLandlord is a website that is targeted towards residents looking to find an ideal Landlord to rent from in Greater Vancouver."
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
            text="React, JavaScript, Next.js, GitHub, Figma, Framer Motion"
            paddingR="0px"
            marginB="15px"
          />
          <ButtonCont>
            <Button 
              routeTo='https://github.com/Hyerin22/myLandlord' 
              href='https://github.com/Hyerin22/myLandlord'/>
            <DownloadButton 
              marginLeft='15px' 
              text='Go Live' 
              routeTo='https://mylandlord.hyerincheon.ca/'
              href='https://mylandlord.hyerincheon.ca/'
              bgColor='none'
              butBorder='3px solid #2B6FC7'
              fColor='#2B6FC7'
              />
          </ButtonCont>

        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Ideation" marginL="0"/>
          <BodyText 
            marginB='0'
            text = "MyLandlords&#39; goal is to be able to help make it easier for residents in Greater Vancouver to find rent by looking for an ideal landlord. With our application, tenants and landlords will be able to communicate with each other and it will allow for tenants to leave honest reviews during their time with the landlord to help other prospective renters." 
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Design" marginL="0" />
          <ContentContGrid className="grid">
            <LeftCont className='center bodyTextMargin'>
              <BodyText 
                text = "Since our website focuses on the review and rating system, we decided to give our logo a house, test balloon, and checkmark to represent the theme. This logo gives an idea to users about free communication and honest reviews."
                marginB="30px"
                
              />
              <BodyText 
                text = "In addition, purple, which expresses the luxury that can encompass target markets of all ages, was set as the colour of the main theme."
                marginB="30px"
              />
            </LeftCont>
            
            <RightCont>
              <DesignImg src="mylandlordDesign.svg" />
            </RightCont>
          </ContentContGrid>
        </SectionCont>

        <SectionCont>
          <SubText text = "Task Models" marginL="0" />
          <ImgCont>
            <ProjectImg src="mylandlordTM.svg" />
          </ImgCont>
        </SectionCont>

        <SectionCont>
          <SubText text = "Personas" marginL="0" />
          <ImgCont>
            <ProjectImg src="mylandlordPersona.svg" />
          </ImgCont>
        </SectionCont>

        <SectionCont>
          <SubText text = "HiFi Prototype" marginL="0" />
          <ImgCont>
            <ProjectImg src="mylandlordFinal.svg" />
          </ImgCont>
        </SectionCont>

        <BottContentCont>
          <SubText text="Conclusion" marginL="0"/>
          <BodyText 
            text = "After making taskmodel, persona, and wireframe, we did four times of user tests. Based on those tests, we designed final prototype, and started to code out our application. With react and next.js, we built the frontend side of the application and connected it to the backend by collaborating with full-stack developers." 
          />
        </BottContentCont>
        <Footer />
      </ContentCont>
    </Cont>
  )
}