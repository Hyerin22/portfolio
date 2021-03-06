import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  margin-left: ${props=>props.marginL};
`;

const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: ${props=>props.fcolor};
  margin-top: ${props=>props.marginT};
  margin-bottom: ${props=>props.marginB};
  padding-left: 0px;
  padding-right: 0px;
  line-height: 150%;

  @media (max-width: 480px){
    font-size: 25px;
  }
  @media (min-width: 768px){
    font-size: 35px;
  }
  @media (min-width: 992px){
    font-size: 35px;
  }
`;




const SubText = ({
  fcolor="#1E1B18",
  marginB ="35px",
  text="Subhead",
  marginL = "8%",
  marginT ="0"
})=>{
    
    return (
        <Cont marginL ={marginL} >
          <Text
            fcolor={fcolor}
            marginB={marginB}
            marginT={marginT}
          >{text}</Text>
        </Cont>
    );
}

export default SubText;