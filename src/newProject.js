// import {createProject} from "./createProject";
//
// const onSubmit = () => {
//     // const owner = document.getElementById("owner").value;
//     const owner = "0xa6c1429c546d05994258bba4de91042e62996262";
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const funds = document.getElementById("funds").value;
//
//     const obj = {owner, title, description, funds};
//
//     if (validation(obj)) {
//         // document.getElementById("form_id").submit();
//         console.log(owner, funds);
//         createProject(owner, funds);
//         // alert('Form submitted successfully!');
//         // window.location.href = 'index.html';
//     }
// };
//
// const validation = obj => {
//     if (obj.owner === '' || obj.title === '' || obj.description === '' || obj.funds === '') {
//         alert("Please fill all fields!");
//         return false;
//     }
//     return true;
// };
//
// const renderTemplate = () => {
//     let project_template = document.querySelector(".project-template");
//     project_template.innerHTML +=
//         `<form action="#" id="form_id">
//             <h1>Create project</h1>
//             <div class="field">
//                 <label for="owner" class="label">Owner:</label>
//                 <input type="text" id="owner" name="ownerName" placeholder="Enter the owner name">
//             </div>
//             <div class="field">
//                 <label for="title" class="label">Title:</label>
//                 <input type="text" id="title" name="projectTitle" placeholder="Enter the project title">
//             </div>
//             <div class="field">
//                 <label for="description" class="label">Description:</label>
//                 <textarea id="description" rows="4" name="projectDescription" placeholder="Enter the project description"></textarea>
//             </div>
//             <div class="field">
//                 <label for="funds" class="label">Funds:</label>
//                 <input type="number" id="funds" name="projectFunds" placeholder="Enter required amount of money" />
//             </div>
//             <input id="submit-btn" class="project__button project__button_submit" type="button" value="Submit"/>
//         </form>`;
//     const submitButton = document.querySelector("#submit-btn");
//     submitButton.addEventListener("click", onSubmit);
//
// };
//
// renderTemplate();