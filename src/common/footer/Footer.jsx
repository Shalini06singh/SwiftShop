import React from "react"
import "./style.css"
// import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            {/* <h1>CrazzyHub</h1>
            */}
            <div className='icon d_flex'>
            <div className='img d_flex'>
                <i class='fa-brands fa-youtube'></i>
                <a href="https://www.youtube.com/">YouTube</a>
              </div>


              <div className='img d_flex'>
                <i class='fa-brands fa-linkedin'></i>
                <a href="https://www.linkedin.com/in/shalini06/">LinkedIn</a>
                
              </div>

              <div className='img d_flex'>
                <i class='fa-brands fa-instagram'></i>
                <a href="https://www.instagram.com/">Instagram</a>
              </div>

              <div className='img d_flex'>
                <i class='fa-brands fa-facebook'></i>
                <a href="https://www.facebook.com/">Facebook</a>
              </div>

              <div className='img d_flex'>
                <i class='fa-brands fa-x'></i>
                <a href="https://twitter.com/ShaliniSin50923">Twitter</a>
              </div>
             
            </div>
          </div>
          <div className='box'>
            <h2>Support</h2>
            <ul>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Policies</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return,Replacement&Refund</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Know More</h2>
            <ul>
              <li>About Us </li>
              <li>Our Stories </li>
              <li>Service Center </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Information Head Office</h2>
            <ul>
              <li>Registered Office Address:</li>
              <li>RETAIL PVT. LTD,</li>
              <li>SS-1281 Sector-H Ashiyana, LDA Colony,</li>
              <li>Lucknow, 226012 Uttar Pradesh, India.</li>
              <li>CIN - U52590UP2021PTC153464</li>
        <div>©2024 SHALINI RETAIL PVT. LTD. All Rights Reserved | Made by Love Shalini.</div>
              
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
