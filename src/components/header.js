import React from "react";
import { connect } from "react-redux";
import { requestJobs } from "../redux/actions";

const HomeComponent = ({allJobs}) => {
  return (
    <header className="w-full border-t-4 border-blue-800 bg-blue-600 px-64 py-2">
      <div className="font-bold text-center text-xl text-gray-100 tracking-wide">
        <a href="/">Jobber</a>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        allJobs: () => dispatch(requestJobs(["page=1"]))
    }
};

export default connect(null,mapDispatchToProps)(HomeComponent);
