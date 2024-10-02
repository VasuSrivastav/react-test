import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex gap-4 place-content-evenly'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Paste</NavLink>
        
    </div>
    <div className="w-4/5 mt-2 mx-auto border-b-2 border-gray-300"></div>
    </div>
  )
}

export default Navbar


//rfc - react functional component
// rafce - react arrow functional component