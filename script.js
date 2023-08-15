let number = '';
const buttonStylePlus = document.getElementById('buttonStylePlus')
const buttonStyleMinus = document.getElementById('buttonStyleMinus')
const buttonStyleX = document.getElementById('buttonStyleX')
const buttonStyle = document.getElementById('buttonStyle')
function inputElement() {

    const element = document.querySelector('input');
    element.value = number;
}

function buttonFunc() {


    buttonStylePlus.disabled = true;
    if (number === '') {
        buttonStylePlus.disabled = false;
    } else {
        setTimeout(() => {
            buttonStylePlus.disabled = false;
        }, 100000);
    }

    buttonStyleMinus.disabled = true;
    if (number === '') {
        buttonStyleMinus.disabled = false;
    } else {
        setTimeout(() => {
            buttonStyleMinus.disabled = false;
        }, 100000);
    }

    buttonStyleX.disabled = true;
    if (number === '') {
        buttonStyleX.disabled = false;
    } else {
        setTimeout(() => {
            buttonStyleX.disabled = false;
        }, 100000);
    }

    buttonStyle.disabled = true;
    if (number === '') {
        buttonStyle.disabled = false;
    } else {
        setTimeout(() => {
            buttonStyle.disabled = false;
        }, 100000);
    }

}

function answer() {
    const elementAnswer = document.querySelector('input');
    elementAnswer.value = eval(number);
}
