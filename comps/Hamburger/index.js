import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import react, {useState} from 'react';

const MenuCont = styled.div`
  display: flex;
  flex-direction:column;
  z-index: 1000;
  position: relative;
  max-width: 368px;
  margin-right: 10%;

@media (min-width: 481px) {
  display: none;
}

`;

const Menuholder = styled.label`
  z-index: 2000;

  position: relative;

  top: ${props=>props.top};
  left: ${props=>props.left};
`;

const Contholder = styled.div`
  display:flex;
  flex-direction:column;
  background-color:white;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 3px 18px 50px -21px rgba(0,0,0,0.48);

  width: 100%;
  min-width: 240px;
  height: 100vh;
  display: ${props=>props.display};
  
  zIndex: ${props=>props.zIndex};
  overflow:hidden;
  transition: max-width 0s, max-height 1s;
  top:0;
  left: 0;
  position: fixed;
`;

const PageHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 15px 0 15px;
`;


const Page = styled.a`
  padding:20px;
  text-decoration: none;
  background-color: transparent;
  font-size: 18px;
  display: block;
  positoin: relative;
  color: #1E1B18;

  :hover{
    color: #2B6FC7;
  }

`;


const LogoCont =styled.div`
  display:flex;
  flex-direction: row;
  flex: 1;
  align-items:center;
  justify-content:space-between;
  cursor: pointer;
  max-width: 85px;
  height: auto;
`

const Logo = styled.img`
  width: 68px;
  cursor: pointer;
  padding: 30px 0px 0 20px;
`;

const Menu = ({

}) =>{

// ============for categories===============
    const [open, setOpen] = useState(false);

    // var width = "100vw";
    // var height = "0";
    var zIndex = -1000;
    
    var top = "40px";
    var left = "0px";
    // var opacity = "0"
    var display = "none";
    
    if(open){
      // var width = "100vw";
      // var height = "100vh";
      var zIndex = 100;

      var top = "40px"
      var left = "0px"
      // var opacity ="1"
      var display = "block";
    }

    const router = useRouter();
    
    return (
    <MenuCont>
      <Menuholder top={top} left={left}>
          <input type="checkbox" onClick={()=>setOpen(!open)}/> 
          <span></span>
          <span></span>
          <span></span>
      </Menuholder>

        <Contholder zIndex={zIndex} display={display}> 
          {/* <LogoCont onClick={() => router.push("/")}> */}
            <Logo src="/Logo.svg" onClick={() => router.push("/")} />
          {/* </LogoCont> */}
            <PageHolder className="MobPage">
              <Page 
                onClick={()=>router.push('/')} 
                className={router.pathname == "/" ? "active" : ""}
                >HOME</Page>
              <Page onClick={()=>router.push('/WebMobile')} >WEB/MOBILE APP</Page>
              <Page onClick={()=>router.push('/Design')} className="region" >GRAPHIC DESIGN</Page>
              <Page onClick={()=>router.push('/About')} className="region" >ABOUT</Page>
              <a className="resume" href='/hyerincheon-resume.pdf' download>RESUME</a>
            </PageHolder>
        </Contholder>
    </MenuCont>
    )
}

export default Menu;