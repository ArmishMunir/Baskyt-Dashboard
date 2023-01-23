import React from 'react'
import './_home.css'
import TopRow from './TopRow'
import Menu from '../Menu/Menu'
import SmallCard from './SmallCard'
import {BsFillPeopleFill, BsHandbagFill, BsFillStarFill} from 'react-icons/bs'
import {AiFillCar} from 'react-icons/ai'
import {MdRowing, MdVerifiedUser} from 'react-icons/md'
import {IoStatsChart} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {MdOutlineTrendingUp} from 'react-icons/md'
import MediumCard from './MediumCard'
import RowHeader from './RowHeader'
import Row from './Row'

function Home() {
  return (
    <div className='home'>
        <div className="menu">
            <Menu />
        </div>
        <div className="content">
            <div className='topRow'>
              <TopRow />
            </div>
            <section className='middle_section'>
              <div className="middle_section__left">
                <div className="upper">
                  <SmallCard  icon={<BsFillPeopleFill />} text='CUSTOMERS' count='7340' />
                  <SmallCard  icon={<BsHandbagFill />} text='ORDERS' count='12970' />
                  <SmallCard  icon={<AiFillCar />} text='DELIVERY' count='12970' />
                  <SmallCard  icon={<MdVerifiedUser />} text='USERS' count='12970' />
                </div>
                <div className="lower">
                  <SmallCard  icon={<IoStatsChart />} text='REVENUE' count='$ 7340' />
                  <SmallCard  icon={<BsFillStarFill />} text='AVG STAR' count='4.0' />
                  <SmallCard  icon={<IoStatsChart />} text='AVG REV PER CUSTOMER' count='$ 12970' />
                  <SmallCard  icon={<IoStatsChart />} text='AVG REV PER USER' count='$ 12970' />
                </div>  
                
              </div>

              <div className="middle_section__right">
                <div className="header">
                  <p>USER STATISTICS</p>
                  <BiDotsVerticalRounded />
                </div>
                <div className="seperator" />
                <div className="stats">
                  <img src="./stats.png" alt="can't load" />
                </div>

                <div className="bottom_stats">
                  <div className="weekly">
                    <p className='title'>Weekly Users</p>
                    <p className='count'>8,210</p>
                  </div>
                  <div className="monthly">
                    <p className='title'>Monthly Users</p>
                    <p className='count'>241,894</p>
                  </div>
                  <div className="trends">
                    <p className='title'>Trends</p>
                    <MdOutlineTrendingUp className='count' id='icon'/>
                  </div>
                </div>
              </div>
            </section>

            <section className='customers'>
              <MediumCard 
                name={"Christina"} 
                amount={"$ 49,137"} 
                orders={182}
                stars={4}
                revGrowth={12}
                orderGrowth={8}
              />
               <MediumCard 
                name={"Alex"} 
                amount={"$ 49,137"} 
                orders={182}
                stars={3}
                revGrowth={12}
                orderGrowth={8}
              />
               <MediumCard 
                name={"Desi Accent"} 
                amount={"$ 134,669"} 
                orders={182}
                stars={5}
                revGrowth={12}
                orderGrowth={8}
              />
            </section>

            <section className='table'>
              <p className='head'>Active Orders</p>
              <div className="const_row">
                <RowHeader />
                <Row 
                  type={'squad'}
                  orderNo={'25063'}
                  customer={'Tommy'}
                  zipCode={'50350'}
                  orderTime={'3:12'}
                  vendor={'Desi'}
                  rider={'Bill Cohen'}
                  orderAmount={'$123'}
                />
                <Row 
                  type={'squad'}
                  orderNo={'25063'}
                  customer={'Tommy'}
                  zipCode={'50350'}
                  orderTime={'3:12'}
                  vendor={'Desi'}
                  rider={'Bill Cohen'}
                  orderAmount={'$123'}
                />
                <Row 
                  type={'squad'}
                  orderNo={'25063'}
                  customer={'Tommy'}
                  zipCode={'50350'}
                  orderTime={'3:12'}
                  vendor={'Desi'}
                  rider={'Bill Cohen'}
                  orderAmount={'$123'}
                />
              </div>
            </section>
        </div>
        
    </div>
  )
}

export default Home