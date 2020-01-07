document.getElementsByClassName('header__button-change-measure')[0].addEventListener('click', convertDegrees);

function convertDegrees() {
    let COrFmatch = document.getElementsByClassName('degreesValue')[0].innerText;
    COrFmatch = COrFmatch.endsWith('℃');

    let CorF = document.getElementsByClassName('feelsLike')[0].innerText; //'feels like -7C'
    CorF = CorF.slice(-3); // -7℃

    if(CorF[0] == ' ') {
        CorF = CorF.slice(2);
        console.log('if', CorF);
    }
    console.log('corf2', CorF);
    CorF = CorF.endsWith('℃');
    console.log('corf2', CorF); 

    if (COrFmatch == true) {
        let degreesInCelsium = document.getElementsByClassName('degreesValue')[0].innerText;
        degreesInCelsium = degreesInCelsium.substring(0, degreesInCelsium.length - 1);

        let degreesInFahrenheit = (degreesInCelsium * 9/5) + 32;

        document.getElementsByClassName('degreesValue')[0].innerText = Math.round(degreesInFahrenheit) + 'F';
        document.getElementsByClassName('header__button-change-measure')[0].innerText = 'C';
    } else {
        degreesInFahrenheit = document.getElementsByClassName('degreesValue')[0].innerText;
        degreesInFahrenheit = degreesInFahrenheit.substring(0, degreesInFahrenheit.length - 1);

        degreesInCelsium = (degreesInFahrenheit - 32) * 5/9;

        document.getElementsByClassName('degreesValue')[0].innerText = Math.round(degreesInCelsium) + '℃';
        document.getElementsByClassName('header__button-change-measure')[0].innerText = 'F';
    }

    if (CorF == true) {
        let degInCelsium = document.getElementsByClassName('feelsLike')[0].innerText;
        degInCelsium = degInCelsium.substring(11, degInCelsium.length - 1);
        console.log('deg', degInCelsium);

        let degInFahrenheit = (degInCelsium * 9/5) + 32;

        document.getElementsByClassName('feelsLike')[0].innerText = 'Feels like ' + Math.round(degInFahrenheit) + 'F';
        
    } else {
        degInFahrenheit = document.getElementsByClassName('feelsLike')[0].innerText;
        degInFahrenheit = degInFahrenheit.substring(0, degInFahrenheit.length - 1);
        console.log('fromF', degInFahrenheit);

        degInCelsium = (degInFahrenheit - 32) * 5/9;

        document.getElementsByClassName('feelsLike')[0].innerText = 'Feels like ' + Math.round(degInCelsium) + '℃';
    }

}