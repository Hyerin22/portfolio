import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import HeroText from '../comps/HeroText';
import Projects from '../comps/Projects';
import Footer from '../comps/Footer';

const Cont = styled(motion.div)`
  display:flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content:center;
`;

const NavCont = styled.div`
  display:flex;
  padding-left:3%;
  box-sizing: border-box;
  flex-direction: row;
  box-sizing: border-box;
  position: relative;
`;

const LogoCont =styled.div`
  display:flex;
  flex-direction: row;
  flex: 1;
  align-items:center;
  justify-content:space-between;
  cursor: pointer;
`
const Logo = styled.img`
  width:auto;
`;

const MidCont = styled.div`
  // display:flex;
  // flex:1
  flex-direction: row;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  padding-left: 8%;
`;

const LeftCont = styled.div`
  // display:flex;
  box-sizing: border-box;
  width:100%;
`;

const RightCont = styled.div`
  // display:flex;	
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  z-index:-1000;
`;

const HeroImg = styled.img`
  width: 100%;
  min-width: 265px;
`;

const BottCont = styled.div`
  padding-left: 8%;
  padding-right: 8%;
`;
const ProjCont = styled.div`
  // display:flex;
  // flex-wrap: wrap;
  justify-content: center;
`;
const Header = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: #1E1B18;
  margin-bottom:0;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media (min-width: 481px) and (max-width: 834px){
    font-size: 25px;
  }
`;

export default function Home() {
  const router = useRouter();
  


  return (
    <Cont
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.25}}}
      className="Cont">
      {/* Top Navigation */}
      <NavCont className="myLogo">
        <LogoCont onClick={() => router.push("/")}>
          <Logo src="/Logo.svg" />
        </LogoCont>
        <Nav />
        <Hamburger />
      </NavCont>

      {/* Body */}

      {/* Hero Image */}
      <MidCont className="midCont">
        <LeftCont className="hero_text">
          <HeroText/>
        </LeftCont>
        <RightCont className="flex">
          <HeroImg className="hero_img" src="/Hero.svg" />
        </RightCont>
      </MidCont>
      
      {/* Contents */}
      <BottCont>
        
        <Header className="highlight">Highlight Projects</Header>

        {/* Projects here */}
        <ProjCont className="grid"> 
          <Projects
            routeTo='/Mylandlord'
            src="/mylandlord.svg" 
            projName="MyLandlord"
            projDesc="Landlord Review Web Application"
          />
          

          <Projects
            routeTo='/BuddingWriters'
            src="/buddingWriters.svg" 
            projName="Budding Writers"
            projDesc="Book Cafe Website"
          />

          <Projects
            routeTo='/DigitalPainting'
            src="/painting.png" 
            projName="Anya Taylor-Joy"
            projDesc="Photograph Recreation Drawing"
          />

          <Projects
            routeTo = "/Wecycle" 
          />
          
          

          <Projects />

        </ProjCont>
      </BottCont>
      <Footer />

    </Cont>
  )
}