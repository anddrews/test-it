var ad = document.createElement('div');
var img = document.createElement('img');
var btn = document.createElement('button');
var txt = document.createElement('p');

var body = document.querySelector('body');
var placeholder = document.querySelector('#ad');


txt.innerText = `Phasellus gravida semper nisi.
 Pellentesque habitant morbi tristique senectus
 et netus et malesuada fames ac turpis egestas.
 Phasellus gravida semper nisi.`;
btn.innerText = 'click me!';
img.src = './img/ad.png';

ad.classList.add('banner');

ad.appendChild(img);
ad.appendChild(txt);
ad.appendChild(btn);

body.replaceChild(ad, placeholder);


