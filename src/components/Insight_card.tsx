import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Insight_text_container, Insight_title, Insight_content, Insight_readmore } from './index_style';


const Insight_card = () => {
  return (
    <>
        <Insight_text_container>
              <Insight_title>
                webiner
              </Insight_title>
              <Insight_content>
              Research | January 12, 2024
              </Insight_content>
              <Insight_title>
                Advanced analytics and data science solutions              
              </Insight_title>
              <Insight_readmore>
                Read more <FaArrowRight />
              </Insight_readmore>
        </Insight_text_container>
    </>
  )
}

export default Insight_card
