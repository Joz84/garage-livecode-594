// TODO: Build an awesome garage!
console.log("Un volontaire?");

// On retrouve : .cars-list
// Lien API
// Fetch : get du json
    // On itère sur le tableau de voitures
    // On récupère les données dont on a besoin
    // On crée une card HTML avec les infos structurées
    // On insère le HTML dans la div cars list

const carsList = document.querySelector(".cars-list");
const url = "https://wagon-garage-api.herokuapp.com/jojo/cars";

const createCard = (car) => {  
    const card = `<div class="car">
        <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.model}" />
        </div>
        <div class="car-info">
            <h4>${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
        </div>`;
    return card;
}

fetch(url)
    .then(response => response.json())
    .then((data) => {
        data.forEach((car) => {
            console.log(car.model);
           
            carsList.insertAdjacentHTML("beforeend", createCard(car));
        })
    })
// aller recuperer lelement formulaire
// poser un ecouteur dessus (submit)
// recuperer les values des inputs
// creer une nouvelle voiture dans lapi
// creer une nouvelle card
//insert dans html

const form = document.getElementById('new-car');
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const brand = document.getElementById("brand").value; 
    const model = document.getElementById("model").value;
    const plate = document.getElementById("plate").value; 
    const owner = document.getElementById("owner").value;
    const car = {brand: brand, model: model, plate: plate, owner: owner};  
    carsList.insertAdjacentHTML("beforeend", createCard(car));

    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data); // Look at local_names.default
        });


})