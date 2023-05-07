const API_KEY = 'ee20fced0386cee43ae5c6855484bc3b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

async function checkWeather() {
    var city = document.querySelector('.input-city').value;
    const response = await fetch(API_URL + `&appid=${API_KEY}` + `&q=${city}`);

    if (response.status == '404') {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector('.name-city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + 'km/h';

        switch(data.weather[0].main){
            case 'Clouds': 
                document.querySelector('.main-info img').src = "images/clouds.png";
                break;
            case 'Clear': 
                document.querySelector('.main-info img').src = "images/clear.png";
                break;
            case 'Drizzle': 
                document.querySelector('.main-info img').src = "images/drizzle.png";
                break;
            case 'Mist': 
                document.querySelector('.main-info img').src = "images/mist.png";
                break;
            case 'Rain': 
                document.querySelector('.main-info img').src = "images/rain.png";
                break;
            case 'Snow': 
                document.querySelector('.main-info img').src = "images/snow.png";
            default: break;
        }

        document.querySelector('.container').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

    
}
checkWeather();
