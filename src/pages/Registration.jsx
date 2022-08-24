import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cb from '../media/img/registration.png'

export default function Registration() {

    const [x, setx] = useState(null)
    const setm =()=> setx(true)
    const setf =()=> setx(false)


  const [usrDetails, setusrDetails] = useState({
    fname:'',phone:'',email:'',password:'',institute:'',team:'',gender:''
  })
  let name, value;
  const handelChange=(e)=>{
    name = e.target.name;
    value = e.target.value;
    console.log(name)
    console.log(value)

    setusrDetails({...usrDetails,[name] : value})
  }

  
  const [succmsg, setsuccmsg] = useState(false)
  const open=()=>{setsuccmsg(true)}
  const close=()=>{setsuccmsg(false)}

  const [errmsg, seterrmsg] = useState(false)
  const openErr=()=>{seterrmsg(true)}
  const closeErr=()=>{seterrmsg(false)}
  
  const showDetails=()=>{
    // [name,phone,email,password,institute,team,gender] = usrDetails
    if(!usrDetails.fname 
      || !usrDetails.phone 
      || !usrDetails.email 
      || !usrDetails.password 
      || !usrDetails.institute 
      || !usrDetails.team){
      window.alert('You need to fill values in all the fields')
      openErr()
      return
    }

    window.alert(`Successfully registered with usr details \n ${usrDetails.fname}\n ${usrDetails.phone}\n  ${usrDetails.email}\n ${usrDetails.password}\n ${usrDetails.institute}\n ${usrDetails.team}\n ${usrDetails.gender}\n`);
    closeErr()
    open()
  }
  
  const sub=(e)=>{
    e.preventDefault()
  }

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

            <div className={succmsg ? 'bg-green-200 text-center text-green-600 py-1 rounded-sm transform scale-100 duration-500 ease-linear cursor-pointer' : 'bg-green-200 text-center text-green-600 py-1 rounded-sm transform scale-0 absolute cursor-pointer'} onClick={close}>
                Successfully Registered
            </div>

            <div className={errmsg ? 
                    'bg-red-200 text-center text-red-600 py-1 rounded-sm transform scale-100 duration-100 ease-linear cursor-pointer'
                    : 
                    'bg-red-200 text-center text-red-600 py-1 rounded-sm transform scale-0 absolute cursor-pointer' }
                     onClick={closeErr}>
                     Invalid Credentials
               
            </div>

            <form className="grid gap-4 md:gap-7" onSubmit={sub} method="POST">
                <input type="text" placeholder='Full Name' className='form-inputs' name='fname' value={usrDetails.fname } onChange={handelChange} />
                <input type="number" placeholder='Phone' className='form-inputs' name='phone' value={usrDetails.phone } onChange={handelChange} />
                <input type="email" placeholder='Email' className='form-inputs' name='email' value={usrDetails.email } onChange={handelChange} />
                <input type="password" placeholder='Password' className='form-inputs' name='password' value={usrDetails.password } onChange={handelChange} />
                <input type="text" placeholder='Institute' className='form-inputs' name='institute' value={usrDetails.institute } onChange={handelChange} />
                <input type="text" placeholder='Team' className='form-inputs' name='team' value={usrDetails.team } onChange={handelChange} />
                <label>Gender</label>
                <div className='flex gap-11'>
                  <button type='button' className={x ? 'px-3 py-2 bg-blue-300 rounded-sm text-slate-50 outline-none border-none transform duration-100 ease-linear' : 'px-3 py-2 bg-blue-500 rounded-sm text-slate-50 outline-none border-none transform duration-100 ease-linear'} value="male" name='gender' 
                  onChange={handelChange}
                  onClick= {setm}
                  >
                    <i className="fa-solid fa-mars"></i>
                  </button>
                  <button type='button' className={!x && x != null ? 'px-3 py-2 bg-pink-300 rounded-sm text-slate-50 outline-none border-none transform duration-100 ease-linear' : 'px-3 py-2 bg-pink-500 rounded-sm text-slate-50 outline-none border-none transform duration-100 ease-linear'} value="female" name='gender' 
                  onChange={handelChange}
                  onClick={setf}
                  >
                  <i className="fa-solid fa-venus"></i>
                  </button>
                </div>
                <div className='text-xs md:text-sm '>Already have an account?
                <Link to='/login' className='px-2 font-bold text-green-600 hover:underline hover:underline-offset-2 '>
                 Login  
                </Link>
                
                
                 </div>
                <button type="submit" className='form-btn' onClick={showDetails}>Submit</button>
            </form>

          </div>

          </div>
      </div>
    </div>
    </>
  )
}