import React from 'react'
import MissionData from '../Data/MissionData'
function Mission() {
  return (
    <div className="mission">
      <p>Be a Part Of</p>
      <h1>Our Mission</h1>
      <p className="para">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
      <div className="mbox">
        {MissionData.map((a)=>(
          <div key={a.img}>
            <img src={a.img} alt="" />
            <h3>{a.title}</h3>
      </div>
        ))}
      
        
      </div>
    </div>
  )
}

export default Mission
