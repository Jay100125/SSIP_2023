import React from 'react';
import JobSearchSidebar from './job_search_slider';
import './find_job.css'

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
