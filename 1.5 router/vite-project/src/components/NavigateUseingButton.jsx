import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from './about';
import { useContext } from 'react';
import { userContext } from '../App';
const NavigateUseingButton = (props) => {
    const Navigate = useNavigate();
    const user= useContext(userContext);
    function handleClick() {
        Navigate(user.page)
        // if(props.currpg==="/"){props.nextpg("/about")}
        // // else if(props.currpg==="/help"){props.nextpg("/home")}
        // else if(props.currpg==="/about"){props.nextpg("/help")}
        // else {props.nextpg("/home")}
        // Navigate(props.currpg)
    }
  return (
    <div>
      <button onClick={handleClick}>home</button>
    </div>
  )
}

export default NavigateUseingButton