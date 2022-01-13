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
  width: 187px;
  height: 54px;
  margin-top: 45px;
  border: none;

  @media screen and (max-width: 480px) {
    width: 91px;
    height: 27px;
    margin-top: 10px;
  }
  @media (min-width: 481px) and (max-width: 834px){
    margin-top: 20px;
    width: 155px;
    height: 45px;
  }
`;

const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 1%;
  padding-left: 5%;

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
  @media (min-width: 481px) and (max-width: 834px){
    font-size: 16px;
  }
  @media screen and (min-width: 835px) {
    font-size: 18px;
  }
`;





const Button = ({
  routeTo ="/"
})=>{
  const router = useRouter();
  return (
      <Cont className="scale" onClick = {() => router.push(routeTo)} >
        <FontAwesomeIcon className="gitHubIcon" icon={faGithub} size="2x" color="#FFFFFF"/>
        <Text>GitHub Link</Text>
      </Cont>
  );
}

export default Button;