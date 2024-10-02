import React from 'react'
import './theme.css'
const Theme = (props) => {
    function changecolorr() {
        if (props.themi === "light") {
            props.changecolor("dark");
        } else {
            props.changecolor("light");
        }
    }
  return (
    <div>
        <div className={props.themi==="light"?"light":"dark"} id='box'>theme changer</div>
        <button onClick={changecolorr}>change theme</button>
    </div>
  )
}

export default Theme