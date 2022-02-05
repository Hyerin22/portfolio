import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Router } from 'next/router';

const Cont = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#2B6FC7;
  border-radius: 35px;
  padding: 0;

  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 130px;
    height: 40px;
    margin-top: 10px;
  }
  @media (min-width: 768px){
    margin-top: 20px;
    width: 140px;
    height: 45px;
  }
  @media (min-width: 992px) {
    width: 170px;
    height: 54px;
    margin-top: 35px;
  }
`;

const Link = styled.a`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  display: inline;
  font-weight: 400;
  color: #FFFFFF;
  padding-left: ${props=>props.paddingLeft};

  @media (max-width: 480px){
    font-size: 13px;
  }
  @media (min-width: 768px){
    font-size: 14px;
  }
  @media (min-width: 992px){
    font-size: 18px;
  }
`;





const Button = ({
  routeTo ="/",
  text="GitHub",
  paddingLeft = "5%",
  href="/"
})=>{
  const router = useRouter();
  return (
      <Cont 
        className="scale button_scale" 
        onClick = {() => router.push(routeTo)} 
      >
        <FontAwesomeIcon className="gitHubIcon" icon={faGithub} size="2x" color="#FFFFFF"/>
        <Link href={href} paddingLeft={paddingLeft}>{text}</Link>
      </Cont>
  );
}

export default Button;