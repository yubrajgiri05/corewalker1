import React from 'react'
import {About_container,About_card_img,About_card_text,About_card_title,About_card_content} from './index_style';
import { FaMoon } from "react-icons/fa6";



const Mission_card = () => {
  return (
    <>
      <About_container>
         <About_card_img>
         <FaMoon />
         </About_card_img>
          <About_card_text>
            <About_card_title> Our Mission</About_card_title>
            <About_card_content>At CoreWalkers, we are on a mission to transform industries through creative software solutions, enabling global enterprises to prosper in the digital age.</About_card_content>
         </About_card_text>
      </About_container>
    </>
  )
}

export default Mission_card
