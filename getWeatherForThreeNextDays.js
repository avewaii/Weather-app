const DarkSky = 'd1887a88eddfd20d6a2105eb3fd5904f';
async function getWeatherForThreeDays(lon, lat) {
    const DarkSkyApi = 'd1887a88eddfd20d6a2105eb3fd5904f';
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d1887a88eddfd20d6a2105eb3fd5904f/53.9000,27.5667?units=si&exclude=currently,minutely,hourly,flags,alerts&lang=ru`)
    const data = await response.json()
    //console.log('threeWeather', JSON.stringify(data));

    putThreeDaysWeatherOnPage(data);    
}
getWeatherForThreeDays();

function putThreeDaysWeatherOnPage(data) {
    for(let i = 1; i < 4; i++){
        let unixData = data.daily.data[i].time;

        function timeConverter(unixData){
                let a = new Date(unixData * 1000);
                let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                let month = months[a.getMonth()];
                let date = a.getDate();
                let time = date + ' ' + month;

                
                let temperatureHigh = data.daily.data[i].temperatureHigh;
                let temperatureLow = data.daily.data[i].temperatureLow;

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
        }
        timeConverter(unixData);
    };
}

