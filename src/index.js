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

}


/*
 ������� 3:

 ������� ������ ���������� ��� ���������� � ��� ��������� � ���� �������
 ���������� ���������� ���������� ������� ����������
 */
function returnArgumentsArray() {

}



/*
 ������� 4:

 ������� ������ ��������� ������ ������� � ���������� ��������� ������ ���������� �������
 */
function returnFnResult(fn) {

}

/*
 ������� 5:

 ������� ������ ��������� ����� (�������� �� ��������� - 0) � ���������� ������� (F)
 ��� ������ F, ���������� ����� ������ ���� ��������� �� ������� � ���������� �� F
 */
function returnCounter(number) {

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
