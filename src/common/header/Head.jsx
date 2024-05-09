import React from "react"
import { Link } from "react-router-dom"


const Head = () => {
  return (
    <>
   
      <section className='head'>
     
        <div className='container d_flex'>
          <div className='left row'>
          <i className='fa fa-map-marker'></i>
            <label>Deliver to location</label>
            <i className='fa fa-phone'></i>
            <label> +91-8795228462</label>
            <i className='fa fa-envelope'></i>
            <label> singh0605shalini@gmail.com</label>
          </div>
          <div className='right row RText'>
     <label>
                <Link to='/cart'>Track My Order</Link>
                </label>
            <label>Wishlist</label>

            <label>Items</label>
           
                <Link to='/user'>My Account</Link>
            
       
           
            
            <span>🏳️‍⚧️</span>
            <label>EN</label>
          </div>
        </div>
      
      </section>
    
    </>
  )
}

export default Head
