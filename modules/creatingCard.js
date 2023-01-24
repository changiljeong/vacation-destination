import { editButtonFunction } from "./editingButtons.js";

function createCard(destination, location, description) {
    // create new card element (div), set attribute of card with bootstrap class (card). 
    let newCard = document.createElement("div")
    newCard.setAttribute("class", "card newCard");
    newCard.style.width = "15rem";
    newCard.style.height = "fit-content";
    newCard.style.margin = "20px;";


    // Fetch API
    const url =  `https://api.unsplash.com/search/photos?query=${destination}&per_page=20&client_id=DrwUHyRk_sB5SUJoY5FmtI7Np2WWAwQsai2CgyCi7DE`
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
    const promise = fetchProducts();
    promise.then((data) => { 
      // set default images in case user doesn't provide one & append it to newCard element. 
      let imageElement = data.results[0].urls.regular;
      let img = document.createElement("img");
      img.setAttribute ("class", "card-img-top");
      img.style.maxHeight ="145px"
      img.setAttribute("src", imageElement);
      newCard.appendChild(img)});

      
    // Async function for API images & render remaining body upon completion   
    async function renderCardBody() {
      await fetchProducts();
      
      // Create body of the remaining card part after image on top with bootstrap class (i.e., destination = card-title, location = card-subtitle, description = card-text)
      let newCardBody = document.createElement("div");
      newCardBody.setAttribute("class", "card-body");
      let newCardDestination = document.createElement("h5");
      newCardDestination.setAttribute("class", "card-title");
      newCardDestination.innerText = destination;
      let newCardLocation = document.createElement("h6");
      newCardLocation.setAttribute("class", "card-subtitle mb-2 text-muted");
      newCardLocation.innerText = location;
      let newCardDescription = document.createElement("p");
      newCardDescription.setAttribute("class", "card-text");
      newCardDescription.innerText = description;
      newCardDescription.style.fontSize = 12;

      //Append the created elements to the newCarBody elements. 
      newCardBody.appendChild(newCardDestination);
      newCardBody.appendChild(newCardLocation);
      newCardBody.appendChild(newCardDescription);


      // (1) Create body of the button part with bootstrap class (i.e., edit = btn-info, remove = btn-danger)
      // (2) add eventListener to call callback function for the buttons (anonymous function for removing).
      // (3) Time to add all up-streming: Append 2 buttons to the buttonBody THEN append it to newCardBody THEN append it to newCard element && RETURN newCard. 
      let buttonBody = document.createElement("div");
      buttonBody.setAttribute("class", "btn-group");

      let editButton = document.createElement("button");
      editButton.setAttribute("class", "btn btn-info");
      editButton.innerText = "  EDIT  ";
      //EventLister to call editButtonFunction if "edit" button is clicked. 
      editButton.addEventListener("click", editButtonFunction);

      let removeButton = document.createElement("button");
      removeButton.setAttribute("class", "btn btn-danger");
      removeButton.innerText = "REMOVE";
      // Anonymous callback function for removing the card. 
      removeButton.addEventListener("click", (event) => {
        let cardBody = event.target.parentElement.parentElement;
        let card = cardBody.parentElement;
        card.remove();
      });

      buttonBody.appendChild(editButton);
      buttonBody.appendChild(removeButton);
      newCardBody.appendChild(buttonBody);
      newCard.appendChild(newCardBody);
      }

      renderCardBody();
  return newCard;
}

export {createCard}
