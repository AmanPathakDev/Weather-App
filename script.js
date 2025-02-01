// const API_KEY = "99e0f41f8d8db51546c5e5778e73d648";

// let theDate = new Date()
// document.getElementById("currentDate").innerHTML = `${theDate.getDay()}, ${theDate.getDate()} ${theDate.getMonth()} ${theDate.getYear()}`


document.getElementById("buttonClick").addEventListener("click", function() {
    const city = document.getElementById("searchPlace").value.trim()
    console.log("Button clicked. City:", city);
    if(!city) {
        document.getElementById("errorMessage").innerHTML = "Please enter a city name!"
        return
    }
    document.getElementById("searchPlace").value = ""
    getWeather(city)
})

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"99e0f41f8d8db51546c5e5778e73d648"}&units=metric`

    try {
        const response = await fetch(url)
        const data = await response.json()

        if(response.status !== 200) {
            document.getElementById("errorMessage").innerHTML = "City not found"
            return
        }

        document.getElementById("city").innerHTML = `${data.name}`
        document.getElementById("currentTemp").innerHTML = `${data.main.temp}°C`
        document.getElementById("cityName").innerHTML = `Weather in ${data.name}`
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        document.getElementById("currentWind").innerHTML = `Wind: ${data.wind.speed}Km/h`
        document.getElementById("currentHumidity").innerHTML = `Humidity: ${data.main.humidity}`
        document.getElementById("currentCondition").innerHTML = `Condition: ${data.weather[0].main}`
        document.getElementById("errorMessage").innerHTML = ""

    } catch (error) {
        document.getElementById("errorMessage").innerHTML = "Error fetching weather data!"
    }
}