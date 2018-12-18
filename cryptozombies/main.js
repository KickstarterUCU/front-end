const myABI = [
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
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "BalanceUpdate",
        "type": "event"
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
    }
];
const myContractAddress = "0xb69196cd88ea487c8e3b7afcaa45bc8fb9d41fe5";

let myContract;
window.addEventListener('load', function () {

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        myContract = web3js.eth.contract(myABI).at(myContractAddress);
    } else {
        // Handle the case where the user doesn't have web3. Probably
        // show them a message telling them to install Metamask in
        // order to use our app.
        // For example
        // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    }

    // Now you can start your app & access web3js freely:
});


const sendTransaction = () => {
    const addr = '0xA6c1429C546D05994258bba4dE91042E62996262';
    const amount = 2;
    const amountToSend = web3js.toWei(amount, "ether");
    // const amountToSend = '200000000000';
    const gasLimit = 200000;
    const gasPrice = web3js.toWei(150, 'gwei');
    const to = '0x6e9b930326daf218db40a283e20fd03ff9558543';

    myContract.pay.sendTransaction(
        to,
        amountToSend,
        {
            from: addr,
            gas: gasLimit,
            gasPrice: web3js.toHex(gasPrice)
        },
        (err, res) => {
            if (!err) {
                console.log('res', res);
            }
            return res;
        });
};

const checkBalance = () => {
    myContract.balanceOf.call("0x6e9b930326daf218db40a283e20fd03ff9558543", (err, res) => {
        if (!err) console.log(res.toNumber());
        return res;
    });
};

document.getElementById("send-btn").addEventListener("click", sendTransaction);
document.getElementById("check-btn").addEventListener("click", checkBalance);

