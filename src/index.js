import config from "./config";
import {projectStatus} from "./projectStatus";
import {donate} from "./donate";
import {createProject} from "./createProject";

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
    const entryPoint = document.getElementById("main");

    let ids;

    contract.getProjectIds.call((err, res) => {
        if (!err) {
            ids = new Array(res.toNumber()).fill(0).map((_, i) => i);
            ids.map((id) => projectStatus(contract, id, entryPoint, web3js));
            document.getElementById("send-btn").addEventListener("click", donate.bind(this, contract, web3js, ids[0]));
        }
    });

    document.getElementById("create-btn").addEventListener("click", createProject.bind(this, contract, web3js, "0xa6c1429c546d05994258bba4de91042e62996262", 350));
    document.getElementById("add-btn").addEventListener("click", () => window.location.href = 'newProject.html');
};







