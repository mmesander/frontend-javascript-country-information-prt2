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
const searchData = document.getElementById('search-data')

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
        const countryData = response.data;

        let currencyString = "";
        let languageString = "";

        if (countryData[0].currencies.length === 1) {
            currencyString = countryData[0].currencies[0].name + "'s";
        } else {
            for (let i = 0; i < countryData[0].currencies.length; i++) {
                currencyString += countryData[0].currencies[i].name + "'s";

                if (i !== countryData[0].currencies.length -1 ) {
                    currencyString += " and ";
                }
            }
        }

        if (countryData[0].languages.length === 1) {
            languageString = countryData[0].languages[0].name;
        } else {
            for (let i = 0; i < countryData[0].languages.length; i++) {
                languageString += countryData[0].languages[i].name;

                if (i !== countryData[0].languages.length - 1) {
                    languageString += " and ";
                }
            }
        }

        searchData.innerHTML = `
        <img src="${countryData[0].flags.png}" alt="country flag">
        <span>${countryData[0].name}</span>
        <div class="flat-line"></div>
        <p>${countryData[0].name} is situated in ${countryData[0].subregion}. It has a population of ${countryData[0].population} people</p>
        <p>The capital is ${countryData[0].capital} and you can pay with ${currencyString}</p>
        <p>They speak ${languageString}</p>
        `
    } catch(e) {
        console.log(e)
    }
}



// console.log(countryData[0])
// console.log(countryData[0].name)
// console.log(countryData[0].flags.png)
// console.log(countryData[0].currencies[0].name)
// console.log(countryData[0].capital)
// console.log(countryData[0].population)
// console.log(countryData[0].languages[0].name)
// console.log(countryData[0].subregion)