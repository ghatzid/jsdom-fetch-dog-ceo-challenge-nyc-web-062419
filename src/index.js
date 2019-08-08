const url = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
  fetchDogBreeds()
})


function fetchDogBreeds() {
  return fetch(breedUrl)
  .then(resp => resp.json())  
  .then(json => renderDogBreeds(json))

}


function fetchDogs() {
   return fetch(url)
   .then(resp => resp.json())
   .then(json => renderDogs(json))
  }
  
  
  
  function renderDogs(json) {
  const dogContainer = document.querySelector('#dog-image-container')
  json.message.forEach(dog => {
    const p = document.createElement('p')
    p.innerHTML = `<img src=${dog} alt=""</img>`
    dogContainer.appendChild(p)
  })    
} 


function renderDogBreeds(json){
  //dropdown filter    
  const breedDropdown = document.getElementById("breed-dropdown")
  breedDropdown.addEventListener('input', function() {
  console.log(`filtering by "${breedDropdown.value}"`)
  
  const breedContainer = document.querySelector("#dog-breeds")
  Object.keys(json.message).forEach(breed => {
    if (breed.charAt(0) == breedDropdown.value){
    console.log(breed.charAt(0) == breedDropdown.value)
    const ul = document.createElement('ul')
    ul.innerHTML = `${breed}`
    breedContainer.appendChild(ul)
    }
  }

    )

  //color doggo names
    breedContainer.addEventListener('click', function(e) {
        e.target.style.color = "#ff0000"})


  
  })}
