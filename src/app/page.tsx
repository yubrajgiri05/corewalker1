"use client";
import Customer_review_card from '@/components/Customer_review_card';
import Testimonials_card from '@/components/Testimonials_card';
import Image_with_elevated_content from '@/components/Image_with_elevated_content';
import Service_card from '@/components/Service_card';
import Insight_card from '@/components/Insight_card';
import Insight_card_withImg from '@/components/Insight_card_withImg';
import Mission_card from '@/components/Mission_card';
import Vision_card from '@/components/Vision_card';


export default function Home() {

  const backgroundImage = 'https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg';
  const image = '/images.jpeg';
  const title = 'High-tech Engineering Industry';
  const content = 'Our cutting-edge solutions empower businesses across insurance, banking, and financial services to navigate the complexities of the financial landscape seamlessly. We also cater to the evolving needs of retail and consumer industries, providing tailored software solutions that enhance customer experiences and drive operational efficiency. At the forefront of high-tech advancements, our expertise enables businesses to stay ahead in the rapidly evolving technological landscape.';
  const buttonContent = 'know More';
  const src = '/metajpeg.jpeg';
  return (
    <>  
    <Image_with_elevated_content bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
    <div className="container max-w-screen-xl m-auto flex gap-8 mb-8">
    <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
        <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
        <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
     </div>
     <div className='container m-auto max-w-screen-xl'>
        <Customer_review_card content={content}/>
        <Testimonials_card content={content} src={src}/>
     </div>

     <div className='container m-auto max-w-screen-xl pt-8 flex gap-4'>
        <Insight_card_withImg image={image}/>
        <Insight_card/>
     </div>
     <div className='container m-auto max-w-screen-xl py-8 flex flex-col gap-4'>
         <Mission_card/>
         <Vision_card/>
     </div>


    </>
  );
}
