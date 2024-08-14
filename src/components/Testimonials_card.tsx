import React from 'react'
import styled from 'styled-components';
import {Customer_review_card_container,Customer_review_card_text} from './index_style';

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

const Testimonials_card = ({content}) => {
  return (
    <>
       <Testimonials_card_container>
        <Testimonials_card_text>
          {content} {content}
        </Testimonials_card_text>

      </Testimonials_card_container>
    </>
  )
}

export default Testimonials_card
