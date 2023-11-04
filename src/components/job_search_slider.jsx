import React, { Component } from 'react';
import './job_search_slider.css';
import Card from './job_cards';
import { useState } from 'react';
import Pagination from './pagination';


class JobSearchSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distance: 50, // Initial value for distance
            textDistance: '50 miles', // Initial text value
            filterTitle: '',
            filterLocation: '',
            filterCategory: '',
            filterType: '',
            filterDatePosted: 'all',
            filterExperience: [],
            filterCareerLevel: [],
            filterSalaryFrom: 0,
            filterSalaryTo: 850,
            sortBy: 'default', // Default sorting option
            itemsPerPage: 12, // Default items per page
            showSidebar: true
        };
    }
    toggleSidebar = () => {
        this.setState((prevState) => ({
            showSidebar: !prevState.showSidebar,
        }));
    };
    handleSortByChange = (e) => {
        this.setState({ sortBy: e.target.value }, () => {
            // Call a function to handle sorting
            this.props.onSortChange(this.state.sortBy);
        });
    };

    handleItemsPerPageChange = (e) => {
        this.setState({ itemsPerPage: parseInt(e.target.value, 10) }, () => {
            // Call a function to handle items per page change
            this.props.onItemsPerPageChange(this.state.itemsPerPage);
        });
    };


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedValues = [...this.state[name]];

        if (checked) {
            updatedValues.push(e.target.value);
        } else {
            updatedValues = updatedValues.filter((value) => value !== e.target.value);
        }

        this.setState({
            [name]: updatedValues,
        });
    };

    handleSliderChange = (e) => {
        const newSalaryFrom = parseInt(e.target.value);
        const newSalaryTo = newSalaryFrom + 10; // Adjust this step value as needed

        this.setState({
            filterSalaryFrom: newSalaryFrom,
            filterSalaryTo: newSalaryTo,
        });
    };

    handleDistanceChange = (e) => {
        const newDistance = e.target.value;
        this.setState({
            distance: newDistance,
            textDistance: `${newDistance} miles`,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your search logic here
    };


    render() {
        return (
            <>
                <div className='maincontainer'>
                    <div className="sidebar-wrapper col-md-4 col-sm-12 col-xs-12">
                        {/* {this.state.showSidebar && ( */}
                            <aside className="sidebar sidebar-left" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">
                                <form action="" className="form-search filter-listing-form-wrapper" method="GET" onSubmit={this.handleSubmit}>
                                    {/* Search by Keywords */}
                                    <div className="form-group form-group-title">
                                        <label htmlFor="filterTitle" className="heading-label">
                                            Search by Keywords
                                        </label>
                                        <div className="form-group-inner inner has-icon">
                                            <i className="flaticon-magnifying-glass"></i>
                                            <input
                                                type="text"
                                                name="filterTitle"
                                                className="form-control"
                                                value={this.state.filterTitle}
                                                onChange={this.handleInputChange}
                                                id="filterTitle"
                                                placeholder="Job title, keywords..."
                                            />
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="form-group form-group-center-location">
                                        <label htmlFor="filterLocation" className="heading-label">
                                            Location
                                        </label>
                                        <div className="form-group-inner inner has-icon">
                                            <i className="flaticon-location"></i>
                                            <input
                                                type="text"
                                                name="filterLocation"
                                                className="form-control"
                                                value={this.state.filterLocation}
                                                onChange={this.handleInputChange}
                                                id="filterLocation"
                                                placeholder="City or postcode"
                                                autoComplete="off"
                                            />
                                            <div className="leaflet-geocode-container"></div>
                                            <span className="find-me"></span>
                                            <span className="clear-location hidden">
                                                <i className="ti-close"></i>
                                            </span>
                                        </div>
                                        <input type="hidden" name="filter-center-latitude" value="" />
                                        <input type="hidden" name="filter-center-longitude" value="" />
                                    </div>

                                    {/* Radius */}
                                    <div className="form-group form-group-distance">
                                        <div className="form-group-inner inner">
                                            <div className="search_distance_wrapper clearfix">
                                                <label htmlFor="customRange" className="form-label">
                                                    Radius
                                                </label>
                                                <input
                                                    type="range"
                                                    className="form-range custom-range"
                                                    id="customRange"
                                                    min="0"
                                                    max="100"
                                                    step="1"
                                                    value={this.state.distance}
                                                    onChange={this.handleDistanceChange}
                                                />
                                                <output className="text-distance">{this.state.textDistance}</output>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Category */}
                                    <div className="form-group form-group-category tax-select-field">
                                        <label htmlFor="filterCategory" className="heading-label">
                                            Category
                                        </label>
                                        <div className="form-group-inner inner has-icon">
                                            <i className="flaticon-briefcase-1"></i>
                                            <select
                                                name="filterCategory"
                                                className="form-control select2-hidden-accessible"
                                                id="filterCategory"
                                                value={this.state.filterCategory}
                                                onChange={this.handleInputChange}
                                                data-placeholder="Choose a category…"
                                                tabIndex="-1"
                                                aria-hidden="true"
                                            >
                                                <option value="">Choose a category…</option>
                                                <option className="level-0" value="44">
                                                    Accounting / Finance
                                                </option>
                                                {/* Add more options */}
                                            </select>
                                            {/* Select styling */}
                                        </div>
                                    </div>

                                    {/* Job Type */}
                                    <div className="form-group form-group-type tax-select-field">
                                        <label htmlFor="filterType" className="heading-label">
                                            Job type
                                        </label>
                                        <div className="form-group-inner inner">
                                            <select
                                                name="filterType"
                                                className="form-control select2-hidden-accessible"
                                                id="filterType"
                                                value={this.state.filterType}
                                                onChange={this.handleInputChange}
                                                data-placeholder="Job type"
                                                tabIndex="-1"
                                                aria-hidden="true"
                                            >
                                                <option value="">Job type</option>
                                                {/* Add more options */}
                                            </select>
                                            {/* Select styling */}
                                        </div>
                                    </div>

                                    {/* Date Posted */}
                                    <div className="form-group form-group-date-posted">
                                        <label className="heading-label">Date Posted</label>
                                        <div className="form-group-inner">
                                            {/* Radio buttons */}
                                            <ul className="terms-list circle-check">
                                                <li className="list-item">
                                                    <input
                                                        id="filter-date-posted-last-hour"
                                                        type="radio"
                                                        name="filterDatePosted"
                                                        value="1hour"
                                                        checked={this.state.filterDatePosted === '1hour'}
                                                        onChange={this.handleInputChange}
                                                    />
                                                    <label htmlFor="filter-date-posted-last-hour">Last Hour</label>
                                                </li>
                                                {/* Add more options */}
                                            </ul>
                                            <a className="toggle-filter-list" href="javascript:void(0);">
                                                <span className="icon-more">
                                                    <i className="ti-plus"></i>
                                                </span>
                                                <span className="text">Show More</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Experience Level */}
                                    <div className="form-group form-group-5 Year">
                                        <label className="heading-label">Experience Level</label>
                                        <div className="form-group-inner">
                                            {/* Checkbox options */}
                                            <ul className="terms-list circle-check">
                                                <li className="list-item">
                                                    <input
                                                        id="filter-experience-fresh"
                                                        type="checkbox"
                                                        name="filterExperience"
                                                        value="Fresh"
                                                        checked={this.state.filterExperience.includes('Fresh')}
                                                        onChange={this.handleCheckboxChange}
                                                    />
                                                    <label htmlFor="filter-experience-fresh">Fresh</label>
                                                </li>
                                                {/* Add more options */}
                                            </ul>
                                            <a className="toggle-filter-list" href="javascript:void(0);">
                                                <span className="icon-more">
                                                    <i className="ti-plus"></i>
                                                </span>
                                                <span className="text">Show More</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Career Level */}
                                    <div className="form-group form-group-Others">
                                        <label className="heading-label">Career Level</label>
                                        <div className="form-group-inner">
                                            {/* Checkbox options */}
                                            <ul className="terms-list circle-check">
                                                <li className="list-item">
                                                    <input
                                                        id="filter-career_level-manager"
                                                        type="checkbox"
                                                        name="filterCareerLevel"
                                                        value="Manager"
                                                        checked={this.state.filterCareerLevel.includes('Manager')}
                                                        onChange={this.handleCheckboxChange}
                                                    />
                                                    <label htmlFor="filter-career_level-manager">Manager</label>
                                                </li>
                                                {/* Add more options */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix form-group form-group-salary">
                                        <label htmlFor="filterSalary" className="heading-label">
                                            Salary Range
                                        </label>
                                        <div className="form-group-inner">
                                            <div className="from-to-wrapper">
                                                <span className="inner">
                                                    <span className="from-text">
                                                        <span className="suffix">$</span>
                                                        <span className="price-text">{this.state.filterSalaryFrom}</span>
                                                    </span>
                                                    <span className="space">-</span>
                                                    <span className="to-text">
                                                        <span className="suffix">$</span>
                                                        <span className="price-text">{this.state.filterSalaryTo}</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <input
                                                type="range"
                                                className="form-range custom-range"
                                                id="customRange"
                                                min="0"
                                                max="850" // Adjust the max value as needed
                                                step="10" // Adjust the step size as needed
                                                value={this.state.filterSalaryFrom}
                                                onChange={this.handleSliderChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="wrapper-submit flex-middle col-xs-12 col-md-12">
                                            <button className="btn-submit btn btn-theme btn-inverse" type="submit">
                                                Find Jobs
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </aside>
                        {/* )} */}
                    </div>
                    <div className='list'>
                        <div className='heading'>
                            {/* <div className="menu-button" onClick={this.toggleSidebar}>
                                {this.state.showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
                            </div> */}
                            <h4 className='h4'>Showing 1 – 10 of 15 results</h4>
                            <div className="option-menu">
                                <select
                                    value={this.state.sortBy}
                                    onChange={this.handleSortByChange}
                                    className="option-select"
                                >
                                    <option value="default">Sort by Default</option>
                                    <option value="name">Sort by Name</option>
                                    {/* Add more sorting options as needed */}
                                </select>
                                <select
                                    value={this.state.itemsPerPage}
                                    onChange={this.handleItemsPerPageChange}
                                    className="option-select"
                                >
                                    <option value={12}>12 per page</option>
                                    <option value={24}>24 per page</option>
                                    <option value={36}>36 per page</option>
                                    {/* Add more items per page options as needed */}
                                </select>
                            </div>
                        </div>
                        <Card />
                        <Pagination />
                    </div>
                </div>

            </>
        );
    }
}

export default JobSearchSidebar;
