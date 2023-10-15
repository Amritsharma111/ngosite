import React from 'react'
import {FaRegEye} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Founder from '../Component/Founder'
import Volunteer from '../Component/Volunteer'
import Mission from '../Component/Mission'
import Achieve from '../Component/Achieve'
import Documentary from '../Component/Documentary'
import Help from '../Component/Help'
function Home() {
  return (
    <>
      <section className="home">
        <div className="rang">
        <div className="con">
            <div className="con1">
            <h1>Saving Animals Since 75 Years​</h1>
            <h2>Join Hands And Be A Hero​</h2>
            <p>Participate in our animal-saving mission and help us continue creating a better tomorrow for our rescues.</p>
            <Link to={`/`}> <span className="btn1"> <FaRegEye/> SEE ALL CAMPAIGNS</span></Link>
            </div>
        </div>
        </div>
      </section>

      <Founder/>
      <Volunteer/>
      <Mission/>
      <Achieve/>
      <Documentary/>
      <Help/>
    </>
  )
}

export default Home
