

const apikey = "22a724c76cd3a54c2ceb1c9c38c8915e";

//  const Url = "https://api.openweathermap.org/data/2.5/weather?q&appid=22a724c76cd3a54c2ceb1c9c38c8915e";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    // const response = await fetch(apiUrl + city + `&appid =${apikey}`);
    const data = await fetch(`${apiUrl}`).then(response => response.json());
    // var data = await response.json();
    // console.log(weather_data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);

    })




