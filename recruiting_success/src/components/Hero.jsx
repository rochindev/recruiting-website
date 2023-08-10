import React from 'react'
import styles from '../style'
import { discount, briefcase, bweno } from '../assets'
import GetStarted from './GetStarted'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
      <div className="flex flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 h-[40px]">
          <img src={briefcase} alt="discount" className="w-[29px] h-[29px]" />

          <p className={`font-poppins font-normal text-black text-[17px] leading-[30.8px] ml-2`}>
            <span className="text-white"> Currently Hiring In Your City!</span>
          </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[47px] text-black ss:leading-[100.8px] leading-[75px]">
          Become a <br className="sm:block hidden" /> {" "}
          <span className="text-gradient ss:text-[80px] text-[60px]">Role model.</span> {" "}
        </h1>
        
        <div className="ss:flex hidden md: mr-4 mr-0">
          <HashLink to='/Enroll#enrollhr'>
            <GetStarted />
           </HashLink>
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[64px] text-[46px] text-black ss:leading-[100.8px] leading-[75px] w-full">
        (and get paid for it)
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-4`}>We invite you to join our team of awesome and talented people on a personal mission to make school fun for students.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={bweno} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

       {/* gradient start */}
       <div className="absolute z-[0] w-[50%] h-[45%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`} >
      <HashLink to='/Enroll#form'>
        <GetStarted />
      </HashLink>
    </div>

  </section>
  
)

export default Hero