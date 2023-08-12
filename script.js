let number = '';

function inputElement() {

        const element = document.querySelector('input');
        element.value = number;
}



function answer() {
    const elementAnswer = document.querySelector('input');
    elementAnswer.value = eval(number)
}