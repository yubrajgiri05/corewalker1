import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import {Customer_review_card_container,Customer_review_card_text,Testimonials_profile,Testimonials_profile_text,Testimonials_profile_name,Testimonials_profile_addreess} from './index_style';

export const Testimonials_card_container = styled( Customer_review_card_container, )`
    padding:100px 60px;
    background-color: white;
    width: 60%;
    margin: 0 auto;
`;
export const Testimonials_card_text = styled( Customer_review_card_text, )`
    color: black;
      &:before {
    color: black;
  }
`;

const Testimonials_card = ({content,src}) => {
  return (
    <>
       <Testimonials_card_container>
        <Testimonials_card_text>
          {content} {content}
        </Testimonials_card_text>
        <Testimonials_profile>
          <Image src={src} alt="logo" width={100} height={100} />
          <Testimonials_profile_text>
            <Testimonials_profile_name>Abhishek</Testimonials_profile_name>
            <Testimonials_profile_addreess>metadown</Testimonials_profile_addreess>
          </Testimonials_profile_text>
        </Testimonials_profile>

      </Testimonials_card_container>
    </>
  )
}

export default Testimonials_card
