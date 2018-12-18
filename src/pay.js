export const sendTransaction = (contract, web3js) => {
    const addr = '0xA6c1429C546D05994258bba4dE91042E62996262';
    const amountToSend = 200;
    const gasLimit = 200000;
    const gasPrice = web3js.toWei(150, 'gwei');
    const to = '0x6e9b930326daf218db40a283e20fd03ff9558543';

    contract.pay.sendTransaction(
        to,
        amountToSend,
        {
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

