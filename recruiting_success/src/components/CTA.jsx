import React from 'react'
import styles from '../style'
import Button2 from './Button2'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-red-gradient-2 rounded-[20px] box-shadow` } id="CTA">
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading3}>Enroll now!</h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>Submit your information before 12:00 PM EST and we'll set you up with an interviw within the next 48 hrs.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button2 />
      </div>
    </section>
  )


export default CTA