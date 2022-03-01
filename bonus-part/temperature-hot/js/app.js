const API_KEY = `2b2088ee34aa287fbb9f5224f11b3627`;

document.getElementById('submit').addEventListener('submit', function (e) {
    e.preventDefault()
    const cityName = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
})


