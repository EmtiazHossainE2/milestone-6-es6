const searchBtn = () => {
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value
    // console.log(searchValue)
    searchField.value = ''
    if (searchValue == '') {
        alert('Write your favourite Food')
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.meals))
    }
}
const displaySearchResult = meals => {
    // console.log(result)
    // for (const meal of result) {
    //     console.log(meal)
    // }
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''
    if (meals == null) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <h4 class="text-light ms-5 mt-5 ps-5">Nothing To Show</h4>
        `
        searchResult.appendChild(div)
    }
    else {
        meals.forEach(meal => {
            // console.log(meal)
            const div = document.createElement('div')
            div.classList.add(('col'))
            div.innerHTML = `
                <div class="card h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadMealDetails(${meal.idMeal})">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                    </div>
                </div>
            `
            searchResult.appendChild(div)
        })
    }
}
const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    console.log(meal)
    const displayDetails = document.getElementById('display-details')
    displayDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
            <p class="card-text">Area : ${meal.strArea}</p>
            <p class="card-text">Category : ${meal.strCategory}</p>
            <p class="card-text">Ingredient : ${meal.strIngredient1} ,${meal.strIngredient2},${meal.strIngredient3},${meal.strIngredient4},${meal.strIngredient5} ,${meal.strIngredient6}  </p>
            <button class="btn btn-success">
                <a target="_blank" class="text-light text-decoration-none" href="${meal.strYoutube}">Watch Review</a>    
            </button>
        </div>
    `
    displayDetails.appendChild(div)
}