import React from 'react'
import { Link } from 'react-router-dom';
import Buletin from '../components/Buletin';
import Button from '../components/Button'
import WhatsAppBtn from '../components/WhatsAppBtn';
import BouncingBall from '../layouts/BouncingBall';
import Nav from '../layouts/Nav'
import NavDmy from '../layouts/NavDmy';
import AnimCodeHouse from '../media/loti/AnimCodeHouse';
import Agenda from '../media/pdf/agenda.pdf'

export default function Home() {

  return (

    <>
        {/* <WhatsAppBtn/> */}
        <BouncingBall/>
        <Nav/>
        <section>
            <div className='min-h-screen w-screen global-indent flex-col justify-evenly align-middle lg:flex bg-blk' id="main">
            <NavDmy/>
                <div className='h1-head bg-clip-text '>
                Coding <br/>
                Compitition
                </div>
                <div className='h2-head text-transparent bg-gradient-to-r from-pink-800 to-blue-200  bg-clip-text my-4 font-sketch font-extralight'>
                    Hello World...
                </div>
                <div className=' sm:flex-none lg:absolute right-0 top-10 w-screen h-[24rem] md:w-screen md:h-[30rem] lg:w-[40rem] lg:h-[40rem] bg-transparent overflow-hidden flex align-middle justify-center items-center'>
                    <AnimCodeHouse 
                    className={'relative right-0 top-10 w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] lg:w-[60rem] lg:h-[60rem]'}
                    />
                </div>
                <div className='my-10'>
                <Link to='/register'>
                    <Button herf='/register'/>
                </Link>
                </div>
            </div>
        </section>

        <section>
            <div className='w-screen min-h-screen global-indent bg-blk flex flex-col justify-evenly align-middle'>
                <div className='h2-head'>
                    Why you should participate?
                </div>
                <div className='h3-head font-mono'>
                    <ul>
                        <li className='global-li'>
                            <Buletin/>
                            Develop problem solving skills
                        </li>
                        <li className='global-li'>
                            <Buletin/>
                            Grow your connection, create new friends and meet new people</li>
                        <li className='global-li'>
                            <Buletin/>
                            Show off your programming skills</li>
                        <li className='global-li'>
                            <Buletin/>
                            Win exciting prizes and experinces</li>
                        <li className='global-li'>
                            <Buletin/>
                            It’s free ...</li>
                        <li className='global-li'>
                            <Buletin/>
                            Shade off your fear </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className='w-screen min-h-screen global-indent bg-blk flex flex-col justify-evenly align-middle'>
                <div className='h2-head border-l-8 border-double   border-l-purple-500 pl-7'>
                    Event Detail
                </div>
                <div className='h3-head font-mono '>
                    <ul>
                        <li className='global-li'>
                            <Buletin/>
                        Date : 20th september</li>
                        <li className='global-li'><Buletin/>
                        Registration status : open</li>
                        <li className='global-li'><Buletin/>
                        Address : K.C.Das Commerce College</li>
                        <li className='global-li  '><Buletin/>
                        For more detail we recommend please view the Agenda by cliking the “View Agenda” button bellow</li>
                    </ul>
                </div>
                <div>
                <Link to={Agenda} target='blank' download="coding_compitition_2022_agenda">
                    <Button name="View Agenda" herf={Agenda} target='blank' download="coding_compitition_2022_agenda">
                    </Button>
                </Link>
                </div>
            </div>
        </section>
    </>
  )
}
