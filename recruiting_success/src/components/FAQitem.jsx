import React from 'react'

export const FAQitem = (props) => {
  return (
    <div id='faq-container'>
        <h2 
            className={`faq-q`} 
            onClick={props.toggle} 
        >
            <span className='font-bold mx-2.5 text-black'>
                {props.active === true ? '-' : "+"}
            </span>

            {props.question}

        </h2>
        <div className={`faq-${props.active === true ? 'active' : "a"} py-3 pl-8`}>
        <p>
            {props.answer}
        </p>
        </div>
    </div>
  )
}
