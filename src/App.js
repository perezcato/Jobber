import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {BounceLoader} from "react-spinners";

import HomeComponent from "./components/header";
import JobSearch from "./components/JobSearch";
import {JobList} from "./components/JobListing";
import {JobItem} from "./components/JobItem";
import {requestJobs} from "./redux/actions";

function App({jobs,requestState}) {
  return (
    <div className="bg-gray-300 h-screen overflow-scroll">
      <HomeComponent/>
      <div className="px-64 border-t-2 border-gray-400 overflow-scroll">
        <JobSearch/>
        <JobList>
            { requestState ? ( <div className="flex justify-center mt-3 mb-3">
                <BounceLoader color={"#3182CE"} loading={true} />
            </div>) : jobs.map((job) =>  <JobItem data={job} key={job.id} />) }

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
