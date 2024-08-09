import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import {Image_with_elevated_content_title} from './index_style';


const Service_box = styled.div`
  width: 100%;
  height: 100%;
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding:40px 20px;
  position: absolute;
  top: 0;
  left: 0;
  `;

const Service_box_onhover = styled.div`
width: 100%;
height: 100%;
border: 1px solid black;
background-image:linear-gradient( rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 0;
left: 100%;  

`;
const Service_container = styled.div`
  flex-basis: 33%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 300px;
    
     &:hover ${Service_box_onhover} {
    left: 0;
     }
  `;

export const Service_title = styled( Image_with_elevated_content_title, )`
  text-align: center;
  font-size: 22px;
`;

const Service_card = ({title}) => {
  return (
    <Service_container>
      <Service_box>
        <Image src="https://www.svgrepo.com/show/340190/dns-services.svg" alt="logo" width={100} height={100} />
        <Service_title>
          {title}
        </Service_title>
      </Service_box>
      <Service_box_onhover>
        {/* Content for hover state, if needed */}
      </Service_box_onhover>
    </Service_container>
  );
}

export default Service_card
