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
        <HeroImg className="page_hero" src="/WebMobile2.svg" />
        <IconCont className='scroll_big_screen' href="#go-down">
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
      <BottCont className="bottCont container">
        <Header 
        text='Projects' 
        marginT='150px'
        />

        {/* Projects here */}
        <ProjCont className="grid"> 


        <Projects
          routeTo='/Mylandlord'
          src="/mylandlord.svg" 
          projName="MyLandlord"
          projDesc="Landlord Review Web Application"
        />

        <Projects
          routeTo='/Wecycle'
        />
        
        <Projects
          routeTo='/BuddingWriters'
          src="/buddingWriters.svg" 
          projName="Budding Writers"
          projDesc="Book Cafe Website"
        />

        <Projects
          routeTo='/Natiive'
          src="/natiive.svg" 
          projName="Natiive"
          projDesc="Indigenous Territory Education Web Applicatioin
          "
        />

        </ProjCont>
      </BottCont>
      <Footer />
    </Cont>
  )     
}
