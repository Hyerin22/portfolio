import React, {useState} from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';


const Cont = styled.div`
  
`;

const NavCont = styled.button`
  background-color: white;
  border: none;

  .icon-bar {
    display: block;
    width: 35px;
    border: none;
    height: 3px;
    background: #2B6FC7;
    margin-bottom: 4px;
    transition: all 400ms linear;
    cursor: pointer;
  }





`;

const Hamburger = ({
})=>{
  const router = useRouter();

  const [NavOpen, setNavOpen] = useState(false);
  var width = 0;
  var height = 0;


  if(NavOpen){
    width = 100;
    height = 1000;

    // .navbar_toggle span:first-child {
    //     transform: rotate(-45deg);
    //     position: relative;
    //     top: 7.5px;
    // }
    // .navbar-toggler span:last-child {
    //     transform: rotate(45deg);
    //     bottom: 6px;
    //     position: relative;
    // }
  }

  return (
    <Cont >
      <NavCont className="navbar_toggle" onClick={()=>setNavOpen(!NavOpen)}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </NavCont>
    </Cont>
  );
}

export default Hamburger;