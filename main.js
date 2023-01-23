import { createCard } from "./modules/creatingCard.js";

document.querySelector("#form").addEventListener("submit", formSubmitted);
let inputs = document.querySelectorAll('input');   
let userInputObj = {}; 

// Entry function once form is submitted.
function formSubmitted(event) {
  event.preventDefault();

  // REFACTORED: instead of getting & assigning each input value,
  // (1) iterate through the inputs, (2) store in an object with input id as a key 
  // (3) and destructure object with desired variable name. 
  for (var i = 0; i < inputs.length; i++) {
    userInputObj[inputs[i].id] = inputs[i].value;}
  const {destination, location, photo, description } = userInputObj;

  // Store input values from the form in a variable. 
  // let destination = event.target.elements["destination"].value;
  // let location = event.target.elements["location"].value;
  // let photo = event.target.elements["photo"].value;
  // let description = event.target.elements["description"].value;

  // Reset the form once submitted for new entry
  document.getElementById("form").reset();
  // Change Title from "Enter Destination Details" to "My wishList"
  // REFACTORED: changed from innerHTML to innnerText (associated security issues & simple text)
  document.querySelector("#wishlistTitle").innerText = "My WishList";
  // Will append the individual card via calling "createCard" function. 
  document.querySelector("#renderCardContainer").appendChild(createCard(destination, location, photo, description));
}

export {formSubmitted};
