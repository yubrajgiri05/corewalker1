import React from 'react'
import { Container, Image_with_elevated_content_title, Image_with_elevated_content_content, Button } from './index_style';


const Image_with_elevated_content = ({title, content,buttonContent}) => {

  return (
    <>
    <Container>
            <Image_with_elevated_content_title>
              {title}
            </Image_with_elevated_content_title>
            <Image_with_elevated_content_content>
              {content}
            </Image_with_elevated_content_content>
            <Button>{buttonContent}</Button>

    </Container>
    </>
  )
}

export default Image_with_elevated_content
