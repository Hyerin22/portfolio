import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';


const Cont = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${props=>props.bgColor};
  border-radius: 35px;
  margin-left: ${props=>props.marginLeft};

  border: ${props=>props.butBorder};
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

const Link = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${props=>props.fColor};
  padding-left: 0;

  @media (max-width: 480px){
    font-size: 14px;
  }
  @media (min-width: 768px){
    font-size: 16px;
  }
  @media (min-width: 992px){
    font-size: 18px;
  }
`;





const WithoutLogoButton = ({
  routeTo ="/",
  text="GitHub Link",
  marginLeft ="0",
  href="",
  butBorder="none",
  bgColor="#2B6FC7",
  fColor="#FFFFFF"
})=>{
  return (
      <Cont 
        className="scale button_scale live_link"
        marginLeft={marginLeft} 
        href={href}
        target='_blank'
        butBorder={butBorder}
        bgColor={bgColor}
        >
        <Link 
        fColor={fColor}
        >{text}</Link>
      </Cont>
  );
}

export default WithoutLogoButton;