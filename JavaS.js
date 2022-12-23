
const section = document.getElementById("section");
const header = document.getElementById("header");

const jsonObj = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  
jsonObj.active //yo sé lo que contiene cada cosa poniendo el ratón encima, y mediante el punto accedes a todas las características
jsonObj["members"][1]["powers"][2] //para acceder más abajo de la jerarquía de archivos, tienes que concatenar con corchetes
  
 
  

// //  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  
// //  const request = new XMLHttpRequest();
// //   request.open('GET', requestURL);
// //   request.responseType = 'json';
// //   request.send();
 
  

// //   request.onload = function() {
// //     const superHeroes = request.response;
// //     populateHeader(superHeroes);
// //     showHeroes(superHeroes);
// //   }

  function populateHeader(jsonObj) {
    
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj["squadName"];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }
  
  function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
console.info(jsonObj)
console.info(jsonObj.members[0].powers[0])
 populateHeader(jsonObj)
  showHeroes(jsonObj)