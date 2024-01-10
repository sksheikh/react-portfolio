import React from 'react'

import logo from '../assets/image/logo.png'
import Classes from '../assets/css/nav.module.css'
import { FaAlignRight } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className={Classes.navbar}>
        <a href="" className={Classes.navbar__brand}>
            <img src={logo} alt="logo"
            />
        </a>

        <ul className={Classes.navbar_nav}>
            <li><a href="">Home</a></li>
            <li ><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Contact</a></li>
        </ul>

        <div className={Classes.right__info}>
            <a href="">Let's talk</a>
            <div className={Classes.toggle_bar}>
                <FaAlignRight  className={Classes.toggle_icon}/>
            </div>
        </div>
    </nav>
  )
}
