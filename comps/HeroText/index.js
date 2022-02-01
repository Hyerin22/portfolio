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
    height:70px;
    overflow: hidden;
`;
const AnimatedText = styled.div`
    font-family: Mplus 1p;
    text-align: left;
    font-size: 55px;
    // line-height: 140%;
    color: #1E1B18;

    @media (max-width: 480px){
        font-size: 32px;
        height: 80px;
    }
    @media (min-width: 768px){
        font-size: 32px;
        height: 85px;
    }
    @media (min-width: 992px){
        font-size: 44px;
        height:90px;
    }
`;



const HeroText = ({

})=>{
    
    return (
        <Cont>
            <Text>Hello, <br/> I am <span className="blueText">Hyerin Cheon</span></Text>
            <AnimatedTextCont>
                <AnimatedText className='text_slide'>a Front End Developer</AnimatedText>
                <AnimatedText className='text_slide'>a UX/UI Designer</AnimatedText>
            </AnimatedTextCont>
        </Cont>
    );
}

export default HeroText;