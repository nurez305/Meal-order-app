import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
   <footer>
    <a href="#http" className='footer_logo'>NaijaMeals</a>
    <ul className='permalink'>
      <li><a href="#http">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Service</a></li>
      <li><a href="#contact">Contact</a></li>
     
    </ul>
    <div className='footer_socials'>
    <a href="#https" target="_blank"><BsLinkedin /></a>
      <a href="#https"><BsInstagram/></a>
      <a href="https://twitter.com/nurez154"><FaTwitter/></a>
    </div>

    <div className='footer_copywrite'>
      <small>&copy; Naija Meal website</small>
    </div>
   </footer>
  )
}

export default Footer