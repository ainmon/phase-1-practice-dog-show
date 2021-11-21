document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(obj => obj.map(d => renderData(d)))

})


function renderData(dog){
    let tableBody = document.getElementById('table-body')
    let table = document.createElement('tr')
    let tableSub = document.createElement('td')
    let tableBreed = document.createElement('td')
    let tableSex = document.createElement('td')
    let editDog = document.createElement('td')
    let btn = document.createElement('button')

    let name = dog.name
    let breed = dog.breed
    let sex = dog.sex


    tableSub.append(name)
    tableBreed.append(breed)
    tableSex.append(sex)
    editDog.append(btn)
    table.append(tableSub, tableBreed, tableSex, editDog)
    tableBody.append(table)


    btn.addEventListener('click', () => {
        populateDog(dog);
    })

    function populateDog(dog){
        const dogForm = document.querySelector('#dog-form')
        dogForm.name.value = dog.name
        dogForm.breed.value = dog.breed
        dogForm.sex.value = dog.sex
    }

     /* dogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        updateDog(dog)
    }) */
}


/* function updateDog(dog){
    const newDog = {
        name: e.target.value,
        breed: e.target.value,
        sex: e.target.value
    }
    populateDog(newDog)
} */

