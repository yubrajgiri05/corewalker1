import React from 'react'
import styled from 'styled-components';
import {Image_with_elevated_content_container} from './index_style';
import Imagewith_elevated_content_text from './Image_with_elevated_content_text'


const Image_with_elevated_content = ({ bgImage, title, content,buttonContent}) => {

  return (
    <Image_with_elevated_content_container bgImage={bgImage}>
        <Imagewith_elevated_content_text title={title} content={content} buttonContent={buttonContent}/>
    </Image_with_elevated_content_container>
  )
}

export default Image_with_elevated_content