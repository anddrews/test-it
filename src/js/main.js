function getValues () {
    var result = [];
    var i = 0;

    do {
        result[i] = +prompt('Введите число');
        i++;
        var isProcess = confirm('Продолжить ?');
    } while(isProcess);

    return result;
}

do {
    var numbers = getValues();
    alert(numbers);
    
    var isProcess = confirm('Продолжить');
} while (isProcess);