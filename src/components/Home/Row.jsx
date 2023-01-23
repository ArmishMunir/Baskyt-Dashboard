import React from 'react'
import './_home.css'
function Row({type, orderNo, customer, zipCode, orderTime, vendor, rider, orderAmount}) {
  return (
    <div className='row'>
        <div className="data type_btn">
            <p>{type}</p>
        </div>
        <div className="data">
            <p>{orderNo}</p>
        </div>
        <div className="data">
            <p>{customer}</p>
        </div>
        <div className="data">
            <p>{zipCode}</p>
        </div>
        <div className="data">
            <p>{orderTime}</p>
        </div>
        <div className="data">
            <p>{vendor}</p>
        </div>
        <div className="data">
            <p>{rider}</p>
        </div>
        <div className="data order_amount">
            <p>{orderAmount}</p>    
        </div>       
    </div>
  )
}
export default Row