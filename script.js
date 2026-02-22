/*
Name: Millard Cil
Date: 2.21.2026
CSC 372-01

This is the JS file for food blog. It adds price tag, 
favorite button and section, favorite summary, and total price of favorite
*/

let favoriteSection = document.createElement("section");
favoriteSection.id = "favorites-summary";

let heading = document.createElement("h2");
heading.textContent = "Favorites";
favoriteSection.appendChild(heading);

let totalFav = document.createElement("p")
totalFav.textContent = "Total: $0.00"
favoriteSection.appendChild(totalFav);

let favList = document.createElement("ol");
favoriteSection.appendChild(favList);

let footer = document.querySelector("footer");
footer.before(favoriteSection);

let foodCards = document.querySelectorAll(".card");

let total = 0;

foodCards.forEach(function (card) {

    let dishName = card.dataset.dish;
    let dishPrice = parseFloat(card.dataset.price);

    let price = document.createElement("p");
    
    price.textContent = "$" + dishPrice;
    

    card.appendChild(price);

    let button = document.createElement("button");
    button.textContent = "Add to Favorites!";
    
    card.appendChild(button);


    button.addEventListener("click", function () {
    
        let dishFav = card.classList.contains("favorited");

        if(dishFav){
            card.classList.remove("favorited");
            button.textContent = "Add to Favorites!";
            total -= dishPrice;

            let listItem = favList.querySelector("[data-dish='" + dishName + "']");

            listItem.remove();

        } else {

            card.classList.add("favorited");

            button.textContent = "Remove from Favorites!";

            total += dishPrice;

            let listItem = document.createElement("li");
            listItem.dataset.dish = dishName;
            listItem.textContent = dishName + ": $" + dishPrice;
            favList.appendChild(listItem);

        }

        totalFav.textContent = "Total: $" + total.toFixed(2);
    });
    
});


