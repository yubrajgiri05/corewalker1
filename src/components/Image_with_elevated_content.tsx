import React from 'react'
import styled from 'styled-components';
import Imagewith_elevated_content_text from './Image_with_elevated_content_text'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0.8em 0em;
`;

const Bg_image_container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 40%;
  background-image: url('https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.05);
  transform-origin: left;
  z-index: -1
  `;


const Image_with_elevated_content = () => {

  return (
    <Container>
        <Bg_image_container>
        </Bg_image_container>
        <Imagewith_elevated_content_text/>

    {/* <section style={{
      width: '100%',
      height:'100%',
      position: 'relative'
    }}>
        <section style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
          <div style={{
            width: '100%',
            height: '10rem',
            position: 'absolute',
            backgroundColor: 'red'
          }}>

        </div>
      </section>
        <section style={{
          width: '100%',
          height: '10rem',
          position: 'absolute',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'blue'
          }}>

          </div>
      </section>
    </section> */}
    </Container>
  )
}

export default Image_with_elevated_content
