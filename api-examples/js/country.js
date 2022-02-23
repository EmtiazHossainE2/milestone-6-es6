function countriesBtn() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}
const displayCountry = data => {
    // for (const country of data) {
    //     console.log(country.name.common)
    // }
    const countryContainer = document.getElementById('countries')
    data.forEach(country => {
        // console.log(country)
        const p = document.createElement('p')
        p.classList.add('country')
        p.innerHTML = `
        Country Name : ${country.name.common} <br>
        Capital Name : ${country.capital} <br>
        Borders : ${country.borders} <br>
        Time Zone : ${country.timezones} <br>
        `
        countryContainer.appendChild(p)
    })
}

