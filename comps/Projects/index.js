import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Cont = styled.a`
    display:flex;
    flex-direction: column;
    margin-bottom:0;
    margin-top: 45px;
    margin-right: 5%;
    cursor: pointer; 
`;

const ProjImg = styled.img`
    margin-right: -1%;
    // box-shadow: 3px 4px 8px 2px rgba(14, 70, 141, 0.15);
`;

const ProjName = styled.p`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 25px;
    font-weight: 800;
    color: #1E1B18;
    margin-bottom:0;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
    @media (min-width: 768px){
        font-size: 18px;
    }
    @media (min-width: 992px){
        font-size: 25px;
      }
`;
const ProjDesc = styled.p`
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #4B4B4B;
    margin-top: 10px;

    @media screen and (max-width: 480px) {
        font-size: 16px;
        margin-top: 0;
    }
    @media (min-width: 768px){
        font-size: 14px;
    }
    @media (min-width: 992px){
        font-size: 17px;
      }
`;




const Projects = ({
    src="/wecycle.svg",
    projName="WeCycle",
    projDesc="Recycling Education - Web Application",
    routeTo = "/"
})=>{
    const router = useRouter();
    return (
        <Cont 
            className="projects"
            onClick={() => router.push(routeTo)} 
        >
            <ProjImg src={src} className="scale"/>
            <ProjName>{projName}</ProjName>
            <ProjDesc>{projDesc}</ProjDesc>
        </Cont>
    );
}

export default Projects;