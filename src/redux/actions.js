import axios from "axios";
export const JOB_START = "JOB_START";
export const JOB_END = "JOB_END";
export const JOB_SUCCESS = "JOB_SUCCESS";
export const JOB_FAILURE = "JOB_FAILURE";

const BASE_URL = "https://jobs.github.com/positions.json";

const jobStart = () => {
  return {
    type: JOB_START,
  };
};

const jobEnd = () => {
  return {
    type: JOB_END,
  };
};

const jobSuccess = data => {
  return {
    type: JOB_SUCCESS,
    payload:  data
  };
};

const jobFailure = data => {
  return {
    type: JOB_FAILURE,
    payload:  data
  };
};

export const requestJobs = (data = []) => {
  return dispatch => {
    dispatch(jobStart());
    const url = `${BASE_URL}?${data.join("&")}`;
    console.log(url);
    axios
      .get(url)
      .then(response =>{
        dispatch(jobEnd());
        dispatch(jobSuccess(response.data));
      } )
      .catch(error => dispatch(jobFailure({error: "something went wrong"})));

  };
};

