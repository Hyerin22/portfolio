import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Footer from "../comps/Footer";
import BodyText from "../comps/BodyText";
import Button from "../comps/Button";
import SubText from "../comps/SubText";
import IntroBodyText from "../comps/IntroBodyText";
import WithoutLogoButton from "../comps/WithoutLogoButton";
import TopNav from "../comps/TopNav";

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
const ContentContGrid = styled.div`
  justify-content: center;
`;
const RightCont = styled.div`
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 576px) {
  }
`;
const LeftCont = styled.div`
  justify-content: center;
`;
const DesignImg = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 576px) {
  }
`;
const ProjectImg = styled.img`
  width: 100%;
  height: auto;
`;

export default function Rinflix() {
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
          <HeroImg src="/rinflixProj.svg" />
        </HeroCont>

        <IntroCont className="container">
          <IntroHeader className="intro_header">Rinflix</IntroHeader>
          <IntroSub className="intro_sub">Movie Website</IntroSub>
          <IntroBodyText
            text="Rinflix is a personal project website inspired by Netflix. It allows users to get movie information."
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
            text="March 2023 - May 2023"
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
            text="React, REST API, GitHub, Figma"
            paddingR="0px"
            marginB="15px"
          />
          <ButtonCont>
            <Button href="https://github.com/Hyerin22/reactMovieWeb" />
            <WithoutLogoButton
              marginLeft="13px"
              text="Go Live"
              href="https://hyerin22.github.io/reactMovieWeb"
              routeTo="https://hyerin22.github.io/reactMovieWeb"
              bgColor="none"
              butBorder="3px solid #2B6FC7"
              fColor="#2B6FC7"
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
            text="On this website, users can easily browse through various movie categories, including Top 10, Romance, Thriller, and Family. Each movie's information is readily available, including the title, rating, number of likes, genres, and summary. Additionally, users can create their own personalized list of favourite movies by simply clicking on the heart icon, and view them on the favourites page. Furthermore, users can conveniently search for specific movies on the search page."
          />
        </SectionCont>

        <SectionCont>
          <SubText text="Design" marginL="0" />
          <ContentContGrid className="grid">
            <LeftCont>
              <BodyText
                text="My logo is a parody of the original Netflix logo since I inspired the Netflix website."
                marginB="30px"
              />
              <BodyText
                text="The Home page offers a visually engaging cover flow for users to browse movies. Below that, users can explore the top 10 movies for each genre."
                marginB="30px"
              />
            </LeftCont>

            <RightCont>
              <DesignImg src="rinflixDesign.svg" />
            </RightCont>
          </ContentContGrid>
        </SectionCont>

        <SectionCont>
          <SubText text="HiFi Prototype" marginL="0" />
          <ImgCont>
            <ProjectImg src="rinflixFinal.svg" />
          </ImgCont>
        </SectionCont>

        <SectionCont>
          <SubText text="Key Takeaways" marginL="0" />
          <BodyText
            marginB="0"
            text="Users can add the movie that they want to save as a favourite, and they can find their own favourite movies list on favourite page. Even they refresh the page, the site store their favourite movies using by local storage. Moreover, they can search for movies by title on the search page."
          />
        </SectionCont>
        <BottContentCont>
          <SubText text="Challenges" marginL="0" />
          <BodyText
            marginB="0"
            text="The whole project was the first I worked on alone. This project was started for the purpose of practicing API and pagination. While I had some previous experience in these areas, I lacked the confidence to tackle them on my own. So, I sought out help from an online course to learn how to properly implement them."
          />
          <BodyText
            marginB="0"
            text="Through this project, I was able to solidify my understanding of APIs and pagination, which are essential tools for any front-end developer. I am now more confident in my ability to handle these features in future projects. Overall, this experience was incredibly valuable for my growth as a developer."
          />
        </BottContentCont>

        <Footer />
      </ContentCont>
    </Cont>
  );
}
