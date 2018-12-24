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
        }
    });

    document.getElementById("add-btn").addEventListener("click", () => window.location.href = 'project.html');
};







