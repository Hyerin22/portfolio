import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import HeroText from '../comps/HeroText';
import Projects from '../comps/Projects';
import ProjectsHome from '../comps/ProjectsHome';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import TopNav from '../comps/TopNav';
import WithoutLogoButton from '../comps/WithoutLogoButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SubText from '../comps/SubText';
import Button from '../comps/Button';

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

const MoreButtCont = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#2B6FC7;
  border-radius: 35px;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-top: 50px;

  @media (max-width: 480px) {
    width: 130px;
    height: 40px;
    margin-top: 20px;
  }
  @media (min-width: 768px){
    width: 140px;
    height: 45px;
    margin-top: 20px;
  }
  @media (min-width: 992px) {
    width: 170px;
    height: 54px;
  }
`;

const MoreButt = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  margin-right: 8px;

  @media (max-width: 480px){
    font-size: 14px;
  }
  @media (min-width: 768px){
    font-size: 16px;
  }
  @media (min-width: 992px){
    font-size: 18px;
}     
`;

export default function Home() {
  const router = useRouter();
  


  return (
    <Cont
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.5}}}
      className="Cont">

      {/* Top Navigation */}
      <TopNav />

      {/* Body */}

      {/* Hero Image */}
      <MidCont>
        <HeroCont className="heroCont">
          <LeftCont className="hero_text">
            <HeroText/>
          </LeftCont>
          <RightCont className="flex">
            <HeroImg className="hero_img" src="/Hero2.svg" />
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
        <div style={{position: 'relative'}}>
          <MoreButtCont 
            onClick={() => router.push('/WebMobile')}
            className="scale button_scale live_link">
            <MoreButt>More Works</MoreButt>
            <FontAwesomeIcon className='gitHubIcon' icon={faArrowRight} color="#FFFFFF" />
          </MoreButtCont>

        </div>
      </BottCont>
      <Footer />

    </Cont>
  )
}