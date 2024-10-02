import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
        <button onClick={props.action}>Button : {props.name} </button>
        {/* <p>count : {props.no}</p> */}
    </div>

  )
}

export default Button