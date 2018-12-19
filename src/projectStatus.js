export const projectStatus = (contract, id, entryPoint) => {
    contract.projectStatus.call(id, (err, res) => {
        if (!err) {
            renderProjectStatus({
                address: res[0],
                gatheredAmount: res[1].toNumber(),
                requiredAmount: res[2].toNumber()
            });
        }
    });


    const renderProjectStatus = (res) => {
        console.log(res);
        console.log(entryPoint);
    }

};