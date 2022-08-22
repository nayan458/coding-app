import React, { useState } from 'react'

export default function Nav(props) {

// const [tooltip, setTooltip] = useState(true)
//     const open =()=> setTooltip(true)
//     const close =()=> setTooltip(false)

    const [navDisplay, setNavDisplay] = useState(true)
    const close =()=> setNavDisplay(false)
    const open =()=> setNavDisplay(true)

    var lastScrollTop = 0;

    let navbar = document.getElementById('nav');
    window.addEventListener("scroll",()=>{
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navbar.classList.add("-translate-y-full")
            // close()
            console.clear()
        }
        else{
            navbar.classList.remove("-translate-y-full")
            // open()
            console.clear()
        }
        lastScrollTop = scrollTop;
    })

  return (
    <>
        <nav id="nav" className='top-nav'>
            <div className='flex gap-14 link-head'>
                {/* <link> */}
                    Event
                {/* </link> */}
                
                <div>Contect Us</div>
            </div>
            <div className='flex items-center h-full cursor-pointer'>
                <div>
                    {/* the image part if present or not */}
                        {props.img ? 
                        <img src={props.img} alt="img"></img>
                        :    
                        <div className='w-10 h-10 bg-neo-300 rounded-full'>

                        </div>
                        }
                </div>

                
            </div>
        </nav>
    </>
  )
}
