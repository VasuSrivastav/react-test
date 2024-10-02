import React from 'react'
import './theme.css'
import {userContext} from '../../App'
import {useContext} from 'react'

const ThemeUsecontext = () => {

    const user= useContext(userContext);
    function changecolorr() {
        if (user.theme === "light") {
            user.setTheme("dark");
        } else {
            user.setTheme("light");
        }
    }
  return (
    <div>
        <div className={user.theme==="light"?"light":"dark"} id='box'>theme changer</div>
        <button onClick={changecolorr}>change theme</button>
    </div>
  )
}

export default ThemeUsecontext
