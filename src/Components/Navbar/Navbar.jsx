import React from 'react'
import './styleNavbar.scss'
import img from '../../Assets/images/navbar-image.png'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="navbar">
               <a href="kun.uz">Services</a>
               <a href="kun.uz">Name Company</a>
               <a href="kun.uz">Portfolio</a>
            </div>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export  default Navbar
