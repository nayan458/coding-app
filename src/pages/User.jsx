import React from 'react'
import Nav from '../layouts/Nav'
import avatar from '../media/img/avatars/female1.png'

export default function User() {
  return (
    <>
        <Nav></Nav>
        <section className='w-screen h-screen bg-black flex'>
            <div>
                <img src={avatar}></img>
            </div>


        </section>
    </>
  )
}
