import {combineReducers} from "redux";
import {JOB_START, JOB_FAILURE, JOB_SUCCESS, JOB_END} from "./actions";

const jobReducer = (jobs = [], action) => {
    switch (action.type) {
        case JOB_SUCCESS:
            return [...jobs,action.payload];
        case JOB_FAILURE:
            return [...jobs,action.payload];
        default:
            return jobs;
    }
};

const jobRequest = (request = false, action) => {
    switch (action.type) {
        case JOB_START:
            return action.payload;
        case JOB_END:
            return action.payload;
        default:
            return request;
    }
};

export default combineReducers({
    jobs: jobReducer,
    jobRequest
});
