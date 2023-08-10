import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () =>  (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-red-gradient p-[3px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-bold text-[18px] leading-[23px] mr-2">
              <span className="text-gradient-dense ">Enroll</span>
            </p>
          </div>
          <p className="font-poppins font-bold text-[18px] leading-[23px]">
              <span className="text-gradient-dense ">Now</span>
            </p>

        </div>
    </div>
  )


export default GetStarted