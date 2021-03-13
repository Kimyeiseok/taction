import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Blockchain from './Blockchain';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
	Blockchain(),
  ]);
}
