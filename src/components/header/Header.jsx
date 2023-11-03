import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className="pic">
      <div className="header">
        <div className="headerTitles">
          <h2 className="headerTitleSm">
            Join us & Explore
             <br />
             Thousands of Jobs
          </h2>
          <span className="headerTitleLg">Find Jobs, Employment & Career Opportunities</span>
        </div>
        <div className='search'>
            <input type="text" className='input' name="job" placeholder='job title, keywords' id="" />
            <button className='btn'>Find jobs</button>
        </div>
        {/* <img
          className="headerImage"
          src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/11/slider12.jpg"
          alt=""
        /> */}
      </div>
    </div>
  )
}