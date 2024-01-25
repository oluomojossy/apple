import React from 'react'
import "./Header.css"
import {AiFillApple} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {CgToolbox} from "react-icons/cg"

const Header = () => {
  return (

    <div className='header'>
        <AiFillApple/>nav
            <nav>Store</nav>
            <nav>Mac</nav>
            <nav>iPad</nav>
            <nav>iPhone</nav>
            <nav>Watch</nav>
            <nav>Vision</nav>
            <nav>Airpod</nav>
            <nav>TV & Home</nav>
            <nav>Entertainment</nav>
            <nav>Accessories</nav>
            <nav>Support</nav>
    
        <AiOutlineSearch/>
        <CgToolbox/>




    </div>

  )
}

export default Header