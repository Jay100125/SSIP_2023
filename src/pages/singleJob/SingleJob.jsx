import React from 'react'
import './singleJob.css'

export default function SingleJob() {
  return (
    <div className="job-detail-header v1">
      <div className="container">
        <div className="info-detail-job">
          <h1 className="job-detail-title">Junior Graphic Designer (Web)</h1>
          <span className="featured">
            <i className="ti-crown"></i>
          </span>
          <div className="job-metas-detail">
            <div className="category-job">
              <div className="job-category with-icon">
                <i class="fa-solid fa-briefcase"></i>
                <a href="https://apusthemes.com/wp-demo/superio/job-category/design/">
                  Design
                </a>
                ,
                <a href="https://apusthemes.com/wp-demo/superio/job-category/development/">
                  Development
                </a>
              </div>
            </div>
            <div className="job-location">
              <i class="fa-solid fa-location-dot"></i>
              <a href="https://apusthemes.com/wp-demo/superio/job-location/new-york/">
                New York
              </a>
            </div>
            <div className="job-deadline with-icon">
              <i class="fa-regular fa-clock"></i> June 20, 2021
            </div>
            <div className="job-salary with-icon">
              <i class="fa-solid fa-money-bill"></i>
              <span className="suffix">$</span>
              <span className="price-text">150</span> -{' '}
              <span className="suffix">$</span>
              <span className="price-text">180</span> / week
            </div>
          </div>
          <div class="job-metas-detail-bottom">
            <div class="job-type with-title">
              <a
                class="type-job"
                href="https://apusthemes.com/wp-demo/superio/job-type/full-time/"
              >
                Full Time
              </a>
            </div>
            <span class="urgent">Urgent</span>
          </div>
        </div>
        <div class="job-detail-buttons col-md-4 col-sm-5 col-xs-12">
          <div class="action">
            <div class="deadline-time end">
              Application ends: <strong>May 18, 2026</strong>{' '}
            </div>
            <a
              class="btn btn-apply btn-applied-job-internal "
            >
              Applied
            </a>
            <a
              class="btn-follow btn-action-job btn-add-job-shortlist"
            >
              <i class="fa-regular fa-bookmark"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}