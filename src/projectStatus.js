export const projectStatus = (contract, id, entryPoint) => {
    contract.projectStatus.call(id, (err, res) => {
        if (!err) renderProjectStatus(res);
    });


    const renderProjectStatus = (res) => {
        console.log(res);
        console.log(entryPoint);
    }

};