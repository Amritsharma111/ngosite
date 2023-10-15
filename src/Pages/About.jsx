import React from 'react'
import Help from '../Component/Help'
import founder from '../assets/founder.jpg'
import {AiFillCaretRight} from 'react-icons/ai'
import LocationData from '../Data/LocationData'
function About() {
  return (
    <>
      <section className="about">
         <div className="ab">
                <h1>About Us</h1>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
         </div>
      </section>
      <section className="power">
          <div className="rang">
            <h1>You Have the Power to save the Wildlife Worldwide</h1>
          </div>
      </section>
      <section className="tfounder">
        <div className="tf">
          <div className="img">
            <h1>The Founder</h1>
            <img src= {founder} alt="" />
            <h3>William Lawrence</h3>
            <p>1898 – 1985</p>
          </div>
          <div className="content">
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
            <p className='p'>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?”</p>
          </div>
        </div>
      </section>
      <section className="vmv">
        <div className="vmvbox">
        <div>
          <h1>Vision</h1>
          <p>Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.</p>
        </div>
        <div> 
          <h1>Mission</h1>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.  
          </p>
        </div>
        <div>
          <h1>Values</h1>
          <ul>
            <li><AiFillCaretRight color='#3c4050'/>Neque porro quisquam</li>
            <li><AiFillCaretRight color='#3c4050'/>Modi tempora incidunt</li>
            <li><AiFillCaretRight color='#3c4050'/>Dolorem ipsum quia dolor</li>
            <li><AiFillCaretRight color='#3c4050'/>Ipsum quia dolor sit</li>
            <li><AiFillCaretRight color='#3c4050'/>Numquam eius modi tempora</li>
            <li><AiFillCaretRight color='#3c4050'/>Sed quia non numquam</li>
          </ul>
        </div>
        </div>
      </section>
      <section className='section'>
        <h1>Other Locations</h1>
          <div className="location">
            {LocationData.map(a=>(
              <div key={a} className="lbox">
                <img src={a.img} alt="" />
                <h4>{a.name}</h4>
                <p>{a.location}</p>
              </div>
            ))}
        </div>
      </section>
      <Help/>
    </>
  )
}

export default About
