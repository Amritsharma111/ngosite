import React, {useState} from 'react'
import {Link, NavLink, Route, Routes}  from 'react-router-dom'
import logo from "../assets/animal-welfare-black.svg"
import Home from "../Pages/Home"
import About from "../Pages/About"
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

function Header() {
  const [nav, setNav] = useState(false);
  const removeActive = () => {
    setNav(false)
  }
  return (
    <header>
      <div className="con">
        <div className="head">
            <div className="logo">
                <Link to={`/`}><img src={logo} alt="" /></Link>
            </div>
            <div>
                <ul className={ nav ? "show" : ""}>
                    <li onClick={removeActive} ><NavLink to={`/`}>HOME</NavLink></li>
                    <li onClick={removeActive} ><NavLink to={`/about/`}>About</NavLink></li>
                    <li onClick={removeActive} ><NavLink to={`/campaigns/`}>See All Campaigns</NavLink></li>
                    <li onClick={removeActive} ><NavLink to={`/contributors`}>Star Contributors</NavLink></li>
                    <li onClick={removeActive} ><NavLink to={`/contact`}>Contact</NavLink></li>
                    <li onClick={removeActive} className="btn"><Link to={`/`}>DONATE NOW</Link></li>
                </ul>
            </div>
            <div className='menu' onClick= {() => {setNav(!nav)}}>
                {nav ? <RxCross2 size={30}/> : <AiOutlineMenu size={30}/> }
            </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/" element={<About/>}/>
        </Routes>
    </header>
    
  )
}

export default Header
