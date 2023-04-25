import axios from 'axios';

//API
//https://restcountries.com/v3.1/name/{name}


//Er moet een search functie gemaakt worden
//-Als eerste moet er een event listener gezet worden op het invoerveld
//-De input van die listener moet op een variabele gezet worden
//-De variable moet gebruikt worden met de bovenstaande API om te kunnen zoeken
//De search functie moet op basis van de common name zijn
//Uit de search functie moet de volgende info gehaald worden:
//1. De ligging (Western Europe bij NL)
//2. De populatie
//3. De hoofdstad
//4. Waarmee betaald kan worden (ook aangeven indien er meerdere zijn)
//5. De talen die gesproken worden
//Dit moet allemaal in een string gezet worden
//Deze string moet geinjecteerd worden in de DIV

const searchField = document.getElementById('search-field');
const submitForm = document.getElementById('submit-form');

let searchInput = "";

//Kan ook op deze manier geschreven worden:

// searchField.addEventListener('input', (e) => {
//     return searchInput = e.target.value;
// });

// submitForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     void fetchCountry(searchInput)
// })

searchField.addEventListener('input', handleInput)
submitForm.addEventListener('submit', handleSubmit)

function handleInput(e) {
    return searchInput = e.target.value
}

function handleSubmit(e) {
    e.preventDefault();
    void fetchCountry(searchInput)
}

const ENDPOINT = "https://restcountries.com/v2/name/";

async function fetchCountry(searchInput) {
    try {
        const response = await axios.get(`${ENDPOINT}${searchInput}`)
        const countryData = response.data
        console.log(countryData[0])
        console.log(countryData[0].name)
        console.log(countryData[0].flags.png)
        console.log(countryData[0].currencies[0].name)
        console.log(countryData[0].capital)
        console.log(countryData[0].population)
        console.log(countryData[0].languages[0].name)
        console.log(countryData[0].subregion)
    } catch(e) {
        console.log(e)
    }
}

