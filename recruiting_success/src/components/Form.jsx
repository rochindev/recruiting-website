import {React, useState} from 'react'
import styles from '../style'
import axios from 'axios'

export default function Form(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [finished, setFinished] = useState(false);
    
    const handleSubmit= (e) => {
        e.preventDefault();

        const data = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            City: city,
            Zipcode: zipCode
        }
        

        axios.post('https://sheet.best/api/sheets/API-KEY', data).then((response)=>{console.log(response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCity('');
        setZipCode('');
        setFinished(true)})
    }

    return(
      <section id='form'>
        <h1 className="font-poppins font-semibold ss:text-[40px] text-[22px] apply ss:leading-[50.8px] leading-[55  px]">Apply Now</h1>
        
        <form onSubmit={handleSubmit} className='font-poppins text-center text-[20px]'>
            
            <p className={`  text-black  leading-[30.8px]`}>Please enter your first and last names as they would appear on a hiring document:</p>
            <input 
                required
                type='text' 
                placeholder='First Name*' 
                value={firstName} 
                className='inputs'
                onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input 
                required
                type='text' 
                placeholder='Last Name*' 
                value={lastName} 
                className='inputs'
                onChange={(e) => setLastName(e.target.value)}
            ></input>
            <p className={`text-black leading-[30.8px]`}>Please enter your preferred contact details:</p>
            <input 
                required
                type='email' 
                placeholder='Enter your email*' 
                value={email} 
                className='inputs'
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input 
                required
                type='text' 
                placeholder='Phone Number*' 
                value={phone} 
                className='inputs'
                onChange={(e) => setPhone(e.target.value)}
            ></input>
            <input 
                required
                type='text' 
                placeholder='City*' 
                value={city} 
                className='inputs'
                onChange={(e) => setCity(e.target.value)}
            ></input>
            <input 
                required
                type='number' 
                placeholder='Zip Code*' 
                value={zipCode} 
                className='inputs'
                onChange={(e) => setZipCode(e.target.value)}
            ></input>

            <div>
                {finished === false ? <button type='submit' className='mt-10 submit  font-poppins text-white py-3 px-6 border-2px '>Submit</button>
                : <div className='mt-10 submit  font-poppins text-white py-3 px-6 border-2px '>Your application has been succesfully submitted, please wait up to 48hrs for a recruiter to get in contact with you</div>}
            </div>

        </form>
      </section>
    )
}