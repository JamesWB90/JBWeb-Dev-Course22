

fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=6d8c92f95493894733bc3d4cc74f1374&units=metric")
    .then(function(response){
        return response.json()
    })
    .then(function (json){
    console.log(json)
    console.log(json.name);
    console.log(json.main.temp);
    console.log(json.weather[0].description);
    //call function to display the weather
    displayLondonWeather(json);
});


function displayLondonWeather(json) {
      document.querySelector('.temperature').innerHTML = json.main.temp + '&deg;';
      document.querySelector('.city-name').innerHTML = json.name;
      document.querySelector('.weather-description').innerHTML = json.weather[0].description;
}


