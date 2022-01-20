import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

import NavPage from '../NavPage';

const Cont = styled.div`
    width: 100%;
    height: 105px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    z-index: 999;
    margin-bottom: ${props => props.marginB}px;
    padding-right:3%;
    margin-bottom:0

`;

const NavCont = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    
`

// const LeftBar =styled.div`
//     display:flex;
//     flex-direction: row;
//     flex: 1;
//     align-items:center;
//     justify-content:space-between;
// `
// const Logo = styled.img`
//     width:auto;
// `;

const RightBar = styled.div`
    display:flex;
    flex: 1.5;
    align-items:center;
    justify-content: flex-end;

    @media (max-width: 480px) {
        display: none;
    }
`


const Nav = ({
    marginB = 0,
})=>{
    const router = useRouter();

    return (
        <Cont marginB={marginB}>
            <NavCont>
                <RightBar>
                    <NavPage text="WEB/MOBILE APP" onc routeTo="/WebMobile"/>
                    <NavPage routeTo="/Graphics" />
                    <NavPage text="ABOUT ME" mright="0" routeTo="/About"/>
                </RightBar>
            </NavCont>
        </Cont>
    );
}

export default Nav;