import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:0
    width:100%;
`;

const Text = styled.p`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 55px;
    font-weight: 400;
    color: #1E1B18;
    margin-bottom: 0;
    margin-left:0;
    padding-left:0;
    margin-top:0;

    @media (max-width: 480px){
        font-size: 32px;
    }
    @media (min-width: 768px){
        font-size: 32px;
    }
    @media (min-width: 992px){
        font-size: 44px;
    }


`;

const GifBio = styled.img`
    width:100%;
    padding-right: 30px;
`;

const AnimatedTextCont = styled.div`

`;
const AnimatedText = styled.div`
    font-family: Mplus 1p;
    text-align: left;
    font-size: 55px;
    color: #1E1B18;
    margin:0;

    @media (max-width: 480px){
        font-size: 32px;
    }
    @media (min-width: 768px){
        font-size: 32px;
    }
    @media (min-width: 992px){
        font-size: 44px;
    }
`;




const HeroText = ({
    
})=>{
    
    return (
        <Cont>
            <Text>Hello, <br/> I am <span className="lineAnimation">Hyerin Cheon</span></Text>
            <AnimatedTextCont>
                <AnimatedText>a Front End Developer</AnimatedText>
                <AnimatedText>with UX/UI Design Knowledge</AnimatedText>
            </AnimatedTextCont>
        </Cont>
    );
}

export default HeroText;