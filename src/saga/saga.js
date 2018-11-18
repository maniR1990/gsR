import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("INCREMENT", ageUpAsync);
}