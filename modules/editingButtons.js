import { formSubmitted } from "../main.js";

function editButtonFunction (event) {
    // get cardElement & retrieve child element of photo & store in a variable. 
    let cardElement = event.target.parentElement.parentElement.parentElement;
    let photoElement = cardElement.children[0];
  
    // Get cardBodyElement & retrieve child elements (i.e., description, location) & store in a variable. 
    let cardBodyElement = event.target.parentElement.parentElement;
    let destinationElement = cardBodyElement.children[0];
    let locationElement = cardBodyElement.children[1];
  


    // for (var i = 0; i < inputs.length; i++) {
    //     userInputObj[inputs[i].id] = inputs[i].value;}
    //   const {destination, location, photo, description } = userInputObj;

      

    // window prompt to accept new input from user. 
    let newDestination = window.prompt("Where would you want to go? Type your new destination name :)");
    let newLocation = window.prompt("Tell us about the new location :) ");
    let newPhoto = window.prompt("Enter new URL of the desitionation :)")

    console.log(userInputObj)
    
    // if user input is provided (length is greater than 0), assign new value/attribute to the original elements. 
    if (newDestination.length > 0) {destinationElement.innerText = newDestination};
    if (newLocation.length > 0) {locationElement.innerText = newLocation};
    if (newPhoto.length > 0) {photoElement.setAttribute("src", newPhoto)};  
  }

  export {editButtonFunction}