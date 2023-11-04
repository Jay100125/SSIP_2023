import React from 'react';
import './job_card.css'
import { useState } from 'react';
import Pagination from './pagination';
import { jobs } from './job_data';

import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <Link to={`/job/${job.id}`} className="company-link">
        <div className="company-info">
          <img src={job.logo} alt={job.company} className="company-logo" />
          <h2 className="company-name">{job.company}</h2>
        </div>
        <h2 className="post">{job.post}</h2>
        <p className="city">{job.city}</p>
        <p className="salary">{job.salary}</p>
        <p className="job-type">{job.jobType}</p>
      </Link>
    </div>
  );
};


const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="job-list">
        {currentItems.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={jobs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Card;
