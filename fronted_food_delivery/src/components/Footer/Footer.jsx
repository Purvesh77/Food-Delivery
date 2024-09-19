import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Discover a world of flavors with SpicyGo, where every dish is crafted to tantalize your taste buds. From savory starters to delectable desserts, our menu offers something for every craving. Indulge in gourmet meals delivered straight to your door, ensuring a delightful dining experience every time. Let SpicyGo bring the spice and excitement to your table!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9876543210</li>
                    <li>contact@spicygo.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © SpicyGo.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
