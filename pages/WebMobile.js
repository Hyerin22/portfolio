import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Projects from "../comps/Projects";
import Footer from "../comps/Footer";
import TopNav from "../comps/TopNav";

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const HeroCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 55px;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 350px;
  }
  @media (min-width: 992px) {
    height: 350px;
  }
`;

const HeroImg = styled.img`
  @media (min-width: 481px) and (max-width: 991px) {
    width: 50%;
  }
`;
const BottCont = styled.div``;

const ProjCont = styled.div`
  justify-content: center;
`;

export default function WebMobile() {
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
        <HeroImg className="page_hero" src="/WebMobile3.svg" />
      </HeroCont>

      {/* Contents */}
      <BottCont className="container">
        {/* Projects here */}
        <ProjCont className="three-grid">
          <Projects
            routeTo="/Rinflix"
            src="/rinflix.svg"
            projName="Rinflix"
            projDesc="Movie Website - Web Applicatioin"
          />

          <Projects
            routeTo="/VillagerWishlist"
            src="/wishlist.svg"
            projName="Villager Wishlist"
            projDesc="Wishlist Application - Web Applicatioin"
          />

          <Projects
            routeTo="/Mylandlord"
            src="/mylandlord2.svg"
            projName="MyLandlord"
            projDesc="Landlord Review - Website"
          />

          <Projects routeTo="/Wecycle" src="/wecycle2.svg" />

          <Projects
            routeTo="/BuddingWriters"
            src="/buddingWriters2.svg"
            projName="Budding Writers"
            projDesc="Book Cafe - Website"
          />

          <Projects
            routeTo="/Natiive"
            src="/natiive2.svg"
            projName="Natiive"
            projDesc="Indigenous Territory Education - Web Applicatioin
          "
          />
        </ProjCont>
      </BottCont>
      <Footer />
    </Cont>
  );
}
