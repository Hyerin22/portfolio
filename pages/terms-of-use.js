import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import BodyText from '../comps/BodyText';
import Footer from '../comps/Footer';
import TopNav from '../comps/TopNav';

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

const ContentCont = styled.div`
  margin-top: 100px;
  
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
  @media (min-width: 481px) and (max-width: 991px) {
    margin-top: 40px;
  }
`;


const HeaderText = styled.p`
  font-size:40px;
  text-decoration: underline;
  text-decoration-color: #2B6FC7;
  text-underline-offset: 10px;
`


export default function TermsOfUse() {
  const router = useRouter();
    
  return (
    <Cont
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.5}}}>
      {/* TopNav */}
      <TopNav />

      {/* Body */}
      {/* Contents */}
      <ContentCont className='container' id='about-down'>
        {/* profile */}
        <HeaderText>Terms of Use</HeaderText>
        <BodyText 
          size='14px'
          marginB='20px'
          text='Rina Cheon welcomes you to its Web site. 
          Using this Web site indicates your consent and agreement to be bound 
          by this User Agreement and any policies or practices contained herein.'
        />
        <BodyText 
          size='14px'
          marginB='20px'
          text='All content and information &#40;including, but not limited to, code, 
          graphics, photos, guides, promotional materials, press releases, articles, 
          plans, schedules, illustrations, audio clips, and video clips&#41; displayed 
          on this Web site is owned or licensed by Rina Cheon 
          and its respective owners, all content on this site is protected by copyright 
          and other intellectual property laws. Any names, titles, logos and designs displayed 
          on the Web site that contain Rina Cheon, titles, logos, or brands 
          are the exclusive property and trademarks of Rina Cheon or 
          its members. You may not modify, publish, transmit, transfer, sell, reproduce, re-post 
          or alter any such content. Rina Cheon hereby grants you a personal, 
          non-exclusive, non-assignable and non-transferable license to use and display, for home, 
          non-commercial and personal use only, one copy of any content that you may download from 
          this Web site. Any other use or reproduction of this Web site, in whole or in part, will 
          be considered to be a violation of Rina Cheon intellectual property 
          rights.'
        />
        <BodyText
          size='14px'
          marginB='20px'
          text='Your use of this Web site constitutes your agreement to abide 
          by these terms of use included in this online User Agreement. Rina Cheon reserves the right
          to modify, alter or otherwise update this User Agreement at any time.'
        />
        <BodyText
          size='14px'
          marginB='20px'
          text='If you disagree with any of the above terms of 
          use or any part of the User Agreement, do not use this Web site.'
        />
        <BodyText
          size='14px'
          marginB='20px'
          text='Last Update: September 2022'
        />
        <BodyText
          size='14px'
          marginB='20px'
          text='Rina Cheon'
        />
      </ContentCont>
      <Footer />
    </Cont>
  )
}
