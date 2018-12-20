export const createProject = (contract, web3js, owner, requiredAmount) => {
    const gasLimit = 2000000;
    const gasPrice = web3js.toWei(150, 'gwei');
    console.log(owner, requiredAmount);
    contract.createProject.sendTransaction(
        owner,
        requiredAmount,
        {
            gas: gasLimit,
            gasPrice: web3js.toHex(gasPrice)
        },
        (err, res) => {
            if (!err) console.log('res', res);
            return res;
        });
};

