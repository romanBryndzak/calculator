const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

function valueInput1() {
    let number1 = document.getElementById('num1').value;
    return Number(number1);
}

function valueInput2() {
    let number2 = document.getElementById('num2').value;
    return Number(number2);
}

function onButtonClickPlus() {
    let num1 = valueInput1();
    let num2 = valueInput2();

    let sum = num1 + num2;
    console.log(sum);
}

function onButtonClickMinus() {
    let num1 = valueInput1();
    let num2 = valueInput2();

    let difference = num1 - num2;
    console.log(difference);
}

function onButtonClickMultiply() {
    let num1 = valueInput1();
    let num2 = valueInput2();

    let result = num1 * num2;
    console.log(result);
}

function onButtonClickDivide() {
    let num1 = valueInput1();
    let num2 = valueInput2();

    let fraction = num1 / num2;
    console.log(fraction);
}

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultiply.addEventListener('click', onButtonClickMultiply);
buttonDivide.addEventListener('click', onButtonClickDivide);
