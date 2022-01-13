import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  margin-left: 8%;
`;

const Text = styled.p`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: ${props=>props.fcolor};
  margin-top: 0px;
  margin-bottom: ${props=>props.marginB};
  padding-left: 0px;
  padding-right: 0px;
  line-height: 150%;

  
`;




const SubText = ({
  fcolor="#1E1B18",
  marginB ="35px",
  text="Subhead"
})=>{
    
    return (
        <Cont>
          <Text
            fcolor={fcolor}
            marginB={marginB}
          >{text}</Text>
        </Cont>
    );
}

export default SubText;