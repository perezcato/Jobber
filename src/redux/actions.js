import axios from "axios";
export const JOB_START = "JOB_START";
export const JOB_END = "JOB_END";
export const JOB_SUCCESS = "JOB_SUCCESS";
export const JOB_FAILURE = "JOB_FAILURE";

let BASE_URL = "https://jobs.github.com/positions.json";

const jobStart = () => {
  return {
    type: JOB_START,
    payload: { request: true }
  };
};

const jobEnd = () => {
  return {
    type: JOB_END,
    payload: { request: false }
  };
};

const jobSuccess = data => {
  return {
    type: JOB_SUCCESS,
    payload: { data }
  };
};

const jobFailure = data => {
  return {
    type: JOB_FAILURE,
    payload: { data }
  };
};

export const requestJobs = data => {
  return dispatch => {
    dispatch(jobStart());
    if (data.jobDescription && data.location) {
      BASE_URL = `${BASE_URL}?description=${data.jobDescription}&location=${data.location}`;
    }
    axios
      .get(BASE_URL)
      .then(response => dispatch(jobSuccess(response.data)))
      .catch(error => dispatch(jobFailure({error: "something went wrong"})));
    dispatch(jobEnd());
  };
};
