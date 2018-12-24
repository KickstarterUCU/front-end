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
    const owner = document.getElementById("owner");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const funds = document.getElementById("funds");


    const obj = {owner, title, description, funds};
    const obj_values = Object.values(obj).map((el) => el.value);


    if (validation(...obj_values)) {
        createProject(contract, web3js, owner.value, funds.value);
        Object.values(obj).map((el) => el.value = "");
        alert("Project is being created!");
    }

    else alert("Please fill all fields!");


};


const validation = (owner, title, description, funds) => (
    owner !== '' &&
    title !== '' &&
    description !== '' &&
    funds !== '');


submitButton.addEventListener("click", onSubmit);