import React from 'react'
import {features} from '../constants'
import styles, {layout} from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  bg-red-400`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)


const Business = () => (
    <section id="who-we-are" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Who we are</h2>
        <p className={`${styles.paragraph} m-w-[470px]  mt-5`}>We are a team of dedicated people on a quest for the coolest coaches that want to give back to our future and we match them with different employers across a wide range of available programs.<br /> 
        <br />
        And doing so by providing fun, energetic and engaging activities to schools throughout California! <br /> 
        <br />
        Fun is a lot more than ball games, that's why our programs are a mix of running around playing tag and life skills lessons like emotional learning and social awareness. 
        
         </p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col flex-start`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )


export default Business