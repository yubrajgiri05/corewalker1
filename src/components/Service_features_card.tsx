import React from 'react'
import styled from 'styled-components';
import { FaArrowRight,FaMicrosoft } from "react-icons/fa";
import { Insight_text_container, Insight_title, Insight_content, Insight_readmore } from './index_style';


export const FaMicrosoft_icon = styled.div`
color: #b9bbb4;
font-size: 80px;
display: flex;
justify-content: center;
`;
export const Service_features_card_container = styled( Insight_text_container, )`
color: #b9bbb4;
background-color: #1b1b1b;
`;



const Service_features_card = () => {
  return (
    <>
       <Service_features_card_container>
            <FaMicrosoft_icon>
                      <FaMicrosoft />
              </FaMicrosoft_icon>        
              <Insight_title>
                Microsoft Business Application Services              </Insight_title>
              <Insight_content>
                  Lorem ipsum dolor sit amet consectetur. Massa mattis quis mattis in sagittis dui risus magna. Accumsan purus massa enim in arcu amet purus. Et pellentesque nulla feugiat nulla. At nunc enim arcu in viverra elementum venenatis.
              </Insight_content>
              <Insight_readmore>
                Read more <FaArrowRight />
              </Insight_readmore>
        </Service_features_card_container>

    </>
  )
}

export default Service_features_card
