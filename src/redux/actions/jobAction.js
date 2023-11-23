import axios from "axios";
import { toast } from "react-toastify";
import {
  DELETE_JOB_FAILURE,
  DELETE_JOB_SUCCESS,
  GET_JOB_DETAILS_FAILURE,
  GET_JOB_DETAILS_REQUEST,
  GET_JOB_DETAILS_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_SUCCESS,
} from "../constants/jobconstant";

export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
      const { data } = await axios.get(
        `/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );
      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

export const getJobDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_JOB_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/jobs/${id}`);

    dispatch({
      type: GET_JOB_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_JOB_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// register job action
export const registerAjobAction = (job) => async (dispatch) => {
  dispatch({ type: REGISTER_JOB_REQUEST });

  try {
    const { data } = await axios.post("/api/job/create", job);
    dispatch({
      type: REGISTER_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job created successfully");
  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

export const deleteJobAction = (jobId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_JOB_SUCCESS,
        payload: { jobId },
      });
    } catch (error) {
      // Dispatch a failure action if deletion fails
      dispatch({
        type: DELETE_JOB_FAILURE,
        payload: { error },
      });
    }
  };
};
