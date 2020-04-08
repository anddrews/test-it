
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
var result;


function handleNumberClick(e) {
    var v = e.target.dataset.value;

    if (v) {
        values[index] += v;
        inputEl.value = values[0] + ' ' + action + ' ' + values[1];
    }
}

function handleActionClick (e) {
    var v = e.target.dataset.value;
    var calculate;
    if (v && !action && v !== '=') {
        action = v;
        index = 1;
        inputEl.value = values[0] + ' ' + action + ' ' + values[1];
    } else {
        switch (action) {
            case '+': {
                calculate = function(a, b) {
                    return a + b;
                }
                break;
            }
            case '-': {
                calculate = function(a, b) {
                    return a - b;
                }
                break;
            }
            case '*': {
                calculate = function(a, b) {
                    return a * b;
                }
                break;
            }
            case '/': {
                calculate = function(a, b) {
                    return a / b;
                }
                break;
            }
            default: {
                
            }
        }

        if (values[0] && values[1]) {
            inputEl.value = calculate(parseInt(values[0]), parseInt(values[1]));
        }
    }
}

numbersContainer.addEventListener('click', handleNumberClick);
actionsContainer.addEventListener('click', handleActionClick);



function sort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var tmp;
            if (arr[i] > arr[j]) {
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}

var arr = [3, 15, 32, 10, 1, 2, 3, 4, 5];

console.log('------- array sort -----')
console.log(arr);

var sortedArr = sort(arr);

console.log(sortedArr);




console.log('------ hoisting variables and function declaration --------')

foo();

function foo () {
    var a = 11;
    var c = 30;
    console.log('a from foo', a);
    console.log('b', b);
}

//boo(); boo === undefined

var boo = function() {
    console.log('boo');
}

boo();

boo = function() {
    console.log('new boo');
}


boo();

console.log('a', a);

var a = 10;
var b = 20;

if (true) {
    let r = 10;
}


const c = 20;

const obj = {};

console.log('--------- const reassigment-------')

console.log(obj.a);

obj.a = 3;

console.log(obj.a);

//obj = {}; error this variable can't be reassigned



