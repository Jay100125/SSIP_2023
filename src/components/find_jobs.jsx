import React from 'react';
import JobSearchSidebar from './job_search_slider';
import './find_job.css'
import FindJob from './FindJob';

function Find_job() {
  return (
    <>
    <div className="app">
      <h1 className="job-list-title">Job List</h1>
      <div className="home-job-list">
        <a href="/home">Home</a> / <a href="/job-list">Job List</a>
      </div>
    </div>
      <JobSearchSidebar />
    </>
  );
}

export default Find_job;
// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function FindJob() {
//   // Retrieve the query parameters from the URL using react-router
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   // Parse the query parameters into an object
//   const jobPostData = {};
//   for (const [key, value] of queryParams.entries()) {
//     jobPostData[key] = value;
//   }

//   return (
//     <div>
//       <h5>Find Job</h5>
//       <div className="job-details">
//         <h6>Company name: {jobPostData.name}</h6>
//         <h6>Job Title: {jobPostData.title}</h6>
//         <h6>Job Description: {jobPostData.description}</h6>
//         <h6>Qualification: {jobPostData.qualification}</h6>
//         <h6>Application Deadline: {jobPostData.deadline}</h6>
//         <h6>Location: {jobPostData.location}</h6>
//       </div>
//     </div>
//   );
// }
