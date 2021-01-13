

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    fetchBreeds()
    document.getElementById("breed-dropdown").addEventListener("change", (event) => {
        document.querySelector('#dog-breeds').innerHTML = ""
        let firstLetter = event.target.value 
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(function(json) {
            let allBreeds = Object.keys(json.message).filter(breed => {return breed[0] === firstLetter})
            addBreeds(allBreeds)
        })
     })
})

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(json => renderImage(json))
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(json => {
            let allBreeds = Object.keys(json.message)
            addBreeds(allBreeds)})
}

function renderImage(image) {
    image.message.forEach(element => {
        let img = document.createElement('img')
            img.src = element
        document.querySelector('#dog-image-container').appendChild(img)
    })
}

function addBreeds(breeds) {
    let breedList = document.querySelector('#dog-breeds')
    breeds.forEach(breed => {
        let li = document.createElement('li')
            li.innerHTML = breed
        li.addEventListener('click', () => {li.style.color = "red"})
        breedList.appendChild(li)
    })
}



