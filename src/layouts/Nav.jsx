import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import maleAvatar from '../media/img/avatars/male1.png'
import femaleAvatar from '../media/img/avatars/female1.png'
import Logo from '../media/svg/Logo';

function CreateAccountBtn(){
    
    return(
        <>
        <Link to='/register' className='hidden md:block bg-gradient-to-r from-pink-500 via-pink-400 to-rose-300/80 px-3 py-2 text-slate-50 rounded-sm cursor-pointer font-semibold'>
             Create Account
        </Link>
        <Link to='/login' className='hidden md:block px-3 py-2 text-green-400 rounded-sm cursor-pointer font-semibold '>
             Sign in
        </Link>
        </>
    )
}


export default function Nav(props) {

    // const [gender, setGender] = useState('')

// // const [tooltip, setTooltip] = useState(true)
// //     const open =()=> setTooltip(true)
// //     const close =()=> setTooltip(false)

//     const [navDisplay, setNavDisplay] = useState(true)
//     const close =()=> setNavDisplay(false)
//     const open =()=> setNavDisplay(true)

//     var lastScrollTop = 0;

//     let navbar = document.getElementById('nav');
//     window.addEventListener("scroll",()=>{
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if(scrollTop > lastScrollTop){
//             navbar.classList.add("-translate-y-full")
//             // close()
//             console.clear()
//         }
//         else{
//             navbar.classList.remove("-translate-y-full")
//             // open()
//             console.clear()
//         }
//         lastScrollTop = scrollTop;
//     })

const [display, setDisplay] = useState(false)
const open=()=>{setDisplay(true)}
const close=()=>{setDisplay(false)}

  return (
    <>      
            <div className={display ? 'fixed w-screen h-screen bg-transparent/20 z-40 backdrop-blur-sm transform duration-150' : 'fixed w-screen h-screen bg-transparent/20 z-40 backdrop-blur-sm transform -translate-x-full duration-150'} onClick={close}></div>
            <div className={display ? 'fixed h-screen w-[40%] px-8 py-2 flex flex-col gap-5 bg-slate-900 z-50 transform translate-x-0 duration-150' : 'fixed h-screen w-[40%] px-8 py-2 flex flex-col gap-5 bg-slate-900 z-50 transform -translate-x-full duration-150'}>
            <Link to='/' className='cursor-pointer'>
                <Logo/>
            </Link>
                    <Link to='/register' className='bg-gradient-to-r from-pink-500 via-pink-400 to-rose-300/80 px-3 py-2 text-slate-50 rounded-sm cursor-pointer font-semibold'>
                    Create Account
                </Link>
                <Link to='/login' className='px-3 py-2 text-green-400 rounded-sm cursor-pointer font-semibold '>
                    Sign in
                </Link> 
            </div>
        

        <nav className='top-nav'>
            <div className='flex gap-14 link-head'>
            <Link to='/' className='cursor-pointer'>
                <Logo/>
            </Link>
            </div>
            <div className='flex items-center h-full cursor-pointer'>
                {/* <Link to='/usr'>
                        {gender === 'male' ? 
                        <img src={maleAvatar} alt="img" className='w-10 h-10'></img>
                        : gender === 'female'
                        ?
                        <img src={femaleAvatar} alt="img" className='w-10 h-10'></img>
                        :
                        <div className='w-10 h-10 bg-neo-300 rounded-full'>
                        </div>
                        }
                </Link> */}
                {/* <CreateAccountBtnMobile/> */}
                <CreateAccountBtn/>
                <div>
            <i className="fa-solid fa-bars-staggered text-green-300 cursor-pointer md:hidden text-lg sm:text-lg md:text-lg" onClick={open}></i>
        </div>
            </div>
        </nav>
    </>
  )
}
