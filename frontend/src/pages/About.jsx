import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Haritha Sports, we are passionate about bringing high-quality sports equipment to athletes of all levels. Whether you're a beginner, a seasoned professional, or someone who simply enjoys an active lifestyle, we provide the best gear to help you perform at your peak.</p>
          <p>With a commitment to quality, innovation, and customer satisfaction, Haritha Sports continues to be a trusted name in the world of sports. Gear up, play hard, and achieve greatness with Haritha Sports!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Haritha Sports, our mission is to empower athletes of all levels by providing high-quality, performance-driven, and eco-friendly sports equipment. We strive to promote an active lifestyle, enhance performance, and support sustainability in sports. Through innovation and excellence, we ensure that every athlete has the right gear to achieve their goals while contributing to a greener planet. </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>


    </div>
  )
}

export default About
