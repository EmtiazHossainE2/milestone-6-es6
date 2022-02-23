const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value;
    console.log(searchValue)
    searchField.value = ''
}