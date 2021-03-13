import {
  ADD_PORTIS_WALLET,
  ADD_METAMASK_WALLET,
} from '../constants/Blockchain';

export const addPortisWallet = () => {
  return {
    type: ADD_PORTIS_WALLET,
  }
};

export const addMetamaskWallet = () => {
  return {
    type: ADD_METAMASK_WALLET,
  }
};






