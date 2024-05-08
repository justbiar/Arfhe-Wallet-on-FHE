// En son blok numarasını verecektir
const Web3 = require('web3');
const infuraUrl = '';
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraUrl));

web3.eth.getBlockNumber().then(console.log).catch(console.error);
