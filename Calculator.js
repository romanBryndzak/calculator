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
    let sum = valueInput1() + valueInput2();
    console.log(sum);
}

function onButtonClickMinus() {
    let difference = valueInput1() - valueInput2();
    console.log(difference);
}

function onButtonClickMultiply() {
    let result = valueInput1() * valueInput2();
    console.log(result);
}

function onButtonClickDivide() {
    let fraction = valueInput1() / valueInput2();
    console.log(fraction);
}

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultiply.addEventListener('click', onButtonClickMultiply);
buttonDivide.addEventListener('click', onButtonClickDivide);