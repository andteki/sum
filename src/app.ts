/*
* File: app.ts, app.js
* Author: Sallai András
* Copyright: 2021, Sallai András
* Group: Szoft II N
* Date: 2021-09-30
* Github: https://github.com/andteki/
* Licenc: GNU GPL
*/

const num1 = document.querySelector("#num1") as HTMLInputElement;
const num2 = document.querySelector("#num2") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function add(number1: number, number2: number):number {
    return number1 + number2;
} 

calcButton.addEventListener('click', event => {
    console.log("test");
    let res = add(+num1.value, +num2.value);
    result.value = String(res);
    console.log(res);
});