console.log('My own test are starting.');

//2 of 6

function defaultParameterValue(a, b) {
    if(!b) {b = 100;}
    return a + b;
}

//console.log(defaultParameterValue(10, 20));
//console.log(defaultParameterValue(10));


// 3 of 6
function returnArgumentsArray() {

    var massiv = [];
    for (var i=0; i < arguments.length; i++) {
        massiv.push(arguments[i]);
        //console.log(arguments[i]);
    }
    return massiv;
}

//console.log(returnArgumentsArray(2,3,4));
//returnArgumentsArray(2,3,4);

// 4 of 6
function returnFnResult(fn) {
    return fn();
}

/*
console.log(returnFnResult(function(){
    return 1;
}));
*/

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
    if(!number) number = 0;
    return function(){return number += 1;}
}

console.log(returnCounter(3)); // 1
//console.log(returnCounter(4)); // 5
//console.log(returnCounter(-6)); // 5