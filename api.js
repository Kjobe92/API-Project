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
}



 function displayCharacters(json) {
  json.forEach(frodo => { 
    let birth = document.createElement('li');
    let death = document.createElement('li');
    let gender = document.createElement('li');
    let hair = document.createElement('li');
    let height = document.createElement('li');
    let name = document.createElement('li');
    let race = document.createElement('li');
    let realm = document.createElement('li');
    let spouse = document.createElement('li');
    let wikiUrl = document.createElement('li');
    
    birth.innerHTML = "Birth:  " + frodo.birth;
    death.innerHTML = "Death:  " + frodo.death;
    gender.innerHTML = "Gender" + frodo.gender;
    hair.innerHTML = "Hair:  " + frodo.hair;
    height.innerHTML = "Height:  " + frodo.height;
    name.innerHTML = "Name:  " + frodo.name;
    race.innerHTML = "Race:  " + frodo.race;
    realm.innerHTML = "Realm:  " + frodo.realm;
    spouse.innerHTML = "Spouse:  " + frodo.spouse;
    wikiUrl.innerHTML = "Wiki Url:  " + frodo.wikiUrl;
   
    frodoBaggins.appendChild(birth);
    frodoBaggins.appendChild(death);
    frodoBaggins.appendChild(gender);
    frodoBaggins.appendChild(hair);
    frodoBaggins.appendChild(height);
    frodoBaggins.appendChild(name);
    frodoBaggins.appendChild(race);
    frodoBaggins.appendChild(realm);
    frodoBaggins.appendChild(spouse);
    frodoBaggins.appendChild(wikiUrl);
  });
 }