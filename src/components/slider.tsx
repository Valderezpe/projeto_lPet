import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import banner_1 from "../imagem/slider/banner_1.jpg"
import banner_2 from "../imagem/slider/banner_2.jpg"
import banner_3 from "../imagem/slider/banner_3.jpg"
import Image from 'next/image';

const slider = () => {
  return (
    <div className='relative'>
         <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={2000}
         >
    <div>
        <Image src={banner_1} alt='banner'/>
    </div>
    <div>
        <Image src={banner_2} alt='banner'/>
    </div>
    <div>
        <Image src={banner_3} alt='banner'/>
    </div>
   
</Carousel>
    </div>
  )
}

export default slider