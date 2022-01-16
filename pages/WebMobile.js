import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
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



export default function WebMobile() {
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
        <HeroImg className="page_hero" src="/WebMobile.svg" />
      </HeroCont>

      {/* Contents */}
      <BottCont className="bottCont">
        <Header>Web/Mobile App Projects</Header>

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
          routeTo = "/Wecycle"
        />

        <Projects />

        </ProjCont>
      </BottCont>
      <Footer />
    </Cont>
  )     
}
