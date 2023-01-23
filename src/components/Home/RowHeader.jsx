import React from 'react'
import './_home.css'
import {BsArrowDownUp} from 'react-icons/bs'

function RowHeader() {
  return (
    <div className='row_header'>
        <div className="type">
            <p>Type</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Order #</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Customer</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Zip Code</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Order Time</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Vendor</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Rider</p>
            <BsArrowDownUp className='icon_arrow'/>
        </div>
        <div className="type">
            <p>Order Amount</p>    
            <BsArrowDownUp className='icon_arrow'/>
        </div>        
    </div>
  )
}

export default RowHeader