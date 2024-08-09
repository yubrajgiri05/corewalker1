import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import {Image_with_elevated_content_title,Image_with_elevated_content_content,Button,Service_box,Service_box_onhover,Service_container} from './index_style';


export const Service_title = styled( Image_with_elevated_content_title, )`
  text-align: center;
  font-size: 22px;
`;
export const Service_content = styled( Image_with_elevated_content_content, )`
  color: white;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
`;
export const Service_title_onhover = styled( Image_with_elevated_content_title, )`
  color: white;
  font-size: 22px;
  padding-bottom: 15px;
`;
export const Service_button = styled( Button, )`
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
`;

const Service_card = ({title,content,buttonContent}) => {
  return (
    <Service_container>
      <Service_box>
        <Image src="https://www.svgrepo.com/show/340190/dns-services.svg" alt="logo" width={100} height={100} />
        <Service_title>
          {title}
        </Service_title>
      </Service_box>

      <Service_box_onhover>
        <Service_title_onhover>
                {title}
        </Service_title_onhover>
        <Service_content>
              {content}
          </Service_content>
          <Service_button>{buttonContent}</Service_button>
      </Service_box_onhover>
    </Service_container>
  );
}

export default Service_card
