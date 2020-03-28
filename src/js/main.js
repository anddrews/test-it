function getValues () {
    var results = [];
    var i = 0;

    do {
        results[i++] = +prompt('Введите число');
        var isProcess = confirm('Продолжить ?');
    } while(isProcess);

    return results;
}

function calculator() {
    do {
        var numbers = getValues();
        var res = numbers[0];

        for(var i = 0; i < numbers.length; i = i + 2) {
            res = res + numbers[i];
        }

        alert('Итого:' + res);

        var isProcess = confirm('Продолжить');
    } while (isProcess);
}

// calculator();

function triangle(lines, sign) {
    var line = sign;

    for(var i = 0; i < lines; i++) {
        console.log(line);
        line += sign;
    }   
}
// var rows = getValues();

// triangle(3, '+');
// triangle(5, '-');

function triangleReverse(lines, sign) {
    var strings = [];
    var line;

    for(var i = 0; i < lines; i++) {
        line = '';
        for(var j = 0; j < lines - i; j++) {
            line += sign;
        }
        strings[i] = line;
        console.log(strings[i]);
    }

    for ( var i = strings.length - 1; i >= 0; i--){
        console.log(strings[i]); 
    }
}

// triangleReverse(5, '*');

var values = ['', ''];
var action = '';
var index = 0;
var inputEl = document.querySelector('.calculator__input');
var numbersContainer = document.querySelector('.num-buttons');
var actionsContainer = document.querySelector('.actions');


function handleNumberClick(e) {
    var v = e.target.dataset.value;

    if (v) {
        values[index] += v;
        inputEl.value = values[0] + ' ' + action + ' ' + values[1];
    }
}

function handleActionClick (e) {
    var v = e.target.dataset.value;

    if (v && !action && v !== '=') {
        action = v;
        index = 1;
        inputEl.value = values[0] + ' ' + action + ' ' + values[1];
    }
}

numbersContainer.addEventListener('click', handleNumberClick);
actionsContainer.addEventListener('click', handleActionClick);



