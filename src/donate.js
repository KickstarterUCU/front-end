export const donate = (contract, web3js, id) => {
    const amountToSend = 100;
    const gasLimit = 200000;
    const gasPrice = web3js.toWei(150, 'gwei');

    contract.donate.sendTransaction(
        id,
        amountToSend,
        {
            gas: gasLimit,
            gasPrice: web3js.toHex(gasPrice)
        },
        (err, res) => {
            if (!err) console.log('res', res);
            return res;
        });
};

