/*
* File: app.ts, app.js
* Author: Sallai András
* Copyright: 2021, Sallai András
* Group: Szoft II N
* Date: 2021-09-30
* Github: https://github.com/andteki/
* Licenc: GNU GPL
*/
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function add(number1, number2) {
    return number1 + number2;
}
calcButton.addEventListener('click', function (event) {
    console.log("test");
    var res = add(+num1.value, +num2.value);
    result.value = String(res);
    console.log(res);
});
