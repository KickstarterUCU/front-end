export const projectStatus = (contract, id, entryPoint) => {
    contract.projectStatus.call(id, (err, res) => {
        if (!err) {
            renderProject({
                address: res[0],
                gatheredAmount: res[1].toNumber(),
                requiredAmount: res[2].toNumber()
            });
        }
    });


    const renderProject = (res) => {
        console.log(res);
        let all_projects = entryPoint.querySelector(".all_projects");
        all_projects.innerHTML += "<div class='project'>" +
            "<h2 class='project__owner'>" + res['address'] + "</h2>" +
            "<img class='project__img' src='https://cdn-images-1.medium.com/max/1131/1*9Bz1AgYPjC5snJb4395rGw.jpeg'>" +
            "<p class='project__gathered'>Gathered amount: " + res['gatheredAmount'] + "</p>" +
            "<p class='project__required'>Required amount: " + res['requiredAmount'] + "</p></div>";
    }
};