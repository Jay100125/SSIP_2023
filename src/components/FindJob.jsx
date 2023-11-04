import React from "react";
import { useLocation } from "react-router-dom";

export default function FindJob() {
  // Retrieve the query parameters from the URL using react-router
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Parse the query parameters into an object
  const jobPostData = {};
  for (const [key, value] of queryParams.entries()) {
    jobPostData[key] = value;
  }

  return (
    <div>
      <h5>Find Job</h5>
      <div className="job-details">
        <h6>Company name: {jobPostData.name}</h6>
        <h6>Job Title: {jobPostData.title}</h6>
        <h6>Job Description: {jobPostData.description}</h6>
        <h6>Qualification: {jobPostData.qualification}</h6>
        <h6>Application Deadline: {jobPostData.deadline}</h6>
        <h6>Location: {jobPostData.location}</h6>
      </div>
    </div>
  );
}