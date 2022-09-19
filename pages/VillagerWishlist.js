import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion";


import Footer from '../comps/Footer';
import BodyText from '../comps/BodyText';
import Button from '../comps/Button';
import SubText from '../comps/SubText';
import IntroBodyText from '../comps/IntroBodyText';
import WithoutLogoButton from '../comps/WithoutLogoButton';
import TopNav from '../comps/TopNav';

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const MainCont = styled.div`
  justify-content: center;
  margin-top: 120px;
`;

const HeroCont = styled.div`
  justify-content: center;
  align-items: center;
`;
const HeroImg = styled.img`
  width: 100%;
`;

const IntroCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  // margin-left: 7%;
`;
const IntroHeader = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 55px;
  font-weight: 800;
  color: #1E1B18;
  margin-bottom: 10px;
  margin-left:0;
  padding-left:0;

`;
const IntroSub = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: #4B4B4B;
  margin-bottom: 25px;
  margin-left:0;
  padding-left:0;
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentCont = styled.div``;

const SectionCont = styled.div`
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }
`;
const ImgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottContentCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
`;
const ContentContGrid = styled.div`
  justify-content: center;
  align-items: center;
  // margin-right: 8%;
`;
const RightCont = styled.div`
  justify-content: center;
  // margin-left: 10%;
  margin-top: 10px;

  @media (max-width: 576px) {
    // margin-left: 20%;
  }
`;
const LeftCont = styled.div`
  justify-content: center;
  // margin-left: -4%;
`;
const DesignImg = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 576px) {
    // max-width: 90%;
  }
`;
const ProjectImg = styled.img`
  width: 100%;
  height: auto; 
`;



export default function VillagerWishlist() {
  const router = useRouter();

  return (
    <Cont 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 0.5}}}>
      {/* TopNav */}
      <TopNav />

      {/* Intro Proj */}
      <MainCont className="grid hero_margin">
        <HeroCont>
          <HeroImg src="/vwProj.svg" />
        </HeroCont>
        
        <IntroCont className='container'>
          <IntroHeader className='intro_header'>Villager Wishlist</IntroHeader>
          <IntroSub className='intro_sub'>Wishlist Application</IntroSub>
          <IntroBodyText 
            text = "VillagerWishlist was a team project with 6 members. It is an app for Animal Crossing players that allows them to add villagers they want to invite to their island and know their information."
            marginB = "50px"
          />
          <IntroBodyText 
            text = "Role"
            fcolor = "#1E1B18"
            paddingR = "0px"
            marginB = "0px"
          />
          <IntroBodyText
            text="Front-end/Back-end Developer, UX/UI Designer"
            paddingR="0px"
            marginB="15px"
          />
          <IntroBodyText 
            text="Date"
            fcolor="#1E1B18"
            paddingR="0px"
            marginB="0px"
          />
          <IntroBodyText
            text="January 2022 - March 2022"
            paddingR="0px"
            marginB="15px"
          />
          <IntroBodyText 
            text="Tools"
            fcolor="#1E1B18"
            paddingR="0px"
            marginB="0px"
          />
          <IntroBodyText
            text="React, Next.js, SASS, MongoDB, Mongoose, Express, REST API, GitHub, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <ButtonCont>
            <Button 
            text='Frontend'
            marginR="10px"
            href='https://github.com/Hyerin22/villager-wishlist'
            />
            <Button 
            text='Backend'
            href='https://github.com/Hyerin22/villager-wishlist-backend-1'
            />
            <WithoutLogoButton 
              marginLeft='13px' 
              text='Go Live' 
              href='https://acnh-villagerwishlist.vercel.app/'
              routeTo='https://acnh-villagerwishlist.vercel.app/'
              bgColor='none'
              butBorder='3px solid #2B6FC7'
              fColor='#2B6FC7'
              />
          </ButtonCont>
        </IntroCont>
      </MainCont>
      
      {/* Content Start */}
      <ContentCont className='container'>
        <SectionCont>
          <SubText text="Introduction" marginL="0"/>
          <BodyText 
            marginB='0'
            text = "Through our application, players of Animal Crossing games can find villagers they want to invite to their town through filtering, getting information, and adding them to their own wishlists. This application also allows users to communicate with others through a chat page." 
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Design" marginL='0'/>
          <ContentContGrid className="grid2">
            <LeftCont>
              <BodyText 
                text = "Each village has its own personality, and we wanted to show it to users in different colours. Also, we chose colours that fit well with our dark mode."
                marginB="30px"
              />
            </LeftCont>
            
            <RightCont>
              <DesignImg src="villagerWishlistDesign.svg" />
            </RightCont>
          </ContentContGrid>
        </SectionCont>

        <SectionCont>
          <SubText text = "HiFi Prototype" marginL='0'/>
          <ImgCont>
            <ProjectImg src="vwFinal.svg" />
          </ImgCont>
        </SectionCont>

        <SectionCont>
          <SubText text="Key Takeaways" marginL="0"/>
          <BodyText 
            marginB='0'
            text = "Users can log in and sign up with their Google account and they can also sign up within our application. In addition, they can search for villagers and filter them with a filter panel. When they find what they want, they can add them to their own wishlist and get information about them.  To get more information, they can chat with other people depending to their topic." 
          />
        </SectionCont>
        <BottContentCont>
          <SubText text="Challenges" marginL="0"/>
          <BodyText 
            marginB='0'
            text = "This was the first project I worked on as a backend developer. We needed to use data using API. Importing the data and using them for what we wanted was one of the most difficult challenges. In addition, we had to use our time efficiently since we needed to focus on both frontend and backend. We worked on a tight schedule while asking a lot of questions about the parts that we were stuck to professors. Through this process, we successfully completed a fully functional and successful web application." 
          />
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  )
}