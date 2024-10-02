import React from 'react'
import './NavBar.css'
import dark from '../../public/vite.svg'
const NavBar = (props) => {
  return (
    <div>
        <nav>
            <h1> <span> <img src={props.img} alt={props.name} srcset="" /></span>
                Logo</h1>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <img className='darkmode' src={dark} alt="dark mode" />
        </nav>
    </div>
  )
}

export default NavBar