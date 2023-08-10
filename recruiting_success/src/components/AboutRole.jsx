import React from 'react'
import {coachnstudents} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const AboutRole = () => (
    <section className={`${layout.section} max-w-[1110px]`}>
      <div className={`${layout.sectionInfo} px-14`}>
        <h2 className={styles.heading2}>About the role</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          Responsibilities you’ll take on as a coach and mentor:
        </p>
  
        <ul className={`${styles.paragraph} text-left max-w-[450px] testie list-disc ml-5`}>
            <li>Work on-site with K-8 classes to teach physical education classes with a social-emotional learning curriculum.</li>
            <li>Demonstrate, engage, and participate in games with students
            Act as a positive and inspiring role model.</li>
            <li>Support and collaborate with school staff.</li>
        </ul>
      </div>

      <div className={layout.sectionImg}>
        <img  src={coachnstudents} alt='coachnstudents' className="w-[100%] mh-[100%]"/>
      </div>
    </section>
  )


export default AboutRole