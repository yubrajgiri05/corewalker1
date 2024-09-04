import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { Insight_text_container, Insight_title, Insight_content, Insight_readmore } from './index_style';

export const Insight_card_withImg_container = styled.div`
  width: 33%;
  border-radius: 15px;
  overflow: hidden;
`;
export const Service_contents = styled( Insight_text_container, )`
  width: 100%;
  border-radius: 0px;
  padding: 20px 40px;
`;
const Insight_card_withImg = ({image}) => {
  return (
    <>
      <Insight_card_withImg_container>
        <Image src={image} alt="" width={600} height={60}/>
        <Service_contents>
                <Insight_content>
                Research | January 12, 2024
                </Insight_content>
                <Insight_title>
                    Advanced analytics and data science solutions              
                </Insight_title>
                <Insight_content>
                    Lorem ipsum dolor sit amet consectetur. Lacus urna curabitur ullamcorper eget id nisl volutpat sed. Quisque neque urna tristique viverra volutpat pulvinar. Fringilla adipiscing purus sit bibendum. Vitae porta auctor at amet molestie augue at semper suspendisse.
                </Insight_content>
                <Insight_readmore>
                    Read more <FaArrowRight />
                </Insight_readmore>
        </Service_contents>
      </Insight_card_withImg_container>
    </>
  )
}

export default Insight_card_withImg
