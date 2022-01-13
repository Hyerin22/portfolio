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

    
`;

const GifBio = styled.img`
    width:100%;
`;



const HeroText = ({

})=>{
    
    return (
        <Cont>
            <Text>Hello, <br/> I am <span className="blueText">Hyerin Cheon</span></Text>
            <GifBio src="/Bio.gif" />
        </Cont>
    );
}

export default HeroText;