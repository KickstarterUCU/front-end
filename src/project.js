import config from "./config";
import {createProject} from "./projectOperator";

const submitButton = document.getElementById("submit-btn");
let contract, web3js;

window.addEventListener('load', () => {

    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        contract = web3js.eth.contract(config.myABI).at(config.myContractAddress);
    } else {
    } // Handle the case where the user doesn't have web3. No MetaMask
});

const onSubmit = () => {
    const owner = document.getElementById("owner").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const funds = document.getElementById("funds").value;

    const obj = {owner, title, description, funds};


    if (validation(obj)) {
        createProject(contract, web3js, owner, funds);
    }
    else alert("Please fill all fields!");

};


const validation = obj => (
    obj.owner !== '' &&
    obj.title !== '' &&
    obj.description !== '' &&
    obj.funds !== '');


submitButton.addEventListener("click", onSubmit);