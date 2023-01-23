import React from 'react'
import './_home.css'
function TopRow() {
  return (
    <div className='top'> 
        <div className="filter_btn">
            <button>Filter By</button>
        </div>
        <div className="tqm_btn">
            <button onClick={() => {
              window.location.href = '/tqm'
            }}>TQM</button>
        </div>
        
    </div>
  )
}

export default TopRow