import React from 'react'
import "./jobcard.css"

export default function Jobcard({category, title, location,time, date, employer, logo}) {
  return (
    <div className="job">
        <div className="category">
            <p>{category}</p>
        </div>
        <h2 className="jobtitle">
            <p>{title}</p>
        </h2>
        <div className="jobInfo">
            <div className="location">
                <i className="flaticon-location"></i>
                <p>{location}</p>
            </div>
            <div className="time">
                <p>{time}</p>
            </div>
        </div>
        <div className="infoBottom">
            <div className="innerLeft">
                <div>{date}</div>
                <p className="name">{employer}</p>
            </div>
            <div className="right">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}