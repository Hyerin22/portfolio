import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';


const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${props=>props.bgColor};
  border-radius: 35px;
  margin-left: ${props=>props.marginLeft};

  border: ${props=>props.butBorder};
  cursor: pointer;

  @media (max-width: 480px) {
    width: 135px;
    height: 40px;
    margin-top: 10px;
  }
  @media (min-width: 768px){
    margin-top: 20px;
    width: 155px;
    height: 45px;
  }
  @media (min-width: 992px) {
    width: 167px;
    height: 54px;
    margin-top: 35px;
  }
`;

const Link = styled.a`
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





const DownloadButton = ({
  routeTo ="/",
  text="GitHub Link",
  marginLeft ="0",
  href="",
  butBorder="none",
  bgColor="#2B6FC7",
  fColor="#FFFFFF"
})=>{
  const router = useRouter();
  return (
      <Cont 
        className="scale button_scale"
        marginLeft={marginLeft} 
        onClick = {() => router.push(routeTo)}
        butBorder={butBorder}
        bgColor={bgColor}
        >
        <Link 
        href={href}
        fColor={fColor}
        >{text}</Link>
      </Cont>
  );
}

export default DownloadButton;