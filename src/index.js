import config from "./config";
import {fetchProjectStatus, renderProject, fetchProjectIds} from "./projectOperator";
import {renderHeader} from "./header";

window.addEventListener('load', () => {
    renderHeader(document.getElementById("header"));
    let contract, web3js;
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        contract = web3js.eth.contract(config.myABI).at(config.myContractAddress);
    } else {
    } // Handle the case where the user doesn't have web3. No MetaMask
    main(contract, web3js);
});


const main = async (contract, web3js) => {
    const entryPoint = document.getElementById("main");

    const id = await fetchProjectIds(contract);
    const ids = new Array(id).fill(0).map((_, i) => i);

    const projects = await Promise.all(ids.map((id) => fetchProjectStatus(contract, id)));

    projects.map((el) => renderProject(contract, web3js, el, entryPoint));

    document.getElementById("add-btn").addEventListener("click", () => window.location.href = 'project.html');
};







