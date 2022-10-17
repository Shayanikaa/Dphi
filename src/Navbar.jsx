import React from 'react'
import mainLogo from './images/mainLogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='container'>
      <img src={mainLogo} alt="" />
    </nav>
    </>
  )
}

export default Navbar
