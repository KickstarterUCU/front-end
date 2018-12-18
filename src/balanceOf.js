export const balanceOf = (contract) => {
    contract.balanceOf.call("0x6e9b930326daf218db40a283e20fd03ff9558543", (err, res) => {
        if (!err) console.log(res.toNumber());
        return res;
    });
};