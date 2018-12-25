export const renderHeader = () =>{
    document.body.innerHTML = header() + document.body.innerHTML;
}

const header = () => {
    return `<header class="kickstarter-header">
                <a href="index.html" class="kickstarter-header__title"><h1 >Kickstarter</h1></a>
                <button id="add-btn" class="project__button project__button_add">Create project</button>
            </header>`
}