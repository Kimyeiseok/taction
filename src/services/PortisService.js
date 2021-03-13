import Web3 from 'web3'
import Portis from '@portis/web3';


const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'mainnet');
//Bill's Portis
//const portis = new Portis("ad10990f-ac51-430e-a0a4-95f5cc49ccd5", "mainnet");

const web3 = new Web3(portis.provider);