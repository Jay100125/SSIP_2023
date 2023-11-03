import React from 'react'
import "./job.css"

export default function Job() {
  return (
    <div className="job">
        <div className="category">
            <p>Desing</p>
        </div>
        <h2 className="jobtitle">
            <p>Food product manager</p>
        </h2>
        <div className="jobInfo">
            <div className="location">
                <i className="flaticon-location"></i>
                <p>Ahmedabad</p>
            </div>
            <div className="time">
                <p>Full time</p>
            </div>
        </div>
        <div className="infoBottom">
            <div className="innerLeft">
                <div>5 January 2024</div>
                <p className="name">Employer</p>
            </div>
            <div className="right">
                <div className="logo">
                    <img src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/y2.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}