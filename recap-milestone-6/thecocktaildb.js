document.getElementById('search-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-value')
    const inputValue = inputText.value
    console.log(inputValue);
    inputText.value = ''
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrink(data.drinks))
})

const displayDrink = drinks => {
    drinks.forEach(drink => {
        console.log(drink);
        const display = document.getElementById('display')
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strCategory}</h5>
                    <p class="card-text">${drink.strInstructions}</p>
                </div>
            </div>
        `
        display.appendChild(div)
    })
}