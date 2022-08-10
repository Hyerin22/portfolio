import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Nav from '../../comps/Nav';
import Hamburger from '../../comps/Hamburger';


const Cont = styled.div`
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

const TopNav = ({}) => {
  const router = useRouter();

  return (
    <Cont className="myLogo">
      <LogoCont onClick={() => router.push("/")}>
        <Logo src="/Rina.svg" />
      </LogoCont>
      <Nav />
      <Hamburger />
    </Cont>
  );
};

export default TopNav;
