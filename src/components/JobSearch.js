import React, { useState } from "react";
import { connect } from "react-redux";
import { requestJobs } from "../redux/actions";

const JobSearch = ({ submit }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fto, setFto] = useState(false);

  const submitForm = e => {
    e.preventDefault();
    const formData = [];
    if (jobDescription.trim()) {
      formData.push(
        `description=${jobDescription}`
          .toLocaleLowerCase()
          .split(" ")
          .join("+")
      );
    }
    if (location.trim()) {
      formData.push(
        `location=${location}`
          .toLocaleLowerCase()
          .split(" ")
          .join("+")
      );
    }
    if(fto){
      formData.push('full_time=true');
    }
    submit(formData);
    setLocation("");
    setJobDescription("");
  };

  return (
    <div className="py-3">
      <form onSubmit={submitForm} className="w-full flex items-end">
        <div className="mr-6 w-2/6">
          <label className="text-gray-900 text-xs font-bold" htmlFor="jd">
            Job Description
          </label>
          <input
            className="block bg-white border border-blue-700
              mt-1 shadow-outline w-full text-xs py-1 px-2"
            id="location"
            type="text"
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            placeholder="filter by title, benefits, companies or expertise"
          />
        </div>
        <div className="mr-6 w-2/6">
          <label className="text-gray-900 text-xs font-bold" htmlFor="location">
            Location
          </label>
          <input
            className="block border bg-white border-blue-700
               shadow-outline mt-1 w-full text-xs py-1 px-2"
            id="location"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="filter by city, state, zip-code or country"
          />
        </div>
        <div className="mr-6 w-1/6">
          <input
            id="fto"
            defaultChecked={fto}
            onChange={e => setFto(!fto)}
            type="checkbox"
          />
          <label htmlFor="fto" className="text-xs font-bold ml-1">
            Full Time Only
          </label>
        </div>
        <button className="px-5 py-1 bg-blue-600 text-gray-100 focus:outline-none">
          search
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    submit: data => dispatch(requestJobs(data))
  };
};

export default connect(null, mapDispatchToProps)(JobSearch);
