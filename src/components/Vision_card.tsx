import React from 'react'
import {About_container,About_card_img,About_card_text,About_card_title,About_card_content} from './index_style';
import { IoMdSunny } from "react-icons/io";

const Vision_card = () => {
  return (
    <>
        <About_container>
         <About_card_img>
         <IoMdSunny />
         </About_card_img>
          <About_card_text>
            <About_card_title> Our Vision</About_card_title>
            <About_card_content>At CoreWalkers, we are on a mission to transform industries through creative software solutions, enabling global enterprises to prosper in the digital age.</About_card_content>
         </About_card_text>
      </About_container>
    </>
  )
}

export default Vision_card
