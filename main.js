import { createCard } from "./modules/creatingCard.js";

//EventLister for form submit action. 
document.querySelector("#form").addEventListener("submit", clickAddtoList);

// Entry function once form is submitted.
function clickAddtoList(event) {
  event.preventDefault();

  // Store input values from the form in a variable. 
  let destination = event.target.elements["destination"].value;
  let location = event.target.elements["location"].value;
  let photo = event.target.elements["photo"].value;
  let description = event.target.elements["description"].value;

  // Reset the form once submitted for new entry
  document.getElementById("form").reset();
  // Change Title from "Enter Destination Details" to "My wishList"
  document.querySelector("#wishlistTitle").innerHTML = "My WishList";
  // Will append the individual card via calling "createCard" function. 
  document.querySelector("#renderCardContainer").appendChild(createCard(destination, location, photo, description));
}


// function editButtonFunction (event) {
//   // get cardElement & retrieve child element of photo & store in a variable. 
//   let cardElement = event.target.parentElement.parentElement.parentElement;
//   let photoElement = cardElement.children[0];

//   // Get cardBodyElement & retrieve child elements (i.e., description, location) & store in a variable. 
//   let cardBodyElement = event.target.parentElement.parentElement;
//   let destinationElement = cardBodyElement.children[0];
//   let locationElement = cardBodyElement.children[1];

//   // window prompt to accept new input from user. 
//   let newDestination = window.prompt("Where would you want to go? Type your new destination name :)");
//   let newLocation = window.prompt("Tell us about the new location :) ");
//   let newPhoto = window.prompt("Enter new URL of the desitionation :)")
  
//   // if user input is provided (length is greater than 0), assign new value/attribute to the original elements. 
//   if (newDestination.length > 0) {destinationElement.innerText = newDestination};
//   if (newLocation.length > 0) {locationElement.innerText = newLocation};
//   if (newPhoto.length > 0) {photoElement.setAttribute("src", newPhoto)};  
// }
