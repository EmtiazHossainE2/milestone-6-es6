const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value;
    // console.log(searchValue)
    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="loadMeadId(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal.slice(0, 25)}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        ` ;
        searchResult.appendChild(div)
    })
}
const loadMeadId = mealId => {
    // const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => displayDetails(data.meals[0]))
}
const displayDetails = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal.slice(0, 25)}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Watch Video</a>
        </div>
    `
    mealDetails.appendChild(div)

}