import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <>
        <button type={props.type ? props.type : 'button'} className='h3-head btn'>

        {props.download ? 
            <Link target={props.target} to={props.herf ? props.herf : '#'} download={props.download ? props.download : "blank"} >
              {props.name ? props.name : 'Register Here'}
            </Link>
          :
            <Link target={props.target} to={props.herf ? props.herf : '#'} >
              {props.name ? props.name : 'Register Here'}
            </Link>
        }
        </button>
        {/* <button class="bg-cyan-500 shadow-lg shadow-cyan-5">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button> */}
    </>
  )
}
