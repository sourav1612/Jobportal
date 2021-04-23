import produce from "immer";
import { map, clone } from "ramda";

import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  message: "",
  user: {},
  savedJobs: [],
  appliedJobs: [],
};

function applicantReducer(
  state = clone(initialState),
  { type, payload, error }
) {
  return produce(state, (draft) => {
    switch (type) {
      case actionTypes.SAVE_JOB_REQUEST: {
        console.log("SAVE_JOB_REQUEST reducer", payload);
        draft.loading = true;
        draft.error = false;
        break;
      }

      case actionTypes.SAVE_JOB_SUCCESS: {
        console.log("user reucer saved job success", payload);
        draft.loading = false;
        draft.error = false;
        draft.savedJobs = [...state.savedJobs, payload];
        break;
      }
      case actionTypes.UNSAVE_JOB_REQUEST: {
        console.log("UNSAVE_JOB_REQUEST reducer", payload);
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.UNSAVE_JOB_SUCCESS: {
        console.log("user reucer unsaved job success", payload);
        draft.loading = false;
        draft.error = false;
        draft.savedJobs = [...state.savedJobs].filter((id) => id != payload);
        break;
      }
      case actionTypes.SAVE_JOB_ERROR: {
        draft.loading = false;
        draft.error = error;
        break;
      }
      case actionTypes.UNSAVE_JOB_ERROR: {
        draft.loading = false;
        draft.error = error;
        break;
      }

      case actionTypes.APPLY_JOB_REQUEST: {
        console.log("APPLY_JOB_REQUEST reducer", payload);
        draft.loading = true;
        draft.error = false;
        break;
      }

      case actionTypes.APPLY_JOB_SUCCESS: {
        console.log("user reucer apply job success", payload);
        draft.loading = false;
        draft.error = false;
        draft.appliedJobs = [...state.appliedJobs, payload];
        break;
      }
      case actionTypes.APPLY_JOB_ERROR: {
        draft.loading = false;
        draft.error = error;
        break;
      }
    }
  });
}

export default applicantReducer;
