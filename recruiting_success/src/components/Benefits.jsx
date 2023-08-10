import React from 'react'
import {features} from '../constants'
import styles, {layout} from '../style'
import Button from './Button'
import { trophy } from '../assets'


const Benefits = () => (
    <section id="benefitss" className={`${layout.section} max-w-[1110px] text-center`}>
      <div className={`${layout.sectionInfo} `}>
        <div className='px-14'>
          <h2 className={styles.heading2}>Benefits of becoming a Coach & Mentor</h2>

          <p className={`${styles.paragraph} m-w-[470px]  mt-5 mb-8`}>We understand how difficult it can be to find an impactful and fun entry-level job that pays well, gives you relevant experience, and fits into your busy schedule. That’s where we come in. As a coach you’ll have access to:
          </p>
        </div>
        <div className='flex flex-wrap'>

          <img src={trophy} alt="trophy" className="max-w-[450px] relative z-[5]"/>
          <div className='px-14'>
          <ul className={`${styles.paragraph} text-left max-w-[450px] testie list-disc ml-5 mt-8`}>
            <li>Competitive pay</li>
            <li>Initial and continued paid training</li>
            <li>Flexible schedule, working anywhere from 5 to 40 hours per week</li>
            <li>Leadership development to become a capable and charismatic leader</li>
            <li>Work experience in education, physical education, coaching, and child development</li>
            <li>Growth opportunities for promotion within the company</li>
            <li>Ability to mentor students and make a difference in their lives</li>
          </ul>
          </div>
        </div>

      </div>
    </section>
  )


export default Benefits