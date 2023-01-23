import React from 'react'
import './_menu.css'

import {BsHouseDoor} from 'react-icons/bs'
import {ImFilesEmpty} from 'react-icons/im'
import {AiOutlineFileSync} from 'react-icons/ai'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {IoStorefront} from 'react-icons/io5'
import {BsBoxSeam} from 'react-icons/bs'
import {CiPercent} from 'react-icons/ci'
import {BsCreditCard} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'
import {SlBadge} from 'react-icons/sl'
import {BsHeadset} from 'react-icons/bs'

function Menu() {
  return (
    <div className='menu'>
        <BsHouseDoor className='i' onClick={() => {
          window.location.href = '/'
        }}/>
        <AiOutlineFileSync className='i'/>
        <ImFilesEmpty className='i'/>
        <BsPersonBoundingBox className='i'/>
        <IoStorefront className='i'/>
        <BsBoxSeam className='i'/>
        <CiPercent className='i'/>
        <BsCreditCard className='i'/>
        <BsBell className='i'/>
        <SlBadge className='i'/>
        <BsHeadset className='i'/>

    </div>
  )
}

export default Menu