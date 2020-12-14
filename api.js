console.log("Winter is coming");

let baseUrl = "https://www.anapioficeandfire.com/api/characters/";
// const key = "$2a$10$EgSXpeAjuDioaznk1qmjCuxR.8IAhX/NWSLufxhmpgEOkb0Z/iP86";
let url;
const section = document.getElementById("ranDOMdivId");
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitButton = document.querySelector(".submit");
const aryaStark = document.querySelector('ul');
// const section = document.querySelector('section');
const abo = document.querySelector(".abo");
const alias = document.querySelector("alias");
const bloodStatus = document.querySelector("bloodStatus");

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
  e.preventDefault();
url = `${baseUrl}&name=${searchTerm.value}`;
console.log("URL:", url);

fetch(baseUrl)
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




 function displayCharacters(arya) {
  arya.forEach(arya => {
    let aliases = document.createElement('li');
    let books = document.createElement('li');
    let culture = document.createElement('li');
    let born = document.createElement('li');
    let father = document.createElement('li');
    let gender = document.createElement('li');
    let mother = document.createElement('li');
    let name = document.createElement('li');
    let playedBy = document.createElement('li');
    let povBooks = document.createElement('li');
    let spouse = document.createElement('li');
    let titles = document.createElement('li');
    
    aliases.innerHTML = "Aliases:  " + arya.aliases;
    books.innerHTML = "Books:  " + arya.books;
    culture.innerHTML = `Culture: ${arya.culture}`;
    born.innerHTML = "Born:  " + arya.born;
    father.innerHTML = "Father:  " + arya.father;
    gender.innerHTML = "Gender:  " + arya.gender;
    mother.innerHTML = "Mother:  " + arya.mother;
    name.innerHTML = "Name:  " + arya.name;
    playedBy.innerHTML = "Played By:  " + arya.playedBy;
    povBooks.innerHTML = "Books:  " + arya.povBooks;
    spouse.innerHTML = "Spouse:  " + arya.spouse;
    titles.innerHTML = "Titles:  " + arya.titles;
   
    aryaStark.appendChild(aliases);
    aryaStark.appendChild(books);
    aryaStark.appendChild(culture);
    aryaStark.appendChild(born);
    aryaStark.appendChild(father);
    aryaStark.appendChild(gender);
    aryaStark.appendChild(mother);
    aryaStark.appendChild(name);
    aryaStark.appendChild(playedBy);
    aryaStark.appendChild(books);
    aryaStark.appendChild(spouse);
    aryaStark.appendChild(titles);
  });
}

 // Set source path
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