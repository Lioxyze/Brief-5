async function getAllListings() {
  try {
    let apiCall = await fetch("http://localhost:3000/api/allRental");
    let response = await apiCall.json();
    console.log(response);

    let cardsContainer = document.querySelector(".cards");

    response.data.forEach((listing) => {
      // Accéder à response.data
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      card.style.padding = "23px";
      card.style.margin = "5px";

      card.innerHTML = `
<div class="container text-center ">
  <div class="row">
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${listing.NameRental}</h5>
        <img src="${listing.Image}" class="img-fluid"> <!-- Ajout de la classe img-fluid -->
        <p class="card-text">${listing.DescriptionRental}</p>
        <p class="card-text">StartDate : ${listing.RentalStartDate}</p>
        <p class="card-text">EndDate : ${listing.RentalEndDate}</p>
        <p class="card-text">Price : ${listing.TotalRentalAmount} $</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Rental</button>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button> 
      </div>
    </div>
  </div>
</div>

      `;

      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
  }
}

function logout() {
  localStorage.removeItem("jwt");
}

getAllListings();