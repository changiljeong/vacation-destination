import { editButtonFunction } from "./editingButtons.js";

function createCard(destination, location, photo, description) {
    // create new card element (div), set attribute of card with bootstrap class (card). 
    let newCard = document.createElement("div")
    newCard.setAttribute("class", "card newCard");
    newCard.style.width = "15rem";
    newCard.style.height = "fit-content";
    newCard.style.margin = "20px;";

    // create new card element (img), set attribute of img with bootstrap class (card-img-top). 
    let img = document.createElement("img");
    img.setAttribute ("class", "card-img-top");
    // set default images in case user doesn't provide one & append it to newCard element. 
    let defaultImage ="https://travellemming.com/wp-content/uploads/2020-Travel-Destinations.jpg";
    if (photo.length === 0) {
      img.setAttribute("src", defaultImage);
    } else {
      img.setAttribute("src", photo);
    }
    // append the img to newCard element
    newCard.appendChild(img);

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
  return newCard;
}

export {createCard}



// function show() {
//   var content="<b>All Elements of the Arrays :</b><br>";
//   for(var i = 0; i < title.length; i++) {
//      content +=title[i]+"<br>";
//   }
//   for(var i = 0; i < names.length; i++) {
//      content +=names[i]+"<br>";
//   }
//   for(var i = 0; i < tickets.length; i++) {
//      content +=tickets[i]+"<br>";
//   }
//   document.getElementById('display').innerHTML = content; //note that I changed 
//                                                     //to 'display' because that's
//                                               //what you have in your markup
// }