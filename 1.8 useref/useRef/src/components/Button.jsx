import React from 'react'
import { useRef } from 'react'

const Button = (props) => {
    let newno = useRef(0)
  return (
    <div>
        <button onClick={props.fun}>increse</button>
        <button onClick={props.fun1}>increse ref</button>
        {/* <input type='number'  onChange={(e)=>{
            newno.current=(e.target.value)
        }} /> */}
        {/* {props.zxc= newno.current} */}
    </div>
  )
}

export default Button