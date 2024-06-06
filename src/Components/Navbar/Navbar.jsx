import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src = {logo} alt=''/>
            <p> R&O Shop & Fun</p>
        </div>
        <ul className='nav-menu'>
            <li>חנות</li>
            <li>גברים</li>
            <li>נשים</li>
            <li>ילדים</li>
        </ul>
        <div className="nav-login-cart">
            <button>התחברות</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}
