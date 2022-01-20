import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`

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


const Header = ({
  fcolor = "#1E1B18",
  marginB = "0",
  text = "header",
  marginT = "0"

})=>{

    return (
        <Cont>
          <Text
            fcolor={fcolor}
            marginB={marginB}
            marginT={marginT}
          >{text}</Text>
        </Cont>
    );
}

export default Header;