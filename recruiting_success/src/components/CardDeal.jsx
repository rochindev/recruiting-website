import React from 'react'
import {card, ops} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>From field coach to Operations Manager & beyond!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We see ourselves as a supportive team, that's why our growth over the last 18 months has been skyrocketing. <br /><br />We want to bring people that are looking forward to evolve their careers and take advantage of your advancement opportunities:<br /><br />Coach --{'>'} Site Lead --{'>'} Coach Trainer --{'>'} Regional Manager --{'>'} Operations Manager --{'>'} Director of Operations & beyond!</p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img  src={ops} alt='card' className="w-[100%] mh-[100%]"/>
      </div>
    </section>
  )


export default CardDeal