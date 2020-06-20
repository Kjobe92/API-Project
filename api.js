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
const alias = document.querySelector("alias");
const bloodStatus = document.querySelector("bloodStatus");

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





for(let i = 0; i < CharacterData.length; i++) {
let alias = document.createElement('alias');
let bloodStatus = document.createElement('bloodStatus');
let boggart = document.createElement('boggart');
 let deathEater = document.createElement('deathEater');
let dumbledoresArmy = document.createElement('dumbledoresArmy');
 let house = document.createElement('house');
let ministryOfMagic = document.createElement('ministryOfMagic');
let name = document.createElement('name');
let orderOfThePhoenix = document.createElement('orderOfThePhoenix');
let patronus = document.createElement('patronus');
let role = document.createElement('role');
let school = document.createElement('school');
let species = document.createElement('species');
let wand = document.createElement('wand');
let _id = document.createElement('_id');

 }

//  function displayCharacters(json) {
//   document.getElementById('alias').innerHTML = `${alias}`;
//   document.getElementById('bloodStatus').innerHTML = `${bloodStatus}`;
//  }
 function displayCharacters(harry) {
  harry.forEach(harry => {
    let alias = document.createElement('li');
    let draco = document.createElement('li');
    let hagrid = document.createElement('li');
    let herm = document.createElement('li');
    let luna = document.createElement('li');
    let bella = document.createElement('li');
    let dumble = document.createElement('li');
    let dobby = document.createElement('li');
    let ginny = document.createElement('li');
    let neville = document.createElement('li');
    let volde = document.createElement('li');
    let snape = document.createElement('li');
    let tonks = document.createElement('li');
    let molly = document.createElement('li');
    alias.innerHTML = harry.alias;
    draco.innerHTML = harry.bloodStatus;
    hagrid.innerHTML = harry.boggart;
    herm.innerHTML = harry.deathEater;
    luna.innerHTML = harry.dumbledoresArmy;
    bella.innerHTML = harry.house;
    dumble.innerHTML = harry.ministryOfMagic;
    dobby.innerHTML = harry.name;
    ginny.innerHTML = harry.orderOfThePhoenix;
    neville.innerHTML = harry.patronus;
    volde.innerHTML = harry.role;
    snape.innerHTML = harry.school;
    tonks.innerHTML = harry.species;
    molly.innerHTML = harry.wand;
    harryPotter.appendChild(alias);
    harryPotter.appendChild(draco);
    harryPotter.appendChild(hagrid);
    harryPotter.appendChild(herm);
    harryPotter.appendChild(luna);
    harryPotter.appendChild(bella);
    harryPotter.appendChild(dumble);
    harryPotter.appendChild(dobby);
    harryPotter.appendChild(ginny);
    harryPotter.appendChild(neville);
    harryPotter.appendChild(volde);
    harryPotter.appendChild(snape);
    harryPotter.appendChild(tonks);
    harryPotter.appendChild(molly);
  });
}




//Create Elements, assigning data (the data you get back from the ApI you assign to the elements
// you created),
//Append those newly created elements and send them back to the DOM