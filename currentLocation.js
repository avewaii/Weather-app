const Token = '3277c0f44f4b7b';

async function getCurrentLocation() {
    const response = await fetch(`https://ipinfo.io?token=${Token}`);
    const data = await response.json();

    getMainInformation();
    pushDataOfCurrentLocation(data);
}
getCurrentLocation();

function pushDataOfCurrentLocation(data) {
    let longtitude = data.loc.split(',')[0];
    let latitude = data.loc.split(',')[1];

    //координаты (текущее местоположение)
    document.getElementsByClassName('coordinates')[1].textContent = 'Latitude: ' + latitude;
    document.getElementsByClassName('coordinates')[0].textContent = 'Longtitude: ' + longtitude;
    
    //город и страна (текущее)
    document.getElementsByClassName('generalHeader__nameCity')[0].textContent = data.city + ', ' + data.country;
       
    getTemperatureInCurrentCity(data);
    generateMap (longtitude, latitude);
}


function getMainInformation() {
    //Текущее время
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();

    //Текущая дата
    let currentDate = new Date();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = dayOfWeek[currentDate.getDay()] + ' ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()];

    // добавляем текущую дату и время
    document.getElementsByClassName('generalHeader__currentData')[0].textContent = date + ' ' + time;
}

async function getTemperatureInCurrentCity(data) {
    let currCity = data.city; 

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=d27fa38dda3415ca05b829124e11a1b5`)
    let answer = await response.json();
  
    pushCurrLocationTemperatureAndInfo(answer);
};

function pushCurrLocationTemperatureAndInfo(answer) {
    document.getElementsByClassName('degreesValue')[0].textContent = Math.round(answer.main.temp - 273.15) + '℃';

    document.getElementsByClassName('description')[0].textContent = answer.weather[0].description;
    document.getElementsByClassName('feelsLike')[0].textContent = 'Feels like ' + Math.round(answer.main.feels_like - 275.15) + '℃';
    document.getElementsByClassName('wind')[0].textContent = 'Wind ' + answer.wind.speed + ' m/s';
    document.getElementsByClassName('humidity')[0].textContent = 'Humidity ' + answer.main.humidity + ' %';
}

function generateMap (latitude, longtitude) {
    ymaps.ready(init);

    function init(){
        const Map = new ymaps.Map("map", {
           center: [latitude, longtitude],
            zoom: 10
        });
    }
}
    