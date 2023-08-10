import {React, useState} from 'react'
import styles from '../style'
import { faqs } from '../constants'
import { FAQitem } from './FAQitem'

export default function FAQs () {
    
    const [faqsdata, setFaqsData] = useState(faqs)
    
    function toggle(id) {
        setFaqsData(prevFaqsData => {
            return prevFaqsData.map((faq => {
                return faq.id === id ? {...faq, active: !faq.active} : {...faq, active: false}
            }))
        })
    }

    const AllFAQs = 
        faqsdata.map(faq => (
            <FAQitem id={faq.id} active={faq.active} question={faq.question} answer={faq.answer} toggle={() => toggle(faq.id)}/>
    ))


    return ( 
        <section className='w-full px-10 mb-28 flex flex-col align-center' id='FAQs'>
            <h2 className='font-poppins apply font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] text-center w-full'>FAQ's</h2>
            <div className=''>
                {AllFAQs}
            </div>
        </section>
    )
}
