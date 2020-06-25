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


// const charPic = {
//   'Harry Potter' : "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-goblet-of-fire-key-art.jpg.adapt.crop3x5.533p.jpg",
// }




 function displayCharacters(harry) {
  harry.forEach(harry => {
    let alias = document.createElement('li');
    let bloodStatus = document.createElement('li');
    let boggart = document.createElement('li');
    let deathEater = document.createElement('li');
    let dumbledoresArmy = document.createElement('li');
    let house = document.createElement('li');
    let ministryOfMagic = document.createElement('li');
    let name = document.createElement('li');
    let orderOfThePhoenix = document.createElement('li');
    let patronus = document.createElement('li');
    let role = document.createElement('li');
    let school = document.createElement('li');
    let species = document.createElement('li');
    let wand = document.createElement('li');
    alias.innerHTML = "Alias:  " + harry.alias;
    bloodStatus.innerHTML = "Blood Status:  " + harry.bloodStatus;
    boggart.innerHTML = `Boggart: ${harry.boggart}`;
    deathEater.innerHTML = "Death Eater:  " + harry.deathEater;
    dumbledoresArmy.innerHTML = "Dumbledore's Army:  " + harry.dumbledoresArmy;
    house.innerHTML = "House:  " + harry.house;
    ministryOfMagic.innerHTML = "Ministry Of Magic:  " + harry.ministryOfMagic;
    name.innerHTML = "Name:  " + harry.name;
    orderOfThePhoenix.innerHTML = "Order Of The Phoenix:  " + harry.orderOfThePhoenix;
    patronus.innerHTML = "Patronus:  " + harry.patronus;
    role.innerHTML = "Role:  " + harry.role;
    school.innerHTML = "School:  " + harry.school;
    species.innerHTML = "Species:  " + harry.species;
    wand.innerHTML = "Wand:  " + harry.wand;
    harryPotter.appendChild(alias);
    harryPotter.appendChild(bloodStatus);
    harryPotter.appendChild(boggart);
    harryPotter.appendChild(deathEater);
    harryPotter.appendChild(dumbledoresArmy);
    harryPotter.appendChild(house);
    harryPotter.appendChild(ministryOfMagic);
    harryPotter.appendChild(name);
    harryPotter.appendChild(orderOfThePhoenix);
    harryPotter.appendChild(patronus);
    harryPotter.appendChild(role);
    harryPotter.appendChild(school);
    harryPotter.appendChild(species);
    harryPotter.appendChild(wand);
  });
}

// let image = document.createElement('img');
// section.appendChild(image);


// for(pic in charPic) {
//   console.log('name', name); //character is the character from the quote from the API
//   console.log('pic', pic); //represents each character in our charPic object;
//   if(name === pic) {
//       image.src = charPic[pic]
//   }
// }

//change ul to list 
//put p tags in html