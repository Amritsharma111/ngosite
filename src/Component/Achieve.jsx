import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import aData from '../Data/AchieveData'

function Achieve() {
  return (
    <div className="achieve">
        <div className="con">
            <div className="count">
                {aData.map(b =>(
                    <div key={b.heading} className="data">
                        <span>{b.icon}</span>
                        <h1>{b.number}</h1>
                        <h6>{b.heading}</h6>  
                </div>
                ))}
                
            </div>
            <div className="content">
                <p className="color">Know More About</p>
                <h1>What We Achieved</h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
                <ul>
                    <li className="fb"><a href=""><FaFacebook size={20}/></a></li>
                    <li className="twitter"><a href=""><FaTwitter size={20}/></a></li>
                    <li className="youtube"><a href=""><FaYoutube size={20}/></a></li>
                    <li className="medium"><a href=""><FaMedium size={20}/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Achieve
