import React from 'react'
import styled from 'styled-components';
import Imagewith_elevated_content_text from './Image_with_elevated_content_text'

const Container = styled.div`
  background-color: blue;
  position: relative;
`;

const Bg_image_container = styled.div`
 min-height: 400px;
 width: 70%;
 position: absolute;
 top: 0%;
 left: 0%;
 background-image: url('https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;`;
 


const Image_with_elevated_content = () => {

  return (
    <>
      <Container>
        <Bg_image_container>
        </Bg_image_container>
        <Imagewith_elevated_content_text/>

      </Container>
    </>
  )
}

export default Image_with_elevated_content
