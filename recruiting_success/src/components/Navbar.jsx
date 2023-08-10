import React from 'react';
import {useState} from 'react';
import { close, logo, menu } from "../assets";
import { navLinks } from '../constants';
import Button2 from './Button2';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 px-0 justify-between items-center navbar bg-red-gradient">
      <HashLink to="/">
        <img src={logo} alt="hoobank" className="w-[186px] h-[48px] ml-8" />
      </HashLink>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-5" >
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-8 text-white `}  
          >
            <HashLink to={nav.id === "#home" ? "/" 
            : nav.id === "benefits" ? "Enroll#benefitss"
            : nav.id === "FAQs" ? "Enroll#FAQs"
            :`page#${nav.id}`}>
                {nav.title}
            </HashLink>
          </li>
        ))}
        <Button2 />
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center" >
          <img src={toggle ? close : menu}
           alt="menu"
           className="2-[28px] h-[28px] object-contain mr-5"
           onClick={() => setToggle(prevToggle => !prevToggle)}
          />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar shadow-md`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1" >
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0': 'mb-4'} text-rose-600`}  
            >
            <HashLink to={nav.id === "#home" ? "/" 
            : nav.id === "benefits" ? "Enroll#benefitss"
            : nav.id === "FAQs" ? "Enroll#FAQs"
            :`page#${nav.id}`}>
              {nav.title}
            </HashLink>
            </li>
          ))}
          <div className='mt-4'>
            <li>
              <Button2 />
            </li>
          </div>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar