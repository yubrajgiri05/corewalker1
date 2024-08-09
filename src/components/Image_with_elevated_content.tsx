import React from 'react'
import styled from 'styled-components';
import {Image_with_elevated_content_container} from './index_style';
import Imagewith_elevated_content_text from './Image_with_elevated_content_text'



const Bg_image_container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 55%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.05);
  transform-origin: left bottom;
  z-index: -1
  `;


const Image_with_elevated_content = ({ bgImage, title, content,buttonContent}) => {

  return (
    <Image_with_elevated_content_container>
        <Bg_image_container bgImage={bgImage}>
        </Bg_image_container>
        <Imagewith_elevated_content_text title={title} content={content} buttonContent={buttonContent}/>
    </Image_with_elevated_content_container>
  )
}

export default Image_with_elevated_content