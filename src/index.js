/* �� 1 - ������� */

/*
 ������� 1:

 ������� ������ ��������� ���� �������� � ���������� ���
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 ������� 2:

 ������� ������ ��������� ��� ��������� � ���������� ����� ���������� ��������
 �������� �� ��������� ������� ��������� ������ ���� 100
 */
function defaultParameterValue(a, b) {
    if(!b) {b = 100;}

    return a + b;
}


/*
 ������� 3:

 ������� ������ ���������� ��� ���������� � ��� ��������� � ���� �������
 ���������� ���������� ���������� ������� ����������
 */
function returnArgumentsArray() {
    var massiv = [];
    for (var i=0; i < arguments.length; i++) {
        massiv.push(arguments[i]);
    }
    return massiv;
}




/*
 ������� 4:

 ������� ������ ��������� ������ ������� � ���������� ��������� ������ ���������� �������
 */
function returnFnResult(fn) {
    return fn();
}

/*
 ������� 5:

 ������� ������ ��������� ����� (�������� �� ��������� - 0) � ���������� ������� (F)
 ��� ������ F, ���������� ����� ������ ���� ��������� �� ������� � ���������� �� F
 */

function returnCounter(number) {
    if(!number) number = 0;
    return function(){return number += 1;}
}



/*
 ������� 6 *:
 https://learn.javascript.ru/bind#bind
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 https://www.youtube.com/watch?v=OaR9Go75hOY
 https://www.youtube.com/watch?v=7oB57sW5Fho
 ==�������� ���������� ������ bind() � ���, ����� ������� (bind) ������� � ��������. ���� ������� ����� bind() ������� func �
 �������� ��� ������ obj, �� ������ ����� �������. ����� ����� ������� (��� ������� �������) �������� ����� ������������ ������� func
 ��� ������ ������� obj. ����� ���������, ���������� ����� �������, ����� �������� ������������ �������.
 ===
 ������� ������ ��������� ������ ������� (F) � ��������� ���������� �������������� ����������
 ������� ������ ��������� ���������� ��������� � ������� F � ������� ������������ �������
 */
function bindFunction(fn,...args) {
    return fn.bind(null, ...args);
}



export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
