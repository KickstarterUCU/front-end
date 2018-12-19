export const sendTransaction = (contract, web3js) => {
    const amountToSend = 100;
    const gasLimit = 200000;
    const gasPrice = web3js.toWei(150, 'gwei');
    const to = 1;

    contract.donate.sendTransaction(
        to,
        amountToSend,
        {
            gas: gasLimit,
            gasPrice: web3js.toHex(gasPrice)
        },
        (err, res) => {
            if (!err)
                console.log('res', res);
            return res;
        });
};

