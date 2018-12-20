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
        const projectImg = 'https://ww2.kqed.org/wp-content/uploads/sites/23/2015/11/PBL-1920x1179.jpg';
        all_projects.innerHTML +=
            `<div class='project'>
                <div style="background: url(${projectImg}) no-repeat;
                            background-size: cover;
                            height: 200px;
                            background-position: center;">
                </div>
                <section class="project__info">
                    <h1 class="project__title">Title</h1 class="project__title">
                    <div class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <div class="project__money_required">
                        <span class="project__money-info">Required:</span>
                        <span>${res['requiredAmount']}</span>
                    </div>
                    <div class="project__money_earned">
                        <span class="project__money-info">Earned:</span>
                        <span>${res['gatheredAmount']}</span>
                    </div>
                </section>
                <div class="project__buttons">
                    <button class="project__button">View details</button>
                    <button class="project__button">Donate</button>
                </div>
            </div>`;
    }
};