import {donate} from './donate';

export const fetchProjectIds = (contract) =>
    new Promise((res, rej) =>
        contract.getProjectIds.call((err, r) =>
            err ? rej(err) : res(r.toNumber())));


export const fetchProjectStatus = (contract, id) =>
    new Promise((res, rej) =>
        contract.projectStatus.call(id, (err, r) =>
            err ? rej(err) : res({
                address: r[0],
                gatheredAmount: r[1].toNumber(),
                requiredAmount: r[2].toNumber(),
                active: r[3],
                projectId: id,
            })
        )
    );

export const createProject = (contract, web3js, owner, requiredAmount) => {
    const gasLimit = 2000000;
    const gasPrice = web3js.toWei(150, 'gwei');
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


export const renderProject = (contract, web3js, res, entryPoint) => {
    const {address, gatheredAmount, requiredAmount, active, projectId} = res;
    let all_projects = entryPoint.querySelector(".all-projects");
    const projectImg = 'https://ww2.kqed.org/wp-content/uploads/sites/23/2015/11/PBL-1920x1179.jpg';

    const buttonDonate = document.createElement('button');
    buttonDonate.innerHTML = 'Donate';
    buttonDonate.setAttribute('class','project__button project__button_donate');
    buttonDonate.addEventListener('click', donate.bind(this, contract, web3js, projectId));

    const projectButtons = document.createElement('div');
    projectButtons.setAttribute('class', 'project__buttons');
    projectButtons.innerHTML = `<button class="project__button">View more</button>`;
    projectButtons.appendChild(buttonDonate);

    const project = document.createElement('div');
    project.setAttribute("class", "project");
    project.innerHTML = `
                <div style="background: url(${projectImg}) no-repeat;
                            background-size: cover;
                            height: 200px;
                            background-position: center;">
                </div>
                <h1 class="project_earned">MONEY EARNED</h1>
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
                </section>`;
    project.appendChild(projectButtons);
    all_projects.appendChild(project);
    if(!active){
        let activeProject = document.querySelectorAll(".project_earned");
        activeProject[activeProject.length-1].style.visibility = 'initial';
        let activeProjectInfo = document.querySelectorAll(".project__info");
        activeProjectInfo[activeProjectInfo.length-1].style.opacity = 0.1;
        let activeDonation = document.querySelectorAll(".project__button_donate");
        activeDonation[activeDonation.length-1].style.display = 'none';
    }

};