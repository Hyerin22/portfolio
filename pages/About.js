import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { ColorPalette } from "@styled-icons/ionicons-outline/ColorPalette";
import { Code } from "@styled-icons/bootstrap/Code";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BodyText from "../comps/BodyText";
import Footer from "../comps/Footer";
import Header from "../comps/Header";
import TopNav from "../comps/TopNav";

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
`;
const NavCont = styled.div`
  display: flex;
  padding-left: 3%;
  flex-direction: row;
  box-sizing: border-box;
`;

const LogoCont = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const Logo = styled.img`
  width: auto;
`;

const HeroCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 350px;
  }
  @media (min-width: 992px) {
    height: 350px;
  }
`;

const SkillCont = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const HeroImg = styled.img`
  @media (min-width: 481px) and (max-width: 991px) {
    width: 60%;
  }
`;

const ContentCont = styled.div``;

const SectionCont = styled.div`
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;
const MidCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

const ContentContGrid = styled.div`
  justify-content: center;
  width: 100%;
`;

const ImgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 480px) {
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
  // @media (min-width: 481px) and (max-width: 1024px){
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
`;

const ProfileImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

const RightCont = styled.div`
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 480px) {
  //   font-size: 25px;
  // }
  @media (max-width: 834px) {
    text-align: center;
  }
`;

const CodeIcon = styled(Code)`
  color: #2b6fc7;
  width: 40px;
  margin-bottom: 10px;
`;

const PaletteIcon = styled(ColorPalette)`
  color: #2b6fc7;
  width: 40px;
  margin-bottom: 10px;
`;

const SnsIconCont = styled.div`
  display: flex;

  @media (max-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const SnsLink = styled.a`
  margin-right: 70px;
  font-size: 18px;

  @media (max-width: 834px) {
    margin-right: 0px;
  }
`;

export default function About() {
  const router = useRouter();

  return (
    <Cont
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      {/* TopNav */}
      <TopNav />

      {/* Body */}

      {/* HeroImage */}
      <HeroCont>
        <HeroImg className="page_hero" src="/About2.svg" />
        {/* <IconCont className='scroll_big_screen' href="#about-down">
          <FontAwesomeIcon 
            className="arrow_scale arrow" 
            icon={faChevronDown} 
            size="2x" 
            color="#2B6FC7"
            width={20}
            />
        </IconCont> */}
      </HeroCont>

      {/* Contents */}
      <ContentCont className="container" id="about-down">
        {/* profile */}
        <SectionCont>
          <ContentContGrid className="about_prof_grid container">
            <ImgCont>
              <ProfileImg src="rin_profile.jpeg" />
            </ImgCont>
            <RightCont>
              <Header
                marginB="40px"
                marginT="25px"
                text="Hello I&#39;m Rina!"
                display="none"
              />
              <BodyText
                paddingR="0"
                marginB="30px"
                text="I&#39;m a Digital Design & Development student at BCIT who is an aspiring Front-End Developer with design knowledge."
              />
              <BodyText
                paddingR="0"
                marginB="30px"
                text="My goal is to improve the user's experience through coding and design. I believe that the task of a developer is to provide users with the best possible experience with good code."
              />
              <BodyText
                paddingR="0"
                marginB="30px"
                text="I enjoy spending time with people, playing the piano and taking part in outdoor activities. If you want to know more about me, feel free to send me an email! "
              />
              <SnsIconCont>
                <SnsLink
                  target="_blank"
                  href="https://www.linkedin.com/in/rinaacheon/"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faLinkedinIn}
                    size="lg"
                    color="#2E3A59"
                    width={20}
                  />
                </SnsLink>
                <SnsLink href="mailto:hlyni22@gmail.com">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faEnvelope}
                    size="lg"
                    color="#2E3A59"
                    width={20}
                  />
                </SnsLink>
                <SnsLink href="https://github.com/Hyerin22">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faGithub}
                    size="lg"
                    color="#2E3A59"
                    width={20}
                  />
                </SnsLink>
              </SnsIconCont>
            </RightCont>
          </ContentContGrid>
        </SectionCont>
        {/* capability */}
        <MidCont>
          <Header text="Capabilities" marginT="150px" display="none" />
          <ContentContGrid className="about_skill_grid container">
            <SkillCont>
              <CodeIcon />
              <BodyText text="HTML5, CSS3, Next.js, React, React Native, Expo, JavaScript, jQuery, SASS, WordPress, Github, MongoDB, PHP, MySQL, Docker, Storybook" />
            </SkillCont>
            <SkillCont>
              <PaletteIcon />
              <BodyText text="Figma, Adobe Creative Cloud (Photoshop, Illustration, InDesign, AfterEffects, Premiere Pro)" />
            </SkillCont>
          </ContentContGrid>
        </MidCont>
      </ContentCont>
      <Footer margint="30px" />
    </Cont>
  );
}
