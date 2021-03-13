import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {    
	ADD_PORTIS_WALLET, ADD_METAMASK_WALLET
} from '../constants/Blockchain';
import {
	addPortisWallet, addMetamaskWallet
} from "../actions/Blockchain";

import FirebaseService from 'services/FirebaseService'

export function* registerPortisWallet() {
  yield takeEvery(ADD_PORTIS_WALLET, function* () {
   			console.log('Portis')
	});
}

export function* registerMetamaskWallet() {
  yield takeEvery(ADD_METAMASK_WALLET, function* () {
   			console.log('Matamask')
	});
}


export default function* rootSaga() {
  yield all([
		fork(registerPortisWallet),	
	  fork(registerMetamaskWallet),	
  ]);
}
