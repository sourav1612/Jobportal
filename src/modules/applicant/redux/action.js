import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SAVE_JOB_REQUEST,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_ERROR,
  UNSAVE_JOB_REQUEST,
  UNSAVE_JOB_SUCCESS,
  UNSAVE_JOB_ERROR,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_ERROR,
  APPLY_JOB_REQUEST,
} from "./constants";

export const fetchUser = (payload) => ({
  type: FETCH_USER_REQUEST,
  payload,
});

export function fetchUserSuccess(payload) {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
}

export function saveJobRequest(payload) {
  // console.log("saved job request action", payload);
  return {
    type: SAVE_JOB_REQUEST,
    payload,
  };
}

export function saveJobSuccess(payload) {
  return {
    type: SAVE_JOB_SUCCESS,
    payload,
  };
}

export function unsaveJobRequest(payload) {
  // console.log("unsave job request action", payload);
  return {
    type: UNSAVE_JOB_REQUEST,
    payload,
  };
}

export function unsaveJobSuccess(payload) {
  // console.log("unsave job success action", payload);
  return {
    type: UNSAVE_JOB_SUCCESS,
    payload,
  };
}

export function saveJobError(payload) {
  return {
    type: SAVE_JOB_ERROR,
    payload,
  };
}

export function unsaveJobError(payload) {
  return {
    type: UNSAVE_JOB_ERROR,
    payload,
  };
}

export function applyJobRequest(payload) {
  // console.log("applyJobRequest", payload);
  return {
    type: APPLY_JOB_REQUEST,
    payload,
  };
}
export function applyJobSuccess(payload) {
  // console.log("applyJobSuccess", payload);
  return {
    type: APPLY_JOB_SUCCESS,
    payload,
  };
}

export function applyJobError(payload) {
  return {
    type: APPLY_JOB_ERROR,
    payload,
  };
}
