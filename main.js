"use strict";

window.onload = function () {

    let expression = document.getElementById('expression');
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');

    let numOne = document.getElementById('one');
    numOne.onclick = function () {
        expression.append(`1`);
        firstNumber.append('1');
    };

    let numTwo = document.getElementById('two');
    numTwo.onclick = function () {
        expression.append(`2`);
        firstNumber.append('2');
    };

    let numThree = document.getElementById('three');
    numThree.onclick = function () {
        expression.append('3');
        firstNumber.append('3');
    };

    let numFour = document.getElementById('four');
    numFour.onclick = function () {
        expression.append(`4`);
        firstNumber.append('4');
    };

    let numFive = document.getElementById('five');
    numFive.onclick = function () {
        expression.append(`5`);
        firstNumber.append('5');
    };

    let numSix = document.getElementById('six');
    numSix.onclick = function () {
        expression.append('6');
        firstNumber.append('6');
    };

    let numSeven = document.getElementById('seven');
    numSeven.onclick = function () {
        expression.append(`7`);
        firstNumber.append('7');
    };

    let numEight = document.getElementById('eight');
    numEight.onclick = function () {
        expression.append(`8`);
        firstNumber.append('8');
    };

    let numNine = document.getElementById('nine');
    numNine.onclick = function () {
        expression.append('9');
        firstNumber.append('9');
    };

    let numZero = document.getElementById('zero');
    numZero.onclick = function () {
        expression.append(`0`);
        firstNumber.append('0');
    };

    let numPlus = document.getElementById('plus');
    numPlus.onclick = function () {
        expression.append(` + `);
    };

    let numMinus = document.getElementById('minus');
    numMinus.onclick = function () {
        expression.append(` - `);
    };

    let numDivided = document.getElementById('divided');
    numDivided.onclick = function () {
        expression.append(' / ');
    };

    let numTimes = document.getElementById('times');
    numTimes.onclick = function () {
        expression.append(` * `);
    };

    let equals = document.getElementById('equal');
    equals.onclick = function () {
        let answer = expression.innerText;
        console.log(answer);
    };



};
