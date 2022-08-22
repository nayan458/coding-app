import React from 'react'
import cb from '../media/img/registration.png'

export default function Registration() {
  return (
    <>
        
    <div className='w-screen min-h-screen flex justify-center align-middle items-center bg-slate-100 px-6 py-1'>
      <div className='w-full h-full grid grid-cols-8 gap-12'>
          <div className='col-span-3 overflow-hidden flex-col bg-slate-50/20 rounded-lg shadow-lg md:px-6 lg:px-12 py-12 gap-20 hidden md:flex'>
              <div className='form-head1'>
                Hi Wellcom Back!
              </div>
              <img src={cb} className='md:px-0 lg:px-6' alt="This imaisible"/>
          </div>
          
          <div className='
            col-span-8 md:col-span-5 px-4 sm:px-16 lg:px-24 py-2
            '>
          <div className='grid gap-8 md:gap-14 '>

            <p className='grid'>
            <span className='form-head2'>
            Register Here
            </span>
            <span className='tagline-sm'>
              Fill in your details below.
            </span>
            </p>
            <from className="grid gap-4 md:gap-7">
                <input type="text" placeholder='Full Name' className='form-inputs' autoComplete='false'/>
                <input type="number" placeholder='Phone' className='form-inputs' autoComplete='false'/>
                <input type="email" placeholder='Email' className='form-inputs' autoComplete='false'/>
                <input type="password" placeholder='Password' className='form-inputs' autoComplete='false'/>
                <input type="text" placeholder='Institute' className='form-inputs' autoComplete='false'/>
                <input type="text" placeholder='Team' className='form-inputs' autoComplete='false'/>
                <div className='text-xs md:text-sm '>Already have an account?
                <a href='#' className='px-2 font-bold text-green-600 hover:underline hover:underline-offset-2 '>
                 Login
                </a>
                 </div>
                <button type="submit" className='form-btn'>Submit</button>
            </from>

          </div>

          </div>
      </div>
    </div>
    </>
  )
}