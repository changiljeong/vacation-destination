import { formSubmitted } from "../main.js";

function editButtonFunction (event) {

    // get cardElement & retrieve child element of photo & store in a variable. 
    let cardElement = event.target.parentElement.parentElement.parentElement;
    let photoElement = cardElement.children[0];
  
    // Get cardBodyElement & retrieve child elements (i.e., description, location) & store in a variable. 
    let cardBodyElement = event.target.parentElement.parentElement;
    let destinationElement = cardBodyElement.children[0];
    let locationElement = cardBodyElement.children[1];
    let descriptionElement = cardBodyElement.children[2];
  

    // window prompt to accept new input from user. 
    let newDestination = window.prompt("Where would you want to go? Type your new destination name :)");
    let newLocation = window.prompt("Tell us about the new location :) ");
    let newdescription = window.prompt("Any additional details about the new place? :) ");


    // if user input is provided (length is greater than 0), assign new value/attribute to the original elements. 
    if (newDestination.length > 0) {destinationElement.innerText = newDestination};
    if (newLocation.length > 0) {locationElement.innerText = newLocation};
    if (newdescription.length > 0) {descriptionElement.innerText = newdescription};
    // if (newPhoto.length > 0) {photoElement.setAttribute("src", newPhoto)};  



    // Fetch API
    let url =  `https://api.unsplash.com/search/photos?query=${newDestination}&per_page=20&client_id=DrwUHyRk_sB5SUJoY5FmtI7Np2WWAwQsai2CgyCi7DE`
    async function fetchProducts() {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
        }
        catch (error) {
        console.error(`Could not get products: ${error}`);
        }
    }

    //Promise & parse image section
    let promise = fetchProducts();
    promise.then((data) => { 
        // set default images in case user doesn't provide one & append it to newCard element. 
        let imageElement = data.results[0].urls.regular;
        photoElement.style.maxHeight ="145px"
        photoElement.setAttribute("src", imageElement);
    });

        
    // Async function for API images & render remaining body upon completion   
    async function renderCardBody() {
        await fetchProducts();}

    renderCardBody();

  }

  export {editButtonFunction}
