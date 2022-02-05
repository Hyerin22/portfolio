import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

import NavPage from '../NavPage';
import NavWeb from '../NavWeb';
import NavDesign from '../NavDesign';
import NavAbout from '../NavAbout';

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
                    <NavWeb />
                    <NavDesign />
                    <NavAbout />
                    <a className="resume" href='/Hyerin_Cheon_Resume.pdf' download>RESUME</a>
                </RightBar>
            </NavCont>
        </Cont>
    );
}

export default Nav;