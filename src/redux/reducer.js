import {combineReducers} from "redux";
import {JOB_START, JOB_FAILURE, JOB_SUCCESS, JOB_END} from "./actions";

const jobReducer = (jobs = [], action) => {
    switch (action.type) {
        case JOB_SUCCESS:
            return action.payload;
        case JOB_FAILURE:
            return action.payload;
        default:
            return jobs;
    }
};

const jobRequest = (requestObj = { requestState: false}, action) => {
    switch (action.type) {
        case JOB_START:
            return true;
        case JOB_END:
            return false;
        default:
            return requestObj;
    }
};

export default combineReducers({
    jobs: jobReducer,
    jobRequest
});
