import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  margin-left: ${props=>props.marginL};
`;

const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${props=>props.fcolor};
  margin-top: 0px;
  margin-bottom: ${props=>props.marginB};
  padding-left: 0px;
  padding-right: ${props=>props.paddingR};
  line-height: 150%;

  @media (max-width: 480px){
    font-size: 16px;
  }
  @media (min-width: 768px){
    font-size: 16px;
  }
  @media (min-width: 992px){
    font-size: 18px;
  }
`;




const IntroBodyText = ({
  fcolor="#4B4B4B",
  marginL = "0%",
  paddingR = "10%",
  marginB ="50px",
  text="bodyyyy"
})=>{
    
    return (
        <Cont marginL={marginL}>
          <Text
            fcolor={fcolor}
            marginB={marginB}
            paddingR={paddingR}
          >{text}</Text>
        </Cont>
    );
}

export default IntroBodyText;