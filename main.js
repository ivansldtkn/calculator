"use strict";

window.onload = function () {

    let expression = document.getElementById('expression');
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let answerNum = document.getElementById('answerNum');

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

// При нажатии на + =============================================================================================

    let plusClicked = false;

    let numPlus = document.getElementById('plus');
    numPlus.onclick = function (event) {
        expression.append(` + `);

        plusClicked = true;

        if (firstNumber.innerText != '') {

            let numOne = document.getElementById('one');
            numOne.onclick = function () {
                secondNumber.append('1');
                expression.append(`1`);
            };

            let numTwo = document.getElementById('two');
            numTwo.onclick = function () {
                secondNumber.append('2');
                expression.append(`2`);
            };

            let numThree = document.getElementById('three');
            numThree.onclick = function () {
                secondNumber.append('3');
                expression.append(`3`);
            };

            let numFour = document.getElementById('four');
            numFour.onclick = function () {
                secondNumber.append('4');
                expression.append(`4`);
            };

            let numFive = document.getElementById('five');
            numFive.onclick = function () {
                secondNumber.append('5');
                expression.append(`5`);
            };

            let numSix = document.getElementById('six');
            numSix.onclick = function () {
                secondNumber.append('6');
                expression.append(`6`);
            };

            let numSeven = document.getElementById('seven');
            numSeven.onclick = function () {
                secondNumber.append('7');
                expression.append(`7`);
            };

            let numEight = document.getElementById('eight');
            numEight.onclick = function () {
                secondNumber.append('8');
                expression.append(`8`);
            };

            let numNine = document.getElementById('nine');
            numNine.onclick = function () {
                secondNumber.append('9');
                expression.append(`9`);
            };

            let numZero = document.getElementById('zero');
            numZero.onclick = function () {
                secondNumber.append('0');
                expression.append(`0`);
            };
        }
    };

// При нажатии на - =======================================================================================

    let minusClicked = false;

    let numMinus = document.getElementById('minus');
    numMinus.onclick = function () {
        expression.append(` - `);
        minusClicked = true;

        if (firstNumber.innerText != '') {

            let numOne = document.getElementById('one');
            numOne.onclick = function () {
                secondNumber.append('1');
                expression.append(`1`);
            };

            let numTwo = document.getElementById('two');
            numTwo.onclick = function () {
                secondNumber.append('2');
                expression.append(`2`);
            };

            let numThree = document.getElementById('three');
            numThree.onclick = function () {
                secondNumber.append('3');
                expression.append(`3`);
            };

            let numFour = document.getElementById('four');
            numFour.onclick = function () {
                secondNumber.append('4');
                expression.append(`4`);
            };

            let numFive = document.getElementById('five');
            numFive.onclick = function () {
                secondNumber.append('5');
                expression.append(`5`);
            };

            let numSix = document.getElementById('six');
            numSix.onclick = function () {
                secondNumber.append('6');
                expression.append(`6`);
            };

            let numSeven = document.getElementById('seven');
            numSeven.onclick = function () {
                secondNumber.append('7');
                expression.append(`7`);
            };

            let numEight = document.getElementById('eight');
            numEight.onclick = function () {
                secondNumber.append('8');
                expression.append(`8`);
            };

            let numNine = document.getElementById('nine');
            numNine.onclick = function () {
                secondNumber.append('9');
                expression.append(`9`);
            };

            let numZero = document.getElementById('zero');
            numZero.onclick = function () {
                secondNumber.append('0');
                expression.append(`0`);
            };
        }
    };

// При нажатии на / ===================================================================================================

    let dividedClicked = false;

    let numDivided = document.getElementById('divided');
    numDivided.onclick = function () {
        expression.append(' / ');
        dividedClicked = true;

        if (firstNumber.innerText != '') {

            let numOne = document.getElementById('one');
            numOne.onclick = function () {
                secondNumber.append('1');
                expression.append(`1`);
            };

            let numTwo = document.getElementById('two');
            numTwo.onclick = function () {
                secondNumber.append('2');
                expression.append(`2`);
            };

            let numThree = document.getElementById('three');
            numThree.onclick = function () {
                secondNumber.append('3');
                expression.append(`3`);
            };

            let numFour = document.getElementById('four');
            numFour.onclick = function () {
                secondNumber.append('4');
                expression.append(`4`);
            };

            let numFive = document.getElementById('five');
            numFive.onclick = function () {
                secondNumber.append('5');
                expression.append(`5`);
            };

            let numSix = document.getElementById('six');
            numSix.onclick = function () {
                secondNumber.append('6');
                expression.append(`6`);
            };

            let numSeven = document.getElementById('seven');
            numSeven.onclick = function () {
                secondNumber.append('7');
                expression.append(`7`);
            };

            let numEight = document.getElementById('eight');
            numEight.onclick = function () {
                secondNumber.append('8');
                expression.append(`8`);
            };

            let numNine = document.getElementById('nine');
            numNine.onclick = function () {
                secondNumber.append('9');
                expression.append(`9`);
            };

            let numZero = document.getElementById('zero');
            numZero.onclick = function () {
                secondNumber.append('0');
                expression.append(`0`);
            };
        }
    };


// При нажатии на * ===================================================================================================

    let timesClicked = false;

    let numTimes = document.getElementById('times');
    numTimes.onclick = function () {
        expression.append(` * `);
        timesClicked = true;

        if (firstNumber.innerText != '') {

            let numOne = document.getElementById('one');
            numOne.onclick = function () {
                secondNumber.append('1');
                expression.append(`1`);
            };

            let numTwo = document.getElementById('two');
            numTwo.onclick = function () {
                secondNumber.append('2');
                expression.append(`2`);
            };

            let numThree = document.getElementById('three');
            numThree.onclick = function () {
                secondNumber.append('3');
                expression.append(`3`);
            };

            let numFour = document.getElementById('four');
            numFour.onclick = function () {
                secondNumber.append('4');
                expression.append(`4`);
            };

            let numFive = document.getElementById('five');
            numFive.onclick = function () {
                secondNumber.append('5');
                expression.append(`5`);
            };

            let numSix = document.getElementById('six');
            numSix.onclick = function () {
                secondNumber.append('6');
                expression.append(`6`);
            };

            let numSeven = document.getElementById('seven');
            numSeven.onclick = function () {
                secondNumber.append('7');
                expression.append(`7`);
            };

            let numEight = document.getElementById('eight');
            numEight.onclick = function () {
                secondNumber.append('8');
                expression.append(`8`);
            };

            let numNine = document.getElementById('nine');
            numNine.onclick = function () {
                secondNumber.append('9');
                expression.append(`9`);
            };

            let numZero = document.getElementById('zero');
            numZero.onclick = function () {
                secondNumber.append('0');
                expression.append(`0`);
            };
        }
    };

// При нажатии на = ===============================================================================================

    let equals = document.getElementById('equal');
    equals.onclick = function () {
        let answer = expression.innerText;
        console.log(answer);
        let first = +firstNumber.innerText;
        let second = +secondNumber.innerText;
        console.log(first);
        console.log(second);

        if (plusClicked == true) {
            answerNum.append(first + second);
        }
        if (minusClicked == true) {
            answerNum.append(first - second);
        }
        if (dividedClicked == true) {
            answerNum.append(first / second);
        }
        if (timesClicked == true) {
            answerNum.append(first * second);
        }
    };

};
