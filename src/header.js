export const renderHeader = () =>{
    document.body.innerHTML = header() + document.body.innerHTML;
}

const header = () => {
    return `<header class="kickstarter-header">
                <h1 class="kickstarter-header__title">Kickstarter</h1>
                <button id="add-btn" class="project__button project__button_add">Create project</button>
            </header>`
}