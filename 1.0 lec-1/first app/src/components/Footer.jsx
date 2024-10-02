import React from 'react'
import './Footer.css'
const Footer = (props) => {
  return (
    <div>
        <div className='foot'>
            <span>@vasusri {props.yr}</span>
        </div>
    </div>
  )
}

export default Footer