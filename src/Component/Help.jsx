import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
  return (
    <div className="help">
      <div className="rang">
            <h1>They Need Your Help!</h1>
            <p>Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
            <span><Link>DONATE NOW</Link></span>
      </div>
    </div>
  )
}

export default Help
