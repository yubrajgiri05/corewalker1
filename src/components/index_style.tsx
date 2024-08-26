import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 50px;
  background-color: white;
  display: flex;
  flex-grow: 0;
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
 export const Image_with_elevated_content_container = styled.div<{bgImage: string}>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: stretch;
  padding: 1em 0em; 
  background-image: url(${props => props.bgImage});
  background-size: 80% 90%;
  background-repeat: no-repeat;
 margin-bottom: 20px;
`;
export const Service_box = styled.div`
  width: 100%;
  height: 100%;
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding:40px 20px;
  position: absolute;
  top: 0;
  left: 0;
  `;

export const Service_box_onhover = styled.div`
width: 100%;
height: 100%;
border: 1px solid black;
background-image:linear-gradient( rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 0;
left: 100%;  
padding: 40px 30px;
transition: left 0.3s;
display:none;

 @media screen and (min-width: 768px) {
    display: block;
  }



`;
export const Service_container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width:75px;
  height: 90px;  

  @media screen and (min-width: 445px) {
        width: 300px;
        height: 300px; 
  }
  @media screen and (min-width: 768px) {
    &:hover ${Service_box_onhover} {
    left: 0;
      }
        width: 205px;
        height: 215px; 
  }
  @media screen and (min-width: 1024px) {
        width: 300px;
        height: 300px; 
  }
  `;
  export const Customer_review_card_container = styled.div`
  padding: 60px;
  background-color: black;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Customer_review_card_text = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: white;
  padding-top: 20px;
  position: relative;
  &:before {
    content: " '' ";
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 60px;
    color: white;
  }
`;
export const Testimonials_profile = styled.div`
padding-top: 15px;
display: flex;
gap: 15px;
align-items: center;
`;
export const Testimonials_profile_text = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;
export const Testimonials_profile_name = styled.div`
font-size: 18px;
font-weight: 800;
`;
export const Testimonials_profile_addreess = styled.div`
font-size: 14px;
font-weight: 400;
`;
export const Insight_text_container = styled.div`
  padding: 40px 50px;
  background-color: white;
  border-radius: 15px;
  width:33%;
  height: fit-content;
`;
export const Insight_title = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  padding: 15px 0;
`;
export const Insight_content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
`;
export const Insight_readmore = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 25px;
  padding-top: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const About_container = styled.div`
    background-color: white;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    width: 50%;
`;
export const About_card_img = styled.div`
    flex-basis: 40%;
    font-size: 90px;
    `;
export const About_card_text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    `;
export const About_card_title = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    `;
export const About_card_content = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    `;

