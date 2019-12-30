import React from 'react';
import {connect} from "react-redux";

import {HomeComponent} from "./components/header";
import JobSearch from "./components/JobSearch";
import {JobList} from "./components/JobListing";
import {JobItem} from "./components/JobItem";

function App({jobs,requestState}) {

  return (
    <div className="bg-gray-300 h-screen overflow-scroll">
      <HomeComponent/>
      <div className="px-64 border-t-2 border-gray-400 overflow-scroll">
        <JobSearch/>
        <JobList>
            {jobs.map((job) => job.data.map(data => <JobItem data={data} key={data.id} />))}
        </JobList>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        requestState: state.jobRequest
    }
};

export default connect(mapStateToProps)(App);
