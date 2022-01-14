import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  margin-left: ${props=>props.marginL};
  `;
  
  const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  display: inline-block;
  overflow: hidden;
  white-space: ${props=>props.wspace};
  font-weight: 400;
  color: ${props=>props.fcolor};
  margin-top: 0px;
  margin-bottom: ${props=>props.marginB};
  padding-left: 0px;
  padding-right: ${props=>props.paddingR};
  line-height: 150%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 834px){
    font-size: 18px;
  }
  @media screen and (min-width: 835px) {
    font-size: 18px;
  }
`;




const BodyText = ({
  wspace = "wrap",
  fcolor="#4B4B4B",
  marginL = "0%",
  paddingR = "10%",
  marginB ="50px",
  text="bodyyyy"
})=>{
    
    return (
        <Cont marginL={marginL}>
          <Text
            className="bodyText"
            wspace={wspace}
            fcolor={fcolor}
            marginB={marginB}
            paddingR={paddingR}
          >{text}</Text>
        </Cont>
    );
}

export default BodyText;