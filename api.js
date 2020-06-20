console.log("Always");

let baseUrl = "https://www.potterapi.com/v1/characters";
const key = "$2a$10$EgSXpeAjuDioaznk1qmjCuxR.8IAhX/NWSLufxhmpgEOkb0Z/iP86";
let url;
const section = document.getElementById("ranDOMdivId");
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitButton = document.querySelector(".submit");
const harryPotter = document.querySelector('ul');
// const section = document.querySelector('section');
const abo = document.querySelector(".abo");

searchForm.addEventListener('submit', fetchResults);
function fetchResults(e){
  e.preventDefault();
url = `${baseUrl}?key=${key}&name=${searchTerm.value}`;
console.log("URL:", url);

fetch(url)
  .then(function (result) {
    console.log(result);
    return result.json();
  })
  .then(function (json) {
    console.log(json);
    displayCharacters(json);
  })

  .catch((err) => console.error({ error: err }));
}
// function displayResults(json) {
//  while (section.firstChild) {
//    section.removeChild(section.firstChild);
//  }
// }

function displayCharacters(harry) {
  harry.forEach(h => {
    let ron = document.createElement('li');
    ron.innerHTML = h.alias;
    harryPotter.appendChild(ron);
  });
}



// for(let i = 0; i < CharacterData.length; i++) {
// let alias = document.createElement('alias');
// let bloodStatus = document.createElement('bloodStatus');
// let boggart = document.createElement('boggart');
// let deathEater = document.createElement('deathEater');
// let dumbledoresArmy = document.createElement('dumbledoresArmy');
// let house = document.createElement('house');
// let ministryOfMagic = document.createElement('ministryOfMagic');
// let name = document.createElement('name');
// let orderOfThePhoenix = document.createElement('orderOfThePhoenix');
// let patronus = document.createElement('patronus');
// let role = document.createElement('role');
// let school = document.createElement('school');
// let species = document.createElement('species');
// let wand = document.createElement('wand');
// let _id = document.createElement('_id');

// }



//Create Elements, assigning data (the data you get back from the ApI you assign to the elements
// you created),
//Append those newly created elements and send them back to the DOM