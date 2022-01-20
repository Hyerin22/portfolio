import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import Projects from '../comps/Projects';
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

const HeroCont = styled.div`
  display: flex;
  justify-content: center;

`; 
const HeroImg = styled.img`
`;
const BottCont = styled.div`
  padding-left: 8%;
  padding-right: 8%;

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
      </HeroCont>

      {/* Contents */}
      <BottCont className="bottCont">
        <Header 
        text='Projects' 
        marginT='150px'
        />

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
            projName="Let’s Save A Life!"
            projDesc="InDesign E-publication"
          />

        </ProjCont>
      </BottCont>
      <Footer />
    </Cont>
  )     
}
