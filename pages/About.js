import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import BodyText from '../comps/BodyText';
import Footer from '../comps/Footer';
import Header from '../comps/Header';

const Cont = styled(motion.div)`
  display:flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content:center;
`;
const NavCont = styled.div`
  display: flex;
  padding-left:3%;
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

const HeroCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  flex-direction: column;
`; 

const IconCont = styled.a`
  text-decoration: none;
`;

const HeroImg = styled.img`
  
`;

const ContentCont = styled.div`
  margin-top: 150px;
  
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
  @media (min-width: 481px) and (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionCont = styled.div`
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;

const ContentContGrid = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;

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
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
`;

const ProfileImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

const RightCont = styled.div`
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media (max-width: 834px){
    text-align: center;
  }
`;




export default function About() {
  const router = useRouter();
    
  return (
    <Cont
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.25}}}>
      {/* TopNav */}
      <NavCont className="myLogo">
        <LogoCont onClick={() => router.push("/")}>
          <Logo src="/Logo.svg" />
        </LogoCont>
        <Nav />
        <Hamburger />
      </NavCont>

      {/* Body */}

      {/* HeroImage */}
      <HeroCont>
        <HeroImg className="page_hero" src="/About.svg" />
        <IconCont className='scroll_big_screen' href="#about-down">
          <FontAwesomeIcon 
            className="arrow_scale arrow" 
            icon={faChevronDown} 
            size="2x" 
            color="#2B6FC7"
            width={20}
            />
        </IconCont>
      </HeroCont>

      {/* Contents */}
      <ContentCont className='container' id='about-down'>
        {/* profile */}
        <SectionCont >
          <ContentContGrid className='about_prof_grid container'>
            <ImgCont>
              <ProfileImg src='rin_profile.svg' />
            </ImgCont>
            <RightCont>
              <Header
              marginB='40px'
              marginT='70px'
              text='Hello I&#39;m Hyerin&#40;Rin&#41;!' 
              display='none'/>
              <BodyText
              paddingR='0'
              marginB='30px'
              text="I&#39;m a Digital Design & Development student at BCIT who is an aspiring Front-End Developer with design knowledge."/>
              <BodyText
              paddingR='0'
              marginB='30px'
              text="My goal is to improve the user's experience through coding and design. I believe that the task of a developer is to provide users with the best possible experience with good code."/>
              <BodyText 
              paddingR='0'
              marginB='30px'
              text="I enjoy spending time with people, playing the piano and taking part in outdoor activities. If you want to know more about me, feel free to send me an email! "/>
            </RightCont>
          </ContentContGrid>
        </SectionCont>
      </ContentCont>
      <Footer />
    </Cont>
  )     
}
