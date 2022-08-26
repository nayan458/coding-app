import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import maleAvatar from '../media/img/avatars/male1.png'
import femaleAvatar from '../media/img/avatars/female1.png'

export default function Nav(props) {

    const [gender, setGender] = useState('female')

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

  return (
    <>
        <nav id="nav" className='top-nav'>
            <div className='flex gap-14 link-head'>
                <Link to="/">
                    Home
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    register
                </Link>
            </div>
            <div className='flex items-center h-full cursor-pointer'>
                <Link to='/usr'>
                    {/* the image part if present or not */}
                        {gender === 'male' ? 
                        <img src={maleAvatar} alt="img" className='w-10 h-10'></img>
                        : gender === 'female'
                        ?
                        <img src={femaleAvatar} alt="img" className='w-10 h-10'></img>
                        :
                        <div className='w-10 h-10 bg-neo-300 rounded-full'>
                        </div>
                        }
                </Link>

                
            </div>
        </nav>
    </>
  )
}
