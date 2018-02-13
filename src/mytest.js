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

//console.log(returnCounter(3)); // 1
//console.log(returnCounter(4)); // 5
//console.log(returnCounter(-6)); // 5



/*
 Задание 6 *:
 https://learn.javascript.ru/bind#bind
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 https://www.youtube.com/watch?v=OaR9Go75hOY
 https://www.youtube.com/watch?v=7oB57sW5Fho
 ==основное назначение метода bind() в том, чтобы связать (bind) функцию с объектом. Если вызвать метод bind() функции func и
 передать ему объект obj, он вернет новую функцию. Вызов новой функции (как обычной функции) выполнит вызов оригинальной функции func
 как метода объекта obj. Любые аргументы, переданные новой функции, будут переданы оригинальной функции.
 ===
 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn, a, b, c) {

    let someShit = {
        var1 : a,
        var2 : b,
        var3 : c,
        }

    F = fn.bind(someShit);

    return F();
}


function fy () {
    var res = this.var1;
    res += this.var2;
    res += this.var3;
    return res;
}

// вместо
// var g = bind(fy, "Context");
//var g = fy.bind("Context");
//g(); // Context

console.log(bindFunction(fy, 1, 3, 10));
//bindFunction();