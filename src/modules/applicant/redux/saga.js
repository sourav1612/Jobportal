import { SAVE_JOB_REQUEST } from "./constants";
import { UNSAVE_JOB_REQUEST } from "./constants";
import { APPLY_JOB_REQUEST } from "./constants";

import { put, takeEvery } from "@redux-saga/core/effects";
import { saveJobSuccess, unsaveJobSuccess, applyJobSuccess } from "./action";

function* saveJobsSaga({ payload, type }) {
  console.log("SAVE_JOB_REQUEST saga", payload);
  yield put(saveJobSuccess(payload));
}

function* unsaveJobsSaga({ payload, type }) {
  console.log("UNSAVE_JOB_REQUEST saga", payload);
  yield put(unsaveJobSuccess(payload));
}

function* applyJobsSaga({ payload, type }) {
  console.log("APPLY_JOB_REQUEST saga", payload);
  yield put(applyJobSuccess(payload));
}

export default [
  takeEvery(SAVE_JOB_REQUEST, saveJobsSaga),
  takeEvery(UNSAVE_JOB_REQUEST, unsaveJobsSaga),
  takeEvery(APPLY_JOB_REQUEST, applyJobsSaga),
];
