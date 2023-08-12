import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Footer from "../comps/Footer";
import BodyText from "../comps/BodyText";
import Button from "../comps/Button";
import SubText from "../comps/SubText";
import IntroBodyText from "../comps/IntroBodyText";
import WithoutLogoButton from "../comps/WithoutLogoButton";
import TopNav from "../comps/TopNav";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-family: "M PLUS 1p", sans-serif;
  font-size: 55px;
  font-weight: 800;
  color: #1e1b18;
  margin-bottom: 10px;
  margin-left: 0;
  padding-left: 0;
`;
const IntroSub = styled.p`
  font-family: "M PLUS 1p", sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: #4b4b4b;
  margin-bottom: 25px;
  margin-left: 0;
  padding-left: 0;
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

const ProjectImg = styled.img`
  width: 100%;
  height: auto;
`;

const FlexLeftCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function VillagerWishlist() {
  const router = useRouter();

  return (
    <Cont
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      {/* TopNav */}
      <TopNav />

      {/* Intro Proj */}
      <MainCont className="grid hero_margin">
        <HeroCont>
          <HeroImg src="/myZeroProj.svg" />
        </HeroCont>

        <IntroCont className="container">
          <IntroHeader className="intro_header">MyZERO</IntroHeader>
          <IntroSub className="intro_sub">Eco Rewards Web App</IntroSub>
          <IntroBodyText
            text="MyZERO was a collaborative project involving one additional team member. It was developed for the GNEC Hackathon. MyZERO is a sustainable web app that motivates users to adopt eco-friendly habits by rewarding them with points for using reusable items like bowls and tumblers."
            marginB="50px"
          />
          <IntroBodyText
            text="Role"
            fcolor="#1E1B18"
            paddingR="0px"
            marginB="0px"
          />
          <IntroBodyText
            text="Front-end Developer, UX/UI Designer"
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
            text="July 2023 - August 2023"
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
            text="React, Sass, REST API, PostgreSQL, Express.js, Chart.js, GitHub, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <ButtonCont>
            <Button
              text="GitHub"
              marginR="10px"
              href="https://github.com/Hyerin22/MyZERO"
            />
            <Button
              text="Figma"
              icon={faFigma}
              href="https://www.figma.com/file/ZMbEnoDTY79aAH94zVrxOp/GNEC-Hackathon?type=design&node-id=0-1&mode=design"
            />
          </ButtonCont>
        </IntroCont>
      </MainCont>

      {/* Content Start */}
      <ContentCont className="container">
        <SectionCont>
          <SubText text="Introduction" marginL="0" />
          <BodyText
            marginB="0"
            text="MyZERO is a powerful tool to encourage and motivate people to adopt sustainable habits such as using reusable bowls and tumblers. While it may initially seem inconvenient, once individuals give it a try, they realize it's not as difficult as they may have thought. MyZERO incentivizes this eco-friendly behaviour by rewarding users with points. These points serve as a gratifying reward, making the small challenge of using reusable items a worthwhile and fulfilling endeavour. Through this process, MyZERO inspires positive environmental changes and fosters a greater sense of responsibility towards our planet."
          />
        </SectionCont>

        <SectionCont>
          <SubText text="HiFi Prototype" marginL="0" />
          <ImgCont>
            <ProjectImg src="myZeroFinal.svg" />
          </ImgCont>

          <FlexLeftCont>
            <WithoutLogoButton
              marginLeft="13px"
              text="More on Figma"
              href="https://www.figma.com/file/ZMbEnoDTY79aAH94zVrxOp/GNEC-Hackathon?type=design&node-id=0-1&mode=design"
              bgColor="none"
              butBorder="3px solid #2B6FC7"
              fColor="#2B6FC7"
            />
          </FlexLeftCont>
        </SectionCont>

        <SectionCont>
          <SubText text="Key Takeaways" marginL="0" />
          <BodyText
            marginB="0"
            text="Users can review their history of points earned or spent. Upon joining the community, they can compare their accumulated points with those of other cities. When users have collected a sufficient number of points, they can redeem them for products. Additionally, they can promptly view their purchase history and the corresponding deducted points."
          />
        </SectionCont>
        <BottContentCont>
          <SubText text="Challenges" marginL="0" />
          <BodyText
            marginB="0"
            text="One of our challenges was managing time effectively. With limited time and a small team, we were concerned about meeting deadlines. To tackle this, we created a rough to-do list for the entire project and detailed lists for each morning. We scheduled daily online meetings at 10 am to check our progress, discuss tasks for the day, and offer assistance if any issues arose. With these actions, we successfully completed the project with only two members."
          />
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  );
}
