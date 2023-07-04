import React from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar