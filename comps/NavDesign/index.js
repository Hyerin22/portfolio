import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const Cont = styled.div`    
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: ${props=>props.mright};
`;

const PageName = styled.a`
  font-family: 'Heebo', sans-serif;
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  color: #1E1B18;

  :before{
    content : "";
    position: absolute;
    background-color: #2B6FC7;
    height: 2px;
    width : ${props=>props.beforeWidth};
    bottom: -5px; 
    left: 50%;
    transition: 0.5s; 
    transform: translateX(-50%);
  }
  
  :hover {
    color:#2B6FC7; 
  }

  :hover:before {    
    width: 100%;
  }

  :active {
    color: #2B6FC7;
  }

  :active:before {    
    width: 100%;    
  }
`

const NavDesign =({
  mright = "5%",
  beforeWidth="0%"

})=>{
  
  const router = useRouter();
  if(router.pathname === "/Design") 
  {
    return (
      <Cont
        mright={mright}
        onClick={() => router.push("/Design")} 
      >
        <PageName 
          className="NavPage"
          beforeWidth="100%"
          >GRAPHIC DESIGN</PageName>
      </Cont>
    );
  }
  
  return (
    <Cont
      mright={mright}
      onClick={() => router.push("/Design")} 
    >
      <PageName 
        className="NavPage"
        beforeWidth={beforeWidth}
        >GRAPHIC DESIGN</PageName>
    </Cont>
  );
}

export default NavDesign;