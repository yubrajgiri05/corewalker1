import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 50px;
  background-color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-basis: 60%;
`;

export const Image_with_elevated_content_title = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 20px;
`;

export const Image_with_elevated_content_content = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
`;
export const Button = styled.button`
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
export const Bg_image_container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 55%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.05);
  transform-origin: left bottom;
  z-index: -1
  `;
 export const Image_with_elevated_content_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0.8em 0em;
`;

