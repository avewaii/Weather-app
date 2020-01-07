const apiUnsplash = '1498775b15a5b7150dde4bce78fe45986b040c9cef87e8a53234508853ba4735'; 

async function loadBackground() {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${apiUnsplash}`);
    const data = await response.json();

    let requestApi = 'data.urls.full';
    document.getElementsByTagName('body')[0].style.backgroundImage = "url(" + data.urls.regular + ")";
};
loadBackground();

document.getElementsByClassName('header__button-change-bg')[0].addEventListener('click', loadBackground);


