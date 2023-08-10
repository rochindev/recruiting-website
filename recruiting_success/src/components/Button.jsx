import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from'react-router-hash-link'

const Button = ({styles}) => {
  return (
    <HashLink to='/Enroll#form'>
        <button type="button" className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
          Get Started
        </button>
    </HashLink>
  )
}

export default Button