// console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  renderImages()
  renderdogBreeds()
  filterBreedListener()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let newImageEl = document.createElement('img');
let breeds = []

function renderImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => json.message.forEach(img => {
      newImageEl.src = img; 
      let container = document.querySelector('#dog-image-container');
      container.appendChild(newImageEl);
  }))
}

function renderdogBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
      breeds = Object.keys(json.message)
      addDogBreeds(breeds)
  })
}

function addDogBreeds(breeds) {
  let breedUL = document.querySelector("#dog-breeds")
  breeds.forEach(breed => {
  let element = document.createElement("li")
  element.innerText = breed
  breedUL.appendChild(element)
  element.onclick = changeColor
})
}

function changeColor(event) {
  event.target.style.color = "purple"
}

function updateBreedlist(breeds) {
  let ul = document.querySelector('#dog-breeds')
  removeChildren(ul)
  breeds.forEach(breed => addDogBreeds(breeds))
}

function removeChildren(element) {
  let child = element.lastElementChild
  while (child) {
    element.removeChild(child)
    child = element.lastElementChild
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedlist(breeds.filter(breed => breed.startsWith(letter)))
}

function filterBreedListener() {
  let dropdown = document.querySelector("#breed-dropdown")
  dropdown.addEventListener('change', function(event) {
    selectBreedsStartingWith(event.target.value)
  })

}















































// document.addEventListener("DOMContentLoaded", function() {
//   loadImages();
//   loadBreeds();
// })

// function loadImages() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//   return fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(results => {
//       results.message.forEach(image => addImage(image))
//     });
// }

// function addImage(picUrl) {
//   const container = document.getElementById("dog-image-container");
//   const newImage = document.createElement('img');
//   newImage.src = picUrl;
//   container.appendChild(newImage);
// }

// function loadBreeds() {
//   return fetch('https://dog.ceo/api/breeds/list/all')
//     .then(resp => resp.json())
//     .then(results => {
//       const breeds = Object.keys(results.message);
//       addBreeds(breeds);
//     });
// }

// function addBreeds(breeds) {
//   const ul = document.getElementById("dog-breeds");
//   breeds.forEach(breed => {
//     const li = document.createElement("li");
//     li.innerText = breed;
//     ul.appendChild(li);
//     li.addEventListener("click", function(event) {
//       event.target.style.color = "blue";
//     });
//   });
// }