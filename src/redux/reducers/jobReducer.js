import {
  DELETE_JOB_FAILURE,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  GET_JOB_DETAILS_FAILURE,
  GET_JOB_DETAILS_REQUEST,
  GET_JOB_DETAILS_RESET,
  GET_JOB_DETAILS_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_RESET,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_RESET,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_RESET,
  REGISTER_JOB_SUCCESS,
} from "../constants/jobconstant";

export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_LOAD_REQUEST:
      return { loading: true };
    case JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs,
      };
    case JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOB_LOAD_RESET:
      return {};
    case GET_JOB_DETAILS_REQUEST:
      return { loading: true };

    case GET_JOB_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        job: action.payload,
      };

    case GET_JOB_DETAILS_FAILURE:
      return { loading: false, error: action.payload };

    case GET_JOB_DETAILS_RESET:
      return {};

    case DELETE_JOB_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: state.jobs.filter((job) => job._id !== action.payload.jobId),
      };

    case DELETE_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// single job reducer
export const loadJobSingleReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case JOB_LOAD_SINGLE_REQUEST:
      return { loading: true };
    case JOB_LOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      };
    case JOB_LOAD_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    case JOB_LOAD_SINGLE_RESET:
      return {};
    default:
      return state;
  }
};

//Registred job;
export const registerAjobReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_JOB_REQUEST:
      return { loading: true };
    case REGISTER_JOB_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case REGISTER_JOB_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_JOB_RESET:
      return {};
    default:
      return state;
  }
};
