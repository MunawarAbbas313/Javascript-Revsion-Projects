const  cityInput = document.querySelector("#search");
const searchButton = document.querySelector("#searchbtn");
const weatherCard = document.querySelector(".weather-card");
const apiKey = "ee409dc0407368a5ea52239420c2fdf1";
const alertboxx = document.querySelector(".alrett");
//const weatherDetails = document.querySelector(".weatherdetails");


searchButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const city = cityInput.value;
    if (city) {
        alertboxx.style.display = "none";
        try {
            const weatherData = await getWeatherData(city);
            // Clear previous weather details
            const weatherDetails = document.querySelector(".weatherdetails");
            if (weatherDetails) {
                weatherDetails.remove();
            }
            displayWeatherData(weatherData);
            cityInput.value = "";
        } catch (error) {
            console.log(error);
            displayError(error.message);
            cityInput.value = "";
        }
    } else {
        displayError("Please enter a city name");
    }
});


// to getweater data
// Fecth the url , put city and Api as variables
// if status 202 good or Ok = ture
// if not throw an error
// return the response in json format
async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    //console.log(response);
    return await response.json();  
};

// to display weather data
function displayWeatherData(data) {
   console.log(data);
   // Now as there are multiple data in the object we need to extract the data we need
   // we will use Object Destructuring
   const {name : city , 
    // here inside main there are multiple objects 
    main : {temp , humidity} ,
     weather:[{description ,id }]} = data;

     //create element to display the data
     const weatherCard = document.createElement("div");
     weatherCard.classList.add("weather-card");
     const cityName = document.createElement("h2");
     cityName.classList.add("city-name");
    cityName.textContent = city;
    const weatherInfo = document.createElement("div");
    weatherInfo.classList.add("weather-info");
    const temperature = document.createElement("p");
    const pSpan = document.createElement("span");
    pSpan.classList.add("temperature");
    pSpan.textContent = `Temperatur : ${Math.round(temp - 273.15)}°C`;
    weatherCard.appendChild(cityName);
    
    weatherInfo.appendChild(temperature);
    temperature.appendChild(pSpan);
    const humanity = document.createElement("p");
    const hSpan = document.createElement("span");
    hSpan.classList.add("humidity");
    hSpan.textContent = `Humidity: ${humidity}%`;
    humanity.appendChild(hSpan);
    weatherInfo.appendChild(humanity);
    const weatherType = document.createElement("p");
    const wtSpan = document.createElement("span");
    wtSpan.classList.add("weather-type");
    wtSpan.textContent =`  ${description}`;
    weatherType.appendChild(wtSpan);
    weatherInfo.appendChild(weatherType);
    const windspeed = document.createElement("p");
    const wSpan = document.createElement("span");
    wSpan.classList.add("wind-speed");
    wSpan.textContent = `Wind Speed: ${Math.round(data.wind.speed)} km/h`;
    windspeed.appendChild(wSpan);
    weatherInfo.appendChild(windspeed);
    const weathericon = document.createElement("p");
    weathericon.classList.add("weather-icon");
    weathericon.innerHTML = getWeatherEmoji(id);
    //weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherInfo.appendChild(weathericon);

    weatherCard.appendChild(weatherInfo);
    weatherCard.style.display = "inline-block";  
   const weatherDetails = document.createElement("div");
    weatherDetails.classList.add("weatherdetails");
    weatherDetails.appendChild(weatherCard);
    document.body.appendChild(weatherDetails);


   


};


// to getWeather Emoji
function getWeatherEmoji(id) {
    switch(true){
        case (id >= 200 && id < 300):
            return "⛈";
        case (id >= 300 && id < 400):
            return "🌧";
        case (id >= 500 && id < 600):
            return "🌧";
        case (id >= 600 && id < 700):
            return "❄";
        case (id >= 700 && id < 800):
            return "🌫";
        case (id === 800):
            return "☀";
        case (id >= 801 && id < 810):
            return "☁";
        default:
            return "❓";
    }

};

// to display Erros
function displayError(error) {
    
    
        //alert(error);
        alertboxx.innerHTML = error;
        alertboxx.style.display = "flex";
    }
    



// const city = "islamabad";
// async function getWeatherData(city){

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     const response = await fetch(apiUrl);
     
    
//     if(!response.ok){
//         throw new Error("Could not fetch weather data");
//     }

//     return await response.json();
// }
// console.log(getWeatherData(city));

