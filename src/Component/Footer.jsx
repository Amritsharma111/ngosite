import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div>
        <h6>Subscribe & Social</h6>
        <form action="">
            <input type="text" name="" id="" placeholder="Email Address" />
            <input type="submit" value="SUBSCRIBE"/>
        </form>
        <ul className='foot'>
            <li><a href=""><FaFacebook size={20} color="white"/></a></li>
            <li><a href=""><FaTwitter size={20} color="white"/></a></li>
            <li><a href=""><FaInstagram size={20} color="white"/></a></li>
            <li><a href=""><FaMedium size={20} color="white"/></a></li>
        </ul>
      </div>
      <div>
      <h6>Quick Links</h6>
      <ul>
        <li><Link to={'/'}>Projects</Link></li>
        <li><Link to={'/'}>News</Link></li>
        <li><Link to={'/'}>Get Involed</Link></li>
        <li><Link to={`/about/`}>About</Link></li>
        <li><Link to={'/'}>Donate</Link></li>
      </ul>
      </div>
      <div>
      <h6>About Us</h6>
      <ul>
        <li><Link to={'/'}>Press Kit</Link></li>
        <li><Link to={'/'}>Events</Link></li>
        <li><Link to={'/'}>Visiting</Link></li>
        <li><Link to={'/'}>Volunteering</Link></li>
        <li><Link to={'/'}>FAQs</Link></li>
      </ul>
      </div>
      <div>
      <h6>Countries</h6>
      <ul>
        <li><Link to={'/'}>South Africa</Link></li>
        <li><Link to={'/'}>India</Link></li>
        <li><Link to={'/'}>Kenya</Link></li>
        <li><Link to={'/'}>Australia</Link></li>
        <li><Link to={'/'}>USA</Link></li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer
