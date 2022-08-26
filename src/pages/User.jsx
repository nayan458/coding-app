import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Buletin from '../components/Buletin'
import Button from '../components/Button'
import Nav from '../layouts/Nav'
import female from '../media/img/avatars/female1.png'
import male from '../media/img/avatars/male1.png'
import Agenda from '../media/pdf/agenda.pdf'

export default function User() {
  const [gender, setGender] = useState('male')

  return (
    <>
        <Nav></Nav>
        <section className='w-screen h-screen bg-charcol flex pt-20'>
            <div className='w-full grid grid-cols-2 '>
                <div className='pl-24'><img src={gender === 'male' ? male : female}></img></div>
                <div className='h3-head'>
                  <div>Nayanmoni Baruah</div>
                  <div>K.C.Das Commerce College</div>
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
