import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section id="benefits " className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full justify-between item-center 2xl:flex xl:flex lg:flex sm:mb-16 mb-6 relative z-[1]">

        <h1 className={styles.heading2}>Become a coach!</h1>

        <div className="w-full md:mt-0 mt-6 pl-5">
          <ul className={`${styles.paragraph} text-left max-w-[450px] testie list-disc`}>
            <li>Competitive pay</li>
            <li>Initial and continued paid training</li>
            <li>Flexible schedule, working anywhere from 5 to 40 hours per week</li>
            <li>Work experience in education, physical education, coaching, and child development</li>
            <li>Growth opportunities for promotion within the company</li>
          </ul>

        </div>

      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-dull feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )


export default Testimonials