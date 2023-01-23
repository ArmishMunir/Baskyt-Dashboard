import React from 'react'
import {IoPersonSharp} from 'react-icons/io5'
import {BsArrowUp, BsArrowDown} from 'react-icons/bs'
import './_home.css'
function MediumCard({name, amount, orders, stars, revGrowth, orderGrowth}) {
  return (
    <div className='medium_card'>
        <div className="top_row">
            <p>Top Rider</p>
        </div>
        <div className="details">
            <div className="personal_data">
                <div className="name">
                    <IoPersonSharp className='avatar'/>
                    <p>{name}</p>
                </div>
                <div className="amount">
                    <p>{amount}</p>
                </div>
            </div>

        </div>

        <div className="rating_header">
            <p>AVG RATING</p>
            <p>PROCESSED ORDERS / MONTH</p>
        </div>
        <div className="rating_details">
            <div className="rate">
                <div className="stars">
                    {Array(stars).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
               <div className="stats">
                    <BsArrowUp />
                    <p>{revGrowth}</p>
               </div>
            </div>
            <div className="order_rating">
                <div>
                    <p>{orders}</p>
                </div>
                <div className="order_stats">
                    <BsArrowDown />
                    <p>{orderGrowth}%</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MediumCard