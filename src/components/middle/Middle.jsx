import React from 'react'
import "./middle.css"
export default function Middle() {
  return (
   <>
    <div className="container">
          <div className="left">
            <div className="heading">
              <h2>
                search for <br /> jobs
              </h2>
            </div>
            <div className="detail">
            To start searching for jobs, you can attend job fairs online or in person, use job boards and career websites or reach out directly to recruiters in a targeted company to broaden your network.
            </div>
            <div className="points">
              <ul className='points'>
                <li>Bring to the table win-win survival</li>
                <li>Capitalize on low hanging fruit to identify</li>
                <li>But I must explain to you how all this</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <img src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/11/tab1.jpg" alt="" />
          </div>
        </div>
   </>
  )
}