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

const Cont = styled(motion.div)`
  display:flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content:center;

  li {
    font-size: 18px;
    color: #4B4B4B
  }
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
  text-underline-offset: 15px;
`


export default function PrivacyPolicy() {
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
      {/* Contents */}
      <ContentCont className='container' id='about-down'>
        {/* profile */}
        <HeaderText>Privacy Policy</HeaderText>
        <BodyText 
          marginB='20px'
          text='This policy applies to Hyerin&#40;Rin&#41; Cheon Web site only. It is designed 
          to inform you of how and why Hyerin&#40;Rin&#41; Cheon gathers personal 
          and non-personal information about you. This policy complies with provisions 
          of the British Columbia Freedom of Information and Protection of Privacy Act.'
        />
        <BodyText 
          marginB='20px'
          text='This may be Web site connected by "hyperlinks" to other Web sites. 
          We are not responsible in any way for the privacy practices on other Web sites 
          and suggest that you review the privacy policies on those linked Web sites before using them.'
        />
        <BodyText
          marginB='20px'
          text='We are accountable for this Privacy Policy and these practices on this Web site, including the Privacy Code set out below. If you have any questions or concerns regarding the privacy practices on this Web site, please e-mail us.'
        />
        <BodyText
          marginB='20px'
          text='What Information Is Collected?'
        />
        <BodyText
          marginB='20px'
          text='Hyerin&#40;Rin&#41; Cheon collects two kinds of information from this Web site'
        />
        <BodyText
          marginB='20px'
          text='(A) Your voluntarily provided personal information. (B) Anonymous information about your visit'
        />
        <BodyText
          marginB='20px'
          text='A. Your Personal Information:'
        />
        <BodyText
          marginB='20px'
          text='During normal Web site usage, you can visit this site without communicating any personal information. However, to make use of certain features on this site, such as gift certificates, promotions, subscriptions or newsletters, users may be asked to register with Hyerin&#40;Rin&#41; Cheon Web site. As part of this voluntary registration, Hyerin&#40;Rin&#41; Cheon may request contact information (such as name, mailing address, e-mail address, etc.) and other data required for operating these services. The only way we can collect personal information from you is if you voluntarily provide it. By voluntarily providing this personal information to us by sending us a comment or suggestion, by entering a contest that is posted on this Web site, you will be consenting to the collection, use and distribution of your personal information by Hyerin&#40;Rin&#41; Cheon for the purposes set out. You are under no obligation to provide us with personal information and can access and enjoy many parts of Hyerin&#40;Rin&#41; Cheon Web site without providing us any personal information. Among other things, the following is a representative list of reasons we may ask for your personal information:'
        />
        <ul>
          <li>To run contests, select entrants, and choose prize winners;</li>
          <li>To respond to your questions or the comments you e-mail to us;</li>
          <li>To provide you with newsletters, bulletins or other information about our design or communication activities.</li>
          <li>To keep aggregate information on Web site use.</li>
        </ul>
        
        <BodyText
          marginB='20px'
          text='B. Anonymous Information About Your Visit:'
        />
        <BodyText
          marginB='20px'
          text='When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors.'
        />
        <BodyText
          marginB='20px'
          text='Hyerin&#40;Rin&#41; Cheon may collect the following non-identifiable information when you visit this Web site:'
        />
        <ul>
          <li>Your Internet Service Provider (ISP)</li>
          <li>Time of your visit</li>
          <li>Pages you visited</li>
          <li>Web Browser Used</li>
        </ul>
        
        <BodyText
          marginB='20px'
          text='What If I Do Not Agree With this Privacy Policy?'
        />
        <BodyText
          marginB='20px'
          text='By visiting this Web site and voluntarily providing personal information to Hyerin&#40;Rin&#41; Cheon Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein. However, We welcome your comments and/or suggestions on improving this Web site and policies.'
        />
        <BodyText
          marginB='20px'
          text='Hyerin&#40;Rin&#41; Cheon'
        />
        <BodyText
          marginB='20px'
          text='March 2022'
        />
      </ContentCont>
      <Footer />
    </Cont>
  )
}
