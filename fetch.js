document.getElementsByTagName('button')[0].addEventListener( "click" , () => {
    let cityName = document.getElementsByTagName('input')[0].value;

    getWeatherByCity(cityName);
});

const openWeatherKey = 'd27fa38dda3415ca05b829124e11a1b5';

function getWeatherByCity(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d27fa38dda3415ca05b829124e11a1b5`)
    .then(response => response.json())
    .then(data => JSON.stringify(data))
    .then(response => pushCityNameDataOnPage(response));
};

function pushCityNameDataOnPage(response) {
    let dataCity = JSON.parse(response);
    console.log(dataCity);

    //координаты
    document.getElementsByClassName('coordinates')[0].textContent = 'Longtitude: ' + dataCity.coord.lon;
    let lon = dataCity.coord.lon;
    document.getElementsByClassName('coordinates')[1].textContent = 'Latitude: ' + dataCity.coord.lat;
    let lat = dataCity.coord.lat;
    //город и страна
    document.getElementsByClassName('generalHeader__nameCity')[0].textContent = dataCity.name + ', ' + dataCity.sys.country;
    //градусы в цельсиях
    const differenceBetweenKelvinAndCelsius = 273.15;
    document.getElementsByClassName('degreesValue')[0].textContent = Math.round(dataCity.main.temp - differenceBetweenKelvinAndCelsius) + '℃';

    //feels like, wind, humidity
    document.getElementsByClassName('description')[0].textContent = dataCity.weather[0].description;
    document.getElementsByClassName('feelsLike')[0].textContent = 'Feels like ' + Math.round(dataCity.main.feels_like - 275.15) + '℃';
    document.getElementsByClassName('wind')[0].textContent = 'Wind ' + dataCity.wind.speed + ' m/s';
    document.getElementsByClassName('humidity')[0].textContent = 'Humidity ' + dataCity.main.humidity + ' %';

    generateMapByCityName(dataCity);
    getWeatherForThreeDayss(lon, lat);
}

//погода на три дня по городу
const DarkSkyApi = 'd1887a88eddfd20d6a2105eb3fd5904f';
function getWeatherForThreeDayss(lon, lat) {
   fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d1887a88eddfd20d6a2105eb3fd5904f/${lon},${lat}?units=si&exclude=currently,minutely,hourly,flags,alerts&lang=ru`)
    .then(response => response.json())
    .then(data => JSON.stringify(data))
    .then(answer => putThreeDaysWeatherOnPagee(answer)); 
}

function putThreeDaysWeatherOnPagee(answer) {
    answer = JSON.parse(answer);
    
    for(let i = 1; i < 4; i++){
        console.log(answer);
        let unixData = answer.daily.data[i].time;

        let a = new Date(unixData * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let month = months[a.getMonth()];
        let date = a.getDate();
        let time = date + ' ' + month;

        let temperatureHigh = answer.daily.data[i].temperatureHigh;
        let temperatureLow = answer.daily.data[i].temperatureLow;
        
        document.getElementsByClassName('nextDaysWeather')[i-1].innerHTML = '';

        let weather = document.createElement('p');
        weather.className = 'nextDayWeatherTitle';
        weather.textContent = time; 
        document.getElementsByClassName('nextDaysWeather')[i-1].append(weather);

        let weather1 = document.createElement('p');
        weather1.textContent = 'The Lowest temperature: ' + Math.round(temperatureLow) + '℃';
        document.getElementsByClassName('nextDaysWeather')[i-1].append(weather1);

        let weather2 = document.createElement('p');
        weather2.textContent = 'The highest temperature: ' + Math.round(temperatureHigh) + '℃';
        document.getElementsByClassName('nextDaysWeather')[i-1].append(weather2);
    };
}

//карта
function generateMapByCityName(data) {
    document.getElementsByTagName('input')[0].value = '';
    document.getElementById('map').innerHTML = '';
    
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [data.coord.lat, data.coord.lon],
            zoom: 7
        });
    }
}


