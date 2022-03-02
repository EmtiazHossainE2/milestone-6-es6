const API_KEY = `2b2088ee34aa287fbb9f5224f11b3627`;

const common = () => {
    const city = document.getElementById('city-name')
    const cityName = city.value
    if (cityName == '') {
        alert('Oppps ! Write your city name')
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => displayTemperature(data))
        city.value = ''
    }

}
//key up event 
document.getElementById('submit').addEventListener('submit', function (e) {
    e.preventDefault()
    common()
})
//onclick search btn
const searchBtn = () => {
    common()
}

//function 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

//display details
const displayTemperature = temperatur => {
    console.log(temperatur);
    setInnerText('city', temperatur.name ? temperatur.name : 'Opps ! Enter your city name')
    setInnerText('temp', temperatur.main.temp)
    setInnerText('condition', temperatur?.weather[0]?.main)
    //set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperatur.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', url)

}


