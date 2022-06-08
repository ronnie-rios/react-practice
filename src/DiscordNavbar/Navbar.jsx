import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChessKnight, FaCompass,FaHatCowboy } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray shadow-md'>
      <NavBarIcon icon={<FaCheckCircle size='28' />} />
      <Divider />
      <NavBarIcon icon={<FaCompass size='28' />} />
      <Divider />
      <NavBarIcon icon={<FaChessKnight size='28' />} />
      <Divider />
      <NavBarIcon icon={<FaHatCowboy size='28' />} />
    </div>
  )
}

function NavBarIcon ({icon, text='helpful tips'}) {
  <div className='navbar-icon group'>
    {icon}

    <span className='navbar-tooltip group-hover:scale-100'>{text}</span>
  </div>
}

function Divider(){
  <hr className='navbar-hr' />
}
export default Navbar