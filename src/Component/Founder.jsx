import React from 'react'
import founder from '../assets/founder.jpg'
function Founder() {
  return (
    <>
      <section className="founder">
        <div className="img">
        <img src={founder} alt="" />
        <p>1898 – 1985</p>
        </div>
        <div className="speech">
        <h1>Eius modi tempora incidunt ut labore et dolore.</h1>
        <h3>- William Lawrence</h3>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
        </div>
      </section>
    </>
  )
}

export default Founder
