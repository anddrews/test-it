var opener = document.querySelector('.burger-opener');
var menu = document.querySelector('.main-menu');

function clickHandler(event) {
    console.log('Opener was clicked');
    menu.classList.toggle('is-active');
}

opener.addEventListener('click', clickHandler);


var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

var scr = document.createElement('script');
scr.innerText = 'alert("Hello world")'

ul.classList.add('menu');
ul.classList.remove('wwwmenu2');
// ul.classList.toggle('menu');
ul.classList.contains('menu');
ul.style.backgroundColor = 'red';
ul.style.height = '100px';


li1.innerText = '<span>Element 1</span>';
li2.innerHTML = '<span>Element 2</span>';
li3.textContent = '<div>Element 3</div>';


var lis = [li1, li2, li3];

var fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
    fragment.append(lis[i]);
}

// ul.appendChild(fragment);
ul.append(...lis);

var parent = document.querySelector('body');

parent.appendChild(ul);
console.log(ul.offsetHeight);

var newNode = document.createElement('div');
newNode.innerText = 'Adv';
var adv = document.querySelector('#advertisment');
parent.replaceChild(newNode, adv);






