// En son blok numarasını verecektir
const Web3 = require('web3');
const infuraUrl = 'https://sepolia.infura.io/v3/0644d4d0541440a392fa8a067f54afb1D';
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraUrl));

web3.eth.getBlockNumber().then(console.log).catch(console.error);
