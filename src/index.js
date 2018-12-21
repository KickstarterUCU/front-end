import config from "./config";
import {projectStatus} from "./projectStatus";
import {donate} from "./pay";

window.addEventListener('load', () => {
    let contract, web3js;
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        contract = web3js.eth.contract(config.myABI).at(config.myContractAddress);
    } else {
    } // Handle the case where the user doesn't have web3. No MetaMask
    main(contract, web3js);
});

const main = (contract, web3js) => {
    const ids = [1, 1, 1];
    const entryPoint = document.getElementById("main");
    ids.map((id) => projectStatus(contract, id, entryPoint));
    document.getElementById("send-btn").addEventListener("click", donate.bind(this, contract, web3js, ids[0]));
    document.getElementById("add-btn").addEventListener("click", () => window.location.href = 'newProject.html');


};







