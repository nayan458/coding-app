import React from 'react'

export default function BouncingBall() {
  return (
    <>
        <div className='w-[100vw] h-[100vh] bg-transparent fixed top-0 z-0 overflow-hidden'>
            {/* <div className='w-[30%] h-[50%] absolutebg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500 opacity-200 backdrop-blur-lg  animate-anime'></div> */}
            <div className='w-[50%] h-[70%] absolute

            bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500
            
             animate-anime-50 opacity-5'></div>
            <div className='w-[30%] h-[50%] absolute

            bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500
            
             opacity-5  animate-anime-200'></div>
            <div className='w-[50%] h-[70%] absolute

            bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500
            
             animate-anime-100 opacity-10'></div>
        </div>
    </>
  )
}
