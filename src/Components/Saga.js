import { call, put, takeEvery } from "redux-saga/effects";

function* fetchUser(action) {
  try {
    const user = yield call("", action);
    yield put({ type: "USER_FETCH_SUCCEEDED", user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
