const config = {
    myABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "requiredAmount",
                    "type": "uint256"
                }
            ],
            "name": "createProject",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "uint256"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "donate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "pay",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getProjectIds",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "projectStatus",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    myContractAddress: "0x38c8f63f19d5387fc83cf3e31396bffc07e0748c"
};

const createProject = (owner, requiredAmount) => {
    let contract, web3js;
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        contract = web3js.eth.contract(config.myABI).at(config.myContractAddress);
    } else {}

    const gasLimit = 2000000;
    const gasPrice = web3js.toWei(150, 'gwei');
    console.log('here');
    contract.createProject.sendTransaction(
        owner,
        requiredAmount,
        {
            gas: gasLimit,
            gasPrice: web3js.toHex(gasPrice)
        },
        (err, res) => {
            if (!err) console.log('res', res);
            else console.log('error', err);
            return res;
        });
};

const onSubmit = () => {
    // const owner = document.getElementById("owner").value;
    const owner = "0xa6c1429c546d05994258bba4de91042e62996262";
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const funds = document.getElementById("funds").value;

    const obj = {owner, title, description, funds};

    if (validation(obj)) {
        createProject("0xa6c1429c546d05994258bba4de91042e62996262", funds);
        // window.location.href = 'index.html';
    }
};

const validation = obj => {
    if (obj.funds === '') {
    // if (obj.owner === '' || obj.title === '' || obj.description === '' || obj.funds === '') {
        alert("Please fill all fields!");
        return false;
    }
    return true;
};

const renderTemplate = () => {
    let project_template = document.querySelector(".project-template");
    project_template.innerHTML +=
        `<form action="#" id="form_id">
            <h1>Create project</h1>
            <div class="field">
                <label for="owner" class="label">Owner:</label>
                <input type="text" id="owner" name="ownerName" placeholder="Enter the owner name">
            </div>
            <div class="field">
                <label for="title" class="label">Title:</label>
                <input type="text" id="title" name="projectTitle" placeholder="Enter the project title">
            </div>
            <div class="field">
                <label for="description" class="label">Description:</label>
                <textarea id="description" rows="4" name="projectDescription" placeholder="Enter the project description"></textarea>
            </div>
            <div class="field">
                <label for="funds" class="label">Funds:</label>
                <input type="number" id="funds" name="projectFunds" placeholder="Enter required amount of money" />
            </div>
            <input id="submit-btn" class="project__button project__button_submit" type="button" value="Submit"/>
        </form>`;
    const submitButton = document.querySelector("#submit-btn");
    submitButton.addEventListener("click", onSubmit);

};

renderTemplate();
