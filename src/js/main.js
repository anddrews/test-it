var opener = document.querySelector('.burger-opener');
var menu = document.querySelector('.main-menu');

function clickHandler(event) {
    console.log('Opener was clicked');
    menu.classList.toggle('is-active');
}

opener.addEventListener('click', clickHandler);