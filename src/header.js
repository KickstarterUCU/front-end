
export const renderHeader = (entryPoint) =>{
    entryPoint.innerHTML = header();
}

const header = () => {
    return `<header class="kickstarter-header">
                <a href="index.html" class="kickstarter-header__title"><h1 >UCUstarter</h1></a>
                <button id="add-btn" class="project__button project__button_add">Create project</button>
            </header>`
}