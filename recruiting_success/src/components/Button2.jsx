import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Button2 = ({styles}) => {
  return (
    <HashLink to='/Enroll#enrollhr'>
        <button type="button" className="py-3 px-6 bg-clear-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px]">
          Enroll Now
        </button>
    </HashLink>
  )
} 

export default Button2 