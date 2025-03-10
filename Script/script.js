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

loadCategory()