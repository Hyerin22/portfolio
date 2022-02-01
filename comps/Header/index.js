import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: ${props=>props.fcolor};
  margin-bottom: ${props=>props.marginB};
  margin-top: ${props=>props.marginT};

  @media (max-width: 480px){
    font-size: 25px;
  }
  @media (min-width: 768px){
    font-size: 25px;
  }
  @media (min-width: 992px){
    font-size: 35px;
  }
`;

const TextLine = styled.div`
  display: ${props=>props.display};
  position: relative;
  background-color: #2B6FC7;
  bottom: -10px; 
  height: 2px;
  width: 100%;
`;

const Header = ({
  fcolor = "#1E1B18",
  marginB = "0",
  text = "header",
  marginT = "0",
  display = "block"

})=>{

    return (
        <Cont >
          <Text
            id="go-down"
            fcolor={fcolor}
            marginB={marginB}
            marginT={marginT}
          >{text}
          </Text>
          <TextLine display={display}/>
          
        </Cont>
    );
}

export default Header;