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
    // console.log(meals.meals[0].strMeal)
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        ` ;
        searchResult.appendChild(div)
    })
}