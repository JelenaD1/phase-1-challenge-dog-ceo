// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  const ul = document.querySelector("#dog-breeds")
  const breedList = document.createElement("li")

  // Challenge 1

  return fetch(imgUrl)
    .then(response => response.json())
    .then(imagesData => {
      console.log(imagesData)
      imagesData.message.forEach(element => {
        const container = document.querySelector("#dog-image-container")
        const imageTag = document.createElement("img")
        imageTag.src = element
        container.append(imageTag)
      })

      // Challenge 2
      return fetch(breedUrl)
        .then(response => response.json())
        .then(breedData => {
          console.log(breedData)

          const breeds = Object.keys(breedData.message)
          breeds.forEach(breed => {
            const ul = document.querySelector("#dog-breeds")
            const breedList = document.createElement("li")
            breedList.addEventListener("click", function (event) {
              event.target.style.color = "blue"
            })
            
            const menu = document.querySelector("#breed-dropdown")
            menu.addEventListener("change", (event) => {
              event.preventDefault()
              ul.innerHTML = ""
              const letter = event.target.value
              console.log(letter)
              breeds.filter(breed => {
                if(breed.startsWith(letter)) {
                  console.log(breed)
                  const liItem = document.createElement("li")
                  liItem.innerHTML = breed 
                  ul.append(liItem)
                }
                
              })
            })
            breedList.innerHTML = breed
            ul.append(breedList)

          })
         
        })
    })
})
