const countriesBtn = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}
countriesBtn()
const displayCountry = data => {
    // for (const country of data) {
    //     console.log(country.name.common)
    // }
    const countryContainer = document.getElementById('countries')
    data.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('col')
        // div.innerHTML = `
        // <h4>Country Name : ${country.name.common} </h4>
        // <p>Capital Name : ${country.capital} </p>
        // <p>Borders : ${country.borders}</p> 
        // <p>Time Zone : ${country.timezones} </p>
        // <button style="
        //     margin: 10px 5px ;
        //     padding: 5px 10px;
        //     border-radius: 10px;
        //     border: 1px solid green; 
        //     " onclick="loadCountryDetails('${country.name.common}')">Details </button>
        // `
        div.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h4>Country Name : ${country.name.common} </h4>
                <p>Capital Name : ${country.capital} </p>
                <p>Borders : ${country.borders}</p> 
                <p>Time Zone : ${country.timezones} </p>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onclick="loadCountryDetails('${country.name.common}')">
                    Details
                </button>
            </div>
        </div>
        `
        countryContainer.appendChild(div)
    })
}
const loadCountryDetails = details => {
    // const url = `https://restcountries.com/v3.1/name/${details}`
    fetch(`https://restcountries.com/v3.1/name/${details}`)
        .then(response => response.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h4>Country Name : ${country.name.common} </h4>
        <p>Capital Name : ${country.capital} </p> 
        <p>Time Zone : ${country.timezones} </p>
        <p>Population : ${country.population} </p>
        <p>Total Area : ${country.area} km²</p>
        <img  src="${country.flags.png}"> <br>
        <a  target="_blank" href="${country.maps.googleMaps}">Google Maps  </a>
    `
}


