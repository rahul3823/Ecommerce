import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <button className='myButton'>Shopify</button>
        </div>
       

<ul className='footer-links'>
  <li><Link to="/AboutUs">About</Link></li>
  <li><Link to="/Offices">Offices</Link></li>
  <li><Link to="/Company">Company</Link></li>
  <li><Link to="/Contact">Contact</Link></li>
</ul>


        <div className='footer-social-icon'>
<div className="footer-icon-container">
<img src={instagram_icon} alt="" height="30px" />
</div>
<div className="footer-icon-container">
<img src={facebook_icon} alt="" height="30px"  />
</div>
<div className="footer-icon-container">
<img src={whatsapp_icon} alt=""  height="30px" />
</div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer