import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from './job_data';
import './job_card.css'
import './job_description.css'
const JobDescription = () => {
  const { jobId } = useParams(); // Change 'id' to 'jobId'
  const job = jobs.find((job) => job.id.toString() === jobId);

  if (!job) {
    return <div>Card not found</div>;
  }
  return (
    <>
      <div className="job-card-detail">
        <div className="company-info">
          <img src={job.logo} alt={job.company} className="company-logo" />
          <h2 className="company-name">{job.company}</h2>
        </div>
        <h2 className="post">{job.post}</h2>
        <p className="city">{job.city}</p>
        <p className="salary">{job.salary}</p>
        <p className="job-type">{job.jobType}</p>
      </div>
      <p className="detail" dangerouslySetInnerHTML={{ __html: job.description }}></p>
      <div className="center-button-container">
        <button className='btn-submit'>Apply Job</button>
      </div>
    </>
  );
};

export default JobDescription;
