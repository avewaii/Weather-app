//создаем контейнер для всего (header and main = общий фон)
const generalContainer = document.createElement('div');
generalContainer.className = 'generalContainer';
document.body.append(generalContainer);

// cоздаем header
const header = document.createElement('header');
document.getElementsByClassName('generalContainer')[0].prepend(header);

// наполняем header двумя дивами для кнопок и поиска
const headerButtonContainer = document.createElement('div');
headerButtonContainer.className = 'header__button-container';
document.getElementsByTagName('header')[0].prepend(headerButtonContainer);

const headerSearchContainer = document.createElement('form');
headerSearchContainer.className = 'header__search-container';
headerSearchContainer.name = 'city';
document.getElementsByTagName('header')[0].append(headerSearchContainer);

//наполняем headerButtonContainer кнопками, headerSearchContainer - поиском

const buttonChangeBackground = document.createElement('div');
buttonChangeBackground.className = 'header__button-change-bg';
document.getElementsByClassName('header__button-container')[0].append(buttonChangeBackground);

        const iconChangeBackground = document.createElement('i');
        iconChangeBackground.className = 'fas fa-sync-alt';
        document.getElementsByClassName('header__button-change-bg')[0].append(iconChangeBackground);

const buttonChangeMeasure = document.createElement('div');
buttonChangeMeasure.className = 'header__button-change-measure';
buttonChangeMeasure.textContent = 'F';
document.getElementsByClassName('header__button-container')[0].append(buttonChangeMeasure);

// headerSearchContainer - поиск

const input = document.createElement('input');
document.getElementsByTagName('form')[0].append(input);

const searchButton = document.createElement('button');
searchButton.innerText = 'Search';
searchButton.type='button';
document.getElementsByTagName('form')[0].append(searchButton);

//генерируем main

const main = document.createElement('main');
document.getElementsByClassName('generalContainer')[0].append(main);

//добавляем в main две секции

const mainDataSection = document.createElement('section');
mainDataSection.className = 'mainDataSection';
document.getElementsByTagName('main')[0].append(mainDataSection);

const mapSection = document.createElement('section');
mapSection.className = 'mapSection';
document.getElementsByTagName('main')[0].append(mapSection);

//заполняем mainDataSection

const generalHeader = document.createElement('div');
generalHeader.className = 'mainDataSection__generalHeader';
document.getElementsByClassName('mainDataSection')[0].append(generalHeader);

        //заполняем заголовок Город, дата, время

        const nameCity = document.createElement('span');
        nameCity.className = 'generalHeader__nameCity';
        document.getElementsByClassName('mainDataSection__generalHeader')[0].prepend(nameCity);

        const currentData = document.createElement('span');
        currentData.className = 'generalHeader__currentData';
        document.getElementsByClassName('mainDataSection__generalHeader')[0].append(currentData);

const mainData = document.createElement('div');
mainData.className = 'mainDataSection__mainData';
document.getElementsByClassName('mainDataSection')[0].append(mainData);

        //создаем контейнер для градусов и подробностей

        const degreesContainer = document.createElement('div');
        degreesContainer.className = 'mainData__degreesContainer';
        document.getElementsByClassName('mainDataSection__mainData')[0].append(degreesContainer);

        // заполняем главную информацию (градусы и всякие подробности(влажность, ветер))

        const degrees = document.createElement('div');
        degrees.className = 'mainData__degrees';
        document.getElementsByClassName('mainData__degreesContainer')[0].append(degrees);

                //добавляем span для градусов
                const degreesValue = document.createElement('div');
                degreesValue.className = 'degreesValue';
                document.getElementsByClassName('mainData__degrees')[0].append(degreesValue);

        const weatherIconContainer = document.createElement('div');
        weatherIconContainer.className = 'mainData__weatherIconContainer';
        document.getElementsByClassName('mainData__degreesContainer')[0].append(weatherIconContainer);

                const description = document.createElement('span');
                description.className = 'description';
                document.getElementsByClassName('mainData__weatherIconContainer')[0].append(description);

                const feelsLike = document.createElement('span');
                feelsLike.className = 'feelsLike';
                document.getElementsByClassName('mainData__weatherIconContainer')[0].append(feelsLike);

                const wind = document.createElement('span');
                wind.className = 'wind';
                document.getElementsByClassName('mainData__weatherIconContainer')[0].append(wind);

                const humidity = document.createElement('span');
                humidity.className = 'humidity';
                document.getElementsByClassName('mainData__weatherIconContainer')[0].append(humidity);

                //добавляем img для облачка/солнышка
                const weatherIcon = document.createElement('i');
                weatherIcon.className = 'weatherIcon';
                document.getElementsByClassName('mainData__weatherIconContainer')[0].append(weatherIcon);

        const nextDaysWeatherContainer = document.createElement('div');
        nextDaysWeatherContainer.className = 'nextDaysWeatherContainer';
        document.getElementsByClassName('mainDataSection__mainData')[0].append(nextDaysWeatherContainer);

                //заполняем тремя дивами 

                const nextDayWeather1 = document.createElement('div');
                nextDayWeather1.className = 'nextDaysWeather';
                document.getElementsByClassName('nextDaysWeatherContainer')[0].append(nextDayWeather1);

                const nextDayWeather2 = document.createElement('div');
                nextDayWeather2.className = 'nextDaysWeather';
                document.getElementsByClassName('nextDaysWeatherContainer')[0].append(nextDayWeather2);

                const nextDayWeather3 = document.createElement('div');
                nextDayWeather3.className = 'nextDaysWeather';
                document.getElementsByClassName('nextDaysWeatherContainer')[0].append(nextDayWeather3);

// заполняем mapSection

const map = document.createElement('div');
map.id = 'map';
document.getElementsByClassName('mapSection')[0].append(map);

const coordinates = document.createElement('div');
coordinates.className = 'coordinatesContainer';
document.getElementsByClassName('mapSection')[0].append(coordinates);

        const coordinates1 = document.createElement('h3');
        coordinates1.className = 'coordinates';
        document.getElementsByClassName('coordinatesContainer')[0].append(coordinates1);

        const coordinates2 = document.createElement('h3');
        coordinates2.className = 'coordinates';
        document.getElementsByClassName('coordinatesContainer')[0].append(coordinates2);



