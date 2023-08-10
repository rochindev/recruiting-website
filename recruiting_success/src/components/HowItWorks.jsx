import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { applyonline, meeting, offerletter, phonecall, personint, training } from '../assets'

export default function HowItWorks () {
    
    return(
        <section className={`  sm:py-16 py-6 max-w-[1110px] text-center w-full`}>      
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">How It Works</h2>
                <div className='flex flex-wrap justify-around items-center  font-semibold'>
                    <p className='p-10'><img src={applyonline} alt='applyonline' className='max-w-[100px] mb-3 m-auto'/> 1. Apply online by submitting<br/> your information</p>
                    <p className='p-3'><img src={phonecall} alt='phonecall' className='max-w-[80px] max-h-[80px] mb-4 m-auto'/> 2. Phone Interview</p>
                    <p className='p-3'><img src={meeting} alt='applyonline' className='max-w-[100px] max-h-[100px] m-auto'/> 3. Virtual Interview</p>
                    <p className='p-3'><img src={personint} alt='applyonline' className='max-w-[100px] max-h-[100px] mb-4 m-auto'/> 4. In-Person Interview</p>
                    <p className='p-3'><img src={offerletter} alt='applyonline' className='max-w-[100px] max-h-[100px] mb-1 m-auto'/> 5. Get Offer Letter</p>
                    <p className='p-3'><img src={training} alt='applyonline' className='max-w-[120px] max-h-[120px] m-auto'/> 6. Paid training</p>
                </div>
        </section>
    )
}