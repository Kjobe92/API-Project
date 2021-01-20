console.log("YOU SHALL NOT PASS!!!");
// let characters = characterId;
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitButton = document.querySelector(".submit");
let baseUrl = `https://the-one-api.dev/v2/character?name=`;
const key = "Bearer " + "1xqYPCP5S3-RmXkWfHGg";
let url;
const section = document.getElementById("ranDOMdivId");
const frodoBaggins = document.querySelector('ul');
// const section = document.querySelector('section');
const abo = document.querySelector(".abo");
const realm = document.querySelector("realm");
const spouse = document.querySelector("spouse");

searchForm.addEventListener('submit', fetchResults);

// const racePic = {
//   Gandalf : 'https://static.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest/scale-to-width-down/340?cb=20130209172436'
// }

function fetchResults(e){
  e.preventDefault();
url = `${baseUrl}${searchTerm.value}`;
console.log("URL:", url);

fetch(url, {
  method: 'GET',
  headers: new Headers ({
    'Content-Type' : 'application/json',
    'Authorization' : key
  })
})
.then(res => res.json())
.then(json => displayCharacters(json))
.catch((err) => console.error({ error: err }));




 function displayCharacters(json) {
   console.log(json)
   let newData = json.docs[0]
  //  let name1 =document.createElement('li')
    let img = document.createElement('img')
    document.getElementById('characterName')
    document.getElementById("birth")
    document.getElementById('death')
    document.getElementById('gender')
    document.getElementById('hair')
    document.getElementById('height')
    document.getElementById('race')
    document.getElementById('realm1')
    document.getElementById('spouse1')
    document.getElementById('wiki1')
    
    // section.appendChild(img)
    
    characterName.innerText = "Name: " + newData.name
    birth.innerText = "Birth: " + newData.birth
    death.innerText = "Death: " + newData.death
    gender.innerText = "Gender: " + newData.gender
    hair.innerText = "Hair: " + newData.hair
    height.innerText = "Height: " + newData.height
    race.innerText = "Race: " + newData.race
    realm1.innerText = "Realm: " + newData.realm
    spouse1.innerText = "Spouse: " + newData.spouse
    wiki1.innerText = "WikiURL: " + newData.wikiUrl
    
    if(newData.spouse == ""){
      spouse1.innerText = "Spouse: Null"
      } else {
        spouse1.innerText = "Spouse: " + newData.spouse
      }
      if(newData.realm == ""){
        realm1.innerText = "Realm: Null"
        } else {
          realm1.innerText = "Realm: " + newData.realm
        }
        if(newData.height == ""){
          height.innerText = "Height: Null"
          } else {
            height.innerText = "Height: " + newData.height
          }

          // let character;
          
          // if (character === 'Gandalf'){
          //   img.src = racePic.Gandalf
          // }
  };
 }