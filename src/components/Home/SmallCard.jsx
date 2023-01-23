import React from 'react'

function SmallCard({icon, text, count}) {
  return (
    <div className='small_card'>
        <div className="icon_data">
          {icon}
          <p>{text}</p>
        </div>
        
        <div className="count">
          <p>{count}</p>
        </div>

    </div>
  )
}

export default SmallCard