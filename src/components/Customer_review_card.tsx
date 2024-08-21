import React from 'react'
import {Customer_review_card_container,Customer_review_card_text} from './index_style';


const Customer_review_card = ({content}) => {
  return (
    <>
      <Customer_review_card_container>
        <Customer_review_card_text>
          {content} {content}
        </Customer_review_card_text>

      </Customer_review_card_container>
    </>
  )
}

export default Customer_review_card
