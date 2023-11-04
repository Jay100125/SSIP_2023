import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jobs } from './../../components/job_data';
import "./jobpost.css";

export default function JobPost() {
  const navigate = useNavigate();

  // Initialize jobData and handleInputChange
  const [jobData, setJobData] = useState({
    description: '',
    company: '',
    post: '',
    city: '',
    salary: '',
    jobType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJobId = Math.max(...jobs.map((job) => job.id), 0) + 1;
    const newJob = {
      id: newJobId,
      company: jobData.company,
      logo: 'path-to-your-logo',
      post: jobData.post,
      city: jobData.city,
      salary: jobData.salary,
      jobType: jobData.jobType,
      description: jobData.description,
    };

    jobs.push(newJob);

    localStorage.setItem('jobs', JSON.stringify(jobs));

    navigate('/find-job');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Job post</h5>
        <div className="jobtitle">
          <h6>Job Title</h6>
          <input
            className="textt"
            type="text"
            name="post"
            value={jobData.post}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <h6>Job Description</h6>
          <textarea 
            className="text-area"
            name="description"
            value={jobData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <h6>Company</h6>
          <input
            className="textt"
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <h6>City</h6>
          <input
            className="textt"
            type="text"
            name="city"
            value={jobData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <h6>Salary</h6>
          <input
            className="textt"
            type="text"
            name="salary"
            value={jobData.salary}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <h6>Job Type</h6>
          <input
            className="textt"
            type="text"
            name="jobType"
            value={jobData.jobType}
            onChange={handleInputChange}
          />
        </div>
        <button className="post" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}