const { ethers } = require ("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts", [0x1C574805D8ed0066db6E6aD65c084991f8474838]);

const signer = provider.getSigner()

