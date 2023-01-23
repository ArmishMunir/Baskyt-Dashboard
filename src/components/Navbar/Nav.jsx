import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import './_nav.css'
function Nav() {
  return (
    <div className='nav'>
      <div className="nav__left">
        {/* basket */}
        <div className="left__basket">
          <BsFillBasketFill className='icon'/>
          <p className='logo_text'>Baskyt</p>
        </div>

        {/* menu */}
        <div className='left__menu'>
          <AiOutlineMenu className='icon' id='menu'/>
        </div>
      </div>
      
      <div className="nav__right">
        {/* search */}
        <BsSearch className='icon'/>
        <RxAvatar className='icon'/>
      </div>

    </div>
  )
}

export default Nav