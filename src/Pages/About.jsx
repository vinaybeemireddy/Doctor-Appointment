import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to Prescripto your Trusted Partner in Managing Your Healthcare Needs Conveniently And Efficiently At Prescripto, We Understand The challanges individual face when it comes to scheduling doctor appointments and monitoring their health records.</p>
        <p>Prescripto is committed To Excellence in Healthcare technology. We Continuously Strive To Enhance Our Platform. Integrating The latest adcancements To improve user experience and deliver superior service whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way. </p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our Vision at prescripto is to create a seamless healthcare experience for every you need it/</p>
      </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex felx-col md:flex-row mb-20'>
        <div className='border pd-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 c'>
          <p>Efficiency:</p>
          <b>Streamined Appointment Scheduling that fits your busy lifestyle</b>
        </div>

        <div className='border pd-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 c'>
        <p>Convenience:</p>
        <b>Access To A Network of Trusted Healthcare Professionals in your Area.</b>
        </div>
        <div className='border pd-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 c'>
        <p>Personalization:</p>
        <b> Tailared Recommendations And reminders to help you stay on the top of your health.</b>
        </div>
      </div>

      
    </div>
  )
}

export default About