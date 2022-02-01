import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import Projects from '../comps/Projects';
import Footer from '../comps/Footer';
import Header from '../comps/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
  margin-bottom: 60px;
`; 

const IconCont = styled.a`
  text-decoration: none;
`;

const HeroImg = styled.img`
`;
const BottCont = styled.div`
`;

const ProjCont = styled.div`
  justify-content: center;
`;


export default function Graphics() {
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
        <HeroImg className="page_hero" src="/Graphics.svg" />
        <IconCont className='scroll_big_screen' href="#go-down">
          <FontAwesomeIcon 
            className="arrow_scale arrow" 
            icon={faChevronDown} 
            size="2x" 
            color="#2B6FC7"
            width={20}
            />
        </IconCont>
        <Header 
        text='Projects' 
        marginT='100px'
        />
      </HeroCont>

      {/* Contents */}
      <BottCont className="bottCont container">

        {/* Projects here */}
        <ProjCont className="grid"> 

          <Projects
            routeTo='/DigitalPainting'
            src="/painting.png" 
            projName="Anya Taylor-Joy"
            projDesc="Photograph Recreation Drawing"
          />
          <Projects
            routeTo='/HunterPoster'
            src="/hunter_2.png" 
            projName="Hunter Poster"
            projDesc="Advertising poster"
          />
          <Projects
            routeTo='/Epub'
            src="/ePub.svg" 
            projName="Let&#39;s Save A Life!"
            projDesc="InDesign E-publication"
          />
          <Projects
            routeTo='/WalkmanIllustration'
            src="/illustPaint.png" 
            projName="Realistic Illustration"
            projDesc="Sony Walkman Sports"
          />

        </ProjCont>
      </BottCont>
      <Footer />
    </Cont>
  )     
}
