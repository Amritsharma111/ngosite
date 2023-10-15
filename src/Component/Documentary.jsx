import React from 'react'
import divder from '../assets/divider.svg'
import elephant from '../assets/gray-elephant.jpg'
import { FaYoutube } from 'react-icons/fa'
import {AiOutlinePlayCircle} from 'react-icons/ai'

function Documentary() {
  return (
    <div className="doc">
      <p className="color">To Know More</p>
      <h1>Documentary</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
      <img className='img1' src={divder} alt="" /> <br />
      <div className='hatti'>
        <a href=""><img className='img2' src={elephant} alt=""/>
        <span><AiOutlinePlayCircle color='white' size={55}/></span>
        </a> 
      </div>
      <p className='para'><a href=""><FaYoutube color='red'/> Find us on YouTube</a></p>
    </div>
  )
}

export default Documentary
