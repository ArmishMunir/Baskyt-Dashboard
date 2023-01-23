import React from 'react'
import {FiArrowDown, FiEdit3} from 'react-icons/fi'
import {FiArrowUp} from 'react-icons/fi'
import {SiHackthebox} from 'react-icons/si'
import {TiTick} from 'react-icons/ti'
import {BsClockHistory} from 'react-icons/bs'
import {SlBadge} from 'react-icons/sl'
import './_tqm.css'
import Menu from '../Menu/Menu'
import Card from './Card'
function Tqm() {
  return (
    <div className='tqm'>
        <div className="menu">
            <Menu />
        </div>
        <div className="tqm_content">
            <section className='upper'>
                <div className='btn'>
                    <div className="quality">Quality</div>
                    <div className="performance">Performance</div>
                </div>
                <FiEdit3 className='edit_icon'/>
            </section>
            <p className='heading'>Company Insights</p>
            <section className='lower_sec'>
                <div className="lower_sec__up">
                    <Card
                        icon={<SiHackthebox />}
                        text='Order Acceptance'
                        percentage='50'
                        growth='5'
                        growthIcon={<FiArrowDown />}
                        btnText='Phase 1 Goals'
                    />
                    <Card
                        icon={<BsClockHistory className='clock'/>}
                        text='Reaching Vendor'
                        percentage='95'
                        growth='8'
                        growthIcon={<FiArrowUp />}
                        btnText='Phase 2 Goals'
                    />
                    <Card
                        icon={<SiHackthebox />}
                        text='Delivery Order'
                        percentage='99'
                        growth='5'
                        growthIcon={<FiArrowUp />}
                        btnText='Ultimate Goals'
                    />
                </div>
                <div className="lower_sec__down">
                    <Card
                        icon={<TiTick className='tick'/>}
                        text='Delivery Order'
                        percentage='99'
                        growth='5'
                        growthIcon={<FiArrowUp />}
                        btnText='None'
                    />
                    <Card
                        icon={<SlBadge className='badge'/>}
                        text='Delivery Order'
                        percentage='99'
                        growth='5'
                        growthIcon={<FiArrowUp />}
                        btnText='Ultimate Goals'
                    />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Tqm;