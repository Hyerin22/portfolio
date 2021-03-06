import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import Nav from '../comps/Nav';
import Hamburger from '../comps/Hamburger';
import HeroText from '../comps/HeroText';
import Projects from '../comps/Projects';
import ProjectsHome from '../comps/ProjectsHome';
import Footer from '../comps/Footer';
import Header from '../comps/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SubText from '../comps/SubText';

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
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;

`;

const HeroCont = styled.div`
  flex-direction: row;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  padding-left: 8%;
  
`;
const ArrowCont = styled.div`
  padding-top: 70px;

`;

const LeftCont = styled.div`
  box-sizing: border-box;
  width:100%;
`;

const RightCont = styled.div`
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  z-index:-1000;
`;
const IconCont = styled.a`
  text-decoration: none;
`;

const HeroImg = styled.img`
  width: 100%;
  min-width: 265px;
`;

const BottCont = styled.div`

`;


const ProjCont = styled.div`
  justify-content: center;
`;

export default function Home() {
  const router = useRouter();
  


  return (
    <Cont
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.5}}}
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
      <MidCont>
        <HeroCont className="heroCont">
          <LeftCont className="hero_text">
            <HeroText/>
          </LeftCont>
          <RightCont className="flex">
            <HeroImg className="hero_img" src="/Hero.svg" />
          </RightCont>
        </HeroCont>
        <ArrowCont className='arrow_top'>
          <IconCont className='scroll_big_screen' href="#go-down">
            <FontAwesomeIcon 
              id="go-down"
              className="arrow_ani arrow" 
              icon={faChevronDown} 
              size="2x" 
              color="#2B6FC7"
              width={20}
              />
          </IconCont>
        </ArrowCont>
        <Header 
        text='My Recent Works'
        marginT='100px'
        />
      </MidCont>
      
      {/* Contents */}
      <BottCont className='container'>
        

        {/* Projects here */}
        <ProjCont className="grid"> 
        <ProjectsHome
          routeTo='/VillagerWishlist'
          src="/wishlist.svg" 
          projName="Villager Wishlist"
          projDesc="Wishlist Application - Web Applicatioin"
        />
          <ProjectsHome
            routeTo='/Mylandlord'
            src="/mylandlord.svg" 
            projName="MyLandlord"
            projDesc="Landlord Review - Website"
          />

        </ProjCont>
      </BottCont>
      <Footer />

    </Cont>
  )
}