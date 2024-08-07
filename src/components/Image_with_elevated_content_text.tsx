import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 40px 50px;
    background-color: white;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-basis: 60%;
`;

const Image_with_elevated_content_title = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 20px;
`;

const Image_with_elevated_content_content = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  width: fit-content;
`;

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
