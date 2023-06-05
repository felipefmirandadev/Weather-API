
const key = "ae1efa8a89b5a28668697554dfa0d6e1"

function printDataOnScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " C°"
    document.querySelector(".weather-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
    document.querySelector(".weather-img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())

    printDataOnScreen(data)

    console.log(data)
}

function buttonClick() {
    const city = document.querySelector(".city-input").value

    searchCity(city)
}