import React from 'react'
import team from '../assets/volunteer-team.jpg'
import {AiFillCaretRight} from 'react-icons/ai'
import {MdPlace} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Volunteer() {
  return (
    <div className="vol">
      <p>Volunteer Journey</p>
      <h1>Join Us in an Animal Welfare Tour​</h1>
      <p className="para">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
      <div className="flex">
        <div>
            <img src={team} alt="" />
        </div>
        <div>
            <h3>Volunteering Experience</h3>
            <ul>
                <li><AiFillCaretRight size={12}/>Jungle Safari</li>
                <li><AiFillCaretRight size={12}/>Volunteering Experience</li>
                <li><AiFillCaretRight size={12}/>Charity </li>
                <li><AiFillCaretRight size={12}/>Fund Raising</li>
            </ul>
            <h3 className='pt'>Other Experiences</h3>
            <ul>
                <li><AiFillCaretRight size={12}/>Camp Fire</li>
                <li><AiFillCaretRight size={12}/>Accomodation</li>
                <li><AiFillCaretRight size={12}/>Accomodation</li>
            </ul>
        </div>
      </div>
      <span><Link><MdPlace size={12}/> Book A Place</Link></span>
    </div>
  )
}

export default Volunteer
