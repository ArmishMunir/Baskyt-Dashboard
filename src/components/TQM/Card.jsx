import React from 'react'
import './_tqm.css'
import {SiHackthebox} from 'react-icons/si'
function Card({icon, text, percentage, growth, growthIcon, btnText}) {
  return (
    <div className='Card'>
        <div className="icon_d">
          {icon}
          <p>{text}</p>
        </div>
        <div className="card_stats">
            <p>{percentage}%</p>
            <div className="stats">
                <p>{growth}</p>
                <p>{growthIcon}</p>
            </div>
        </div>
        <div className="card_btn">
          <p>{btnText}</p>
        </div>
    </div>
  )
}

export default Card