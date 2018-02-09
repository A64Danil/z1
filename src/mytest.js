/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {

}


/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {

}



/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {

}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {

}



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
function bindFunction(F, a, b, c) {

    return F;
}



export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
