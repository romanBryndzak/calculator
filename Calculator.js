const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

function valueInput1() {
    let number1 = document.getElementById('num1').value;
    return Number(number1)
}

function valueInput2() {
    let number2 = document.getElementById('num2').value;
    return Number(number2)
}

function action(value) {
    let result;
    if (value === '+') {
        result = valueInput1() + valueInput2()
    } else if (value === '-') {
        result = valueInput1() - valueInput2()
    } else if (value === '*') {
        result = valueInput1() * valueInput2()
    } else if (value === '/') {
        result = valueInput1() / valueInput2()
    }
    window.console.log(result)
}

function onButtonClickPlus() {
    action('+')
}

function onButtonClickMinus() {
    action('-')
}

function onButtonClickMultiply() {
    action('*')
}

function onButtonClickDivide() {
    action('/')
}

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultiply.addEventListener('click', onButtonClickMultiply);
buttonDivide.addEventListener('click', onButtonClickDivide);