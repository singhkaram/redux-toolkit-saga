import { all } from "redux-saga/effects";
import mySaga from "../Components/Saga";

export default function* rootSaga() {
  yield all([mySaga]);
}
