
export const renderHeader = (entryPoint) =>{
    entryPoint.setAttribute('class','kickstarter-header');
    entryPoint.innerHTML = ` <a href="index.html" class="kickstarter-header__title"><h1 >UCUstarter</h1></a>
                            <button id="add-btn" class="project__button project__button_add">Create project</button>`;
}
