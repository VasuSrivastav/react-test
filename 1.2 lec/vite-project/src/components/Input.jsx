import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=>{
            props.setShow1(e.target.value)
        }}
        />
        <p>inside child :  {props.show1}</p>
    </div>
  )
}

export default Input