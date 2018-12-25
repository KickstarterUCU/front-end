import config from "./config";
import {renderHeader} from "./header";


const addressElement = document.getElementById("address");
const balanceElement = document.getElementById("balance");


let contract, web3js;
window.addEventListener('load', () => {
    renderHeader();
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        contract = web3js.eth.contract(config.myABI).at(config.myContractAddress);
    } else {
    } // Handle the case where the user doesn't have web3. No MetaMask
});

const fetchBalance = (contract, address) =>
    new Promise((res, rej) =>
        contract.balanceOf.call(address, (err, r) =>
            err ? rej(err) : res(r.toNumber())));

const main = async (contract, addressElement) => {
    const balance = await fetchBalance(contract, addressElement.value);
    balanceElement.innerHTML = balance;
    console.log(balance);
};

document.body.addEventListener("keypress", (ev) => {
    if (ev.charCode === 13) main.bind(this, contract, addressElement)();
});
