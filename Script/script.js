// Load Category Item
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

// Display Categories
const displayCategories = (categories) => {
    const buttonContainer = document.getElementById('button-container');
    categories.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn py-10 px-10 w-72">
            <img src=${item.category_icon} /> <p class="font-bold ml-3">${item.category}</p>
        </button>
        `
        buttonContainer.appendChild(div)
    })
}

// Load All Pets
const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayPets(data.pets))
}

// Display Pets
const displayPets = (pets) => {
    const displayItem = document.getElementById('display-item');
    pets.forEach(item => {
        console.log(item)
        const div = document.createElement('div');
        div.classList.add("card", "border", "rounded-lg", "p-3");
        div.innerHTML = `
        <figure>
            <img src=${item.image} />
        </figure>
        <div class="my-4">
            <h2 class="font-bold text-2xl">${item.pet_name}</h2>
            <ul class="my-4 text-gray-600">
                <li><i class="fa-solid fa-bread-slice"></i> <span>Breed: ${item.breed}</span></li>
                <li><i class="fa-regular fa-calendar"></i>  <span>Birth: ${item.date_of_birth
                }</span></li>
                <li><i class="fa-solid fa-paw"></i> <span>Gender: ${item.gender}</span></li>
                <li><i class="fa-solid fa-dollar-sign"></i> <span>Price: ${item.price}</span></li>
            </ul>
            <hr>
            <div class="flex justify-between mt-5">
                <button class="btn text-[#0E7A81]"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn text-[#0E7A81]">Adopt</button>
                <button class="btn text-[#0E7A81]">Details</button>
            </div>
        </div>
        `
        displayItem.appendChild(div)
    })
}

loadCategory()
loadPets()