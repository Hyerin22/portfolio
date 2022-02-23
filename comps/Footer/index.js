import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-bottom:40px;
    margin-top: 120px;
`

const Logo = styled.img`
    cursor: pointer;
`;
const SnsIconCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const SnsLink = styled.a`
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 32px;
    font-size: 18px;
`;

const FooterText = styled.p`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1E1B18;
    margin-top: 35px;
    margin-bottom:0;
`;

const PolicyCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:15px;
    align-items: center;
`;

const FooterPolicy = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1E1B18;
`;

const VerLine = styled.div`
    display: inline-block;
    border-left: 1px solid #2B6FC7;
    margin: 0 10px;
    height: 20px;
`;




const Footer = ({

})=>{
    const router = useRouter();
    return (
        <Cont>
            <Logo src="/Logo.svg" onClick={() => router.push("/")}/>
            <SnsIconCont>
                <SnsLink target="_blank" href="https://www.linkedin.com/in/hyerin-cheon/">
                    <FontAwesomeIcon className="icons" icon={faLinkedinIn} size="lg" color="#2E3A59" width={20}/>
                </SnsLink>
                <SnsLink href="mailto:hlyni22@gmail.com">
                    <FontAwesomeIcon className="icons" icon={faEnvelope} size="lg" color="#2E3A59" width={20}/>
                </SnsLink>
                <SnsLink href="https://github.com/Hyerin22">
                    <FontAwesomeIcon className="icons" icon={faGithub} size="lg" color="#2E3A59" width={20}/>
                </SnsLink>
            </SnsIconCont>
            <FooterText>© Hyerin Cheon Portfolio 2022</FooterText>
            {/* <PolicyCont>
                <FooterPolicy>Terms of Use</FooterPolicy>
                <VerLine />
                <FooterPolicy>Privacy Policy</FooterPolicy>
            </PolicyCont> */}
        </Cont>
    );
}

export default Footer;