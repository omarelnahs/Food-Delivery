import React, { useState } from 'react'
import "./Navbar.css" 
import { assets } from "../../assets/assets"
    
const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home")

    return (
        <nav className="">
            <div className='navbar container pt-5 px-2 mx-auto flex justify-between items-center'>
                <div className="logo">
                    <img src={assets.logo} className='logo w-32' width={"100%"} height={"100%"} alt="logo" />
                </div>
                <ul className="navbar-menu hidden md:flex justify-between items-center  gap-4">
                    <li onClick={()=>setMenu("home")} className={menu === "home" ? " border-b-2 border-solid border-red-500 cursor-pointer" : " cursor-pointer"}>Home</li>
                    <li onClick={()=>setMenu("menu")} className={menu === "menu" ? " border-b-2 border-solid border-red-500 cursor-pointer" : "cursor-pointer" }>Menu</li>
                    <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? " border-b-2 border-solid border-red-500 cursor-pointer" : " cursor-pointer"}>Mobile App</li>
                    <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? " border-b-2 border-solid border-red-500 cursor-pointer" : " cursor-pointer"}>Contact Us</li>
                </ul>
                <div className="navbar-right flex justify-between items-center gap-4">
                    <div className="search">
                        <img className='w-5 h-5' src={assets.search_icon} alt="search" />
                    </div>
                    <div className="navbar-search-icon relative">
                        <img className='w-5 h-5' src={assets.basket_icon} alt="cart" />
                        {
                            <div className="dot"></div>
                        }
                    </div>
                    <button
                        className='btn py-2 px-4 border border-solid border-gray-500 rounded-xl hover:bg-gray-200 transition-all '
                        onClick={() => setShowLogin(true)}>Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar