import React from 'react'

export default function Button(props) {
  return (
    <>
        <button type={props.type ? props.type : 'button'} className='h3-head btn'>

        {props.download ? 
            <a target={props.target} href={props.herf ? props.herf : '#'} download={props.download ? props.download : "blank"} >
              {props.name ? props.name : 'Register Here'}
            </a>
          :
            <a target={props.target} href={props.herf ? props.herf : '#'} >
              {props.name ? props.name : 'Register Here'}
            </a>
        }
        </button>
        {/* <button class="bg-cyan-500 shadow-lg shadow-cyan-5">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button> */}
    </>
  )
}
