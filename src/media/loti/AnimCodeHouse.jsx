import React, { useState } from 'react'

export default function AnimCodeHouse(props) {

  const [show, setshow] = useState(false)

  
  
  const fnnc=async()=>{
  try {
      let act = await fetch('https://embed.lottiefiles.com/animation/63487')
      if(act){
        console.log("success")
        setshow(true)
      }
    } catch (error) {
      setshow(false)
      console.log(`er : ${error}`)

    }
  }
  
  fnnc()

  return (
    <>
      <iframe className={show ? props.className : 'scale-0 hidden'} src="https://embed.lottiefiles.com/animation/63487" title='helo'></iframe>
    </>
  )
}
