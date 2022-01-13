import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Cont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    box-sizing: border-box;
    margin-right: ${props=>props.mright};
`;

const PageName = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    color: #1E1B18;

    :before{
        content : "";
        position: absolute;
        background-color: #2B6FC7;
        height: 1.5px;
        width : 0;
        bottom: -5px; left: 50%;
        transition: 0.5s; 
        transform: translateX(-50%);
    }
    
    :hover {
        color: #2B6FC7;
    }

    :hover:before {    
        width: 100%;
    }

    :active {
        color: #2B6FC7;
    }
    :active:before {    
        width: 100%;    
    }
`;

const NavPage = ({
    text = "GRAPHIC DESIGN",
    mright = "5%",
    routeTo = "/"
})=>{
    const router = useRouter();
    return (
        <Cont
            mright={mright}
            onClick={() => router.push(routeTo)} 
        >
            <PageName className="NavPage">{text}</PageName>
        </Cont>
    );
}

export default NavPage;