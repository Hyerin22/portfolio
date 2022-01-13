import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;
const SnsLink = styled.a`
    margin-left: 70px;
    margin-right: 72px;
`;
const SnsIcon = styled.img`

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
    margin-top:15px;
    justify-content: space-between;
    align-items: center;
`;

const FooterPolicy = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1E1B18;
`;

const VerLine = styled.span`
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
                    <SnsIcon src="/linkedin.svg"/>
                </SnsLink>
                <SnsLink href="mailto:hlyni22@gmail.com">
                    <SnsIcon src="/email.svg"/>
                </SnsLink>
            </SnsIconCont>
            <FooterText>© Hyerin Cheon Portfolio 2022</FooterText>
            <PolicyCont>
                <FooterPolicy>Terms of Use</FooterPolicy>
                <VerLine />
                <FooterPolicy>Privacy Policy</FooterPolicy>
            </PolicyCont>
        </Cont>
    );
}

export default Footer;