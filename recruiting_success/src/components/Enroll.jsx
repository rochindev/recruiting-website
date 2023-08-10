import React from 'react'
import styles from '../style'
import { coachwkids } from '../assets'
import Form from './Form'
import AboutRole from './AboutRole'
import Benefits from './Benefits'
import HowItWorks from './HowItWorks'
import FAQs from './FAQs'
import { HashLink } from 'react-router-hash-link';


export const Enroll = () => {
  return (
    <section className={`${styles.boxWidth}  flex flex-wrap sm:mx-auto mx-auto ${styles.flexCenter}`}>
      <div id='enrollhr' className="my-8">
        <h1 className="font-poppins font-semibold ss:text-[65px] text-[47px] ss:leading-[100.8px] leading-[75px] text-center ">Become a 
            <span className="text-gradient ss:text-[77px] text-[57px]"> Coach & Mentor  
            </span>
        </h1>
      </div>

      <div className={`bg-red-gradient w-full flex lg:flex-row flex-col lg:min-w-[1400px]`}>

        <img src={coachwkids} alt="coach-with-students"
        className=' max-h-[540px] max-w-[820px] '
        />

        <div className='max-w-[750px] p-11 pt-7 '>
          <h2 className={` ${styles.heading3}`} >Let us do<br /> the work for you.</h2>
          <p className="pt-5 text-white text-justify font-poppins text-[18px]">Get at least 1 interview in a matter of hours and join a team of telented, diverse and energetic people on a mission to make school fun for students. <br/><br/>Send us your contact information and we'll worry about finding the right opportunities across a wide range of different employers looking for new coaches! </p>

          <HashLink to='/Enroll#form'>
            <button type="button" className='mt-10  font-poppins font-semibold text-rose-600 bg-white py-4 px-6 border-2px rounded-[50px]'>
              Apply Now
            </button>
          </HashLink>
        </div>

      </div>

      <div className={`md:my-0 my-10 relative`}>
        {/* gradient start */}
        <div className="absolute z-[0] w-[50%] h-[45%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
      </div>

      <div>
        <Form />
      </div>
      <div className='max-w-[1280px] flex flex-wrap justify-center items-center'>
        <AboutRole />
        <HowItWorks />
        <Benefits />
        <FAQs />
      </div>
    </section>
  )
}
