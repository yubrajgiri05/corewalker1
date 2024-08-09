"use client";
import Image_with_elevated_content from '../components/Image_with_elevated_content';
import Service_card from '../components/Service_card';


export default function Home() {

  const backgroundImage = 'https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg';
  const title = 'High-tech Engineering Industry';
  const content = 'Our cutting-edge solutions empower businesses across insurance, banking, and financial services to navigate the complexities of the financial landscape seamlessly. We also cater to the evolving needs of retail and consumer industries, providing tailored software solutions that enhance customer experiences and drive operational efficiency. At the forefront of high-tech advancements, our expertise enables businesses to stay ahead in the rapidly evolving technological landscape.';
  const buttonContent = 'know More';

  return (
    <>  
    <Image_with_elevated_content bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
     <div className="px-8 flex gap-8 mb-8">
        <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
        <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
        <Service_card bgImage={backgroundImage} title={title} content={content} buttonContent={buttonContent}/>
     </div>

    </>
  );
}
