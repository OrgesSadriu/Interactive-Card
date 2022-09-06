function getData() {
const nameInput = document.querySelector('.name__input').value;
const numberInput = document.querySelector('.number__input').value
const monthInput = document.querySelector('.month__input').value
const yearInput = document.querySelector('.year__input').value
const cvcInput = document.querySelector('.cvc__input').value

let nameInputResult = nameInput + ' ';
document.getElementById ('cardholder__name').textContent = nameInputResult;

let numberInputResult = numberInput + ' ';
document.getElementById('card__number').textContent = numberInputResult; 

let monthInputResult = monthInput + ' ';
document.getElementById ('month').textContent = monthInputResult;

let yearInputResult = yearInput + ' ';
document.getElementById ('year').textContent = yearInputResult;

let cvcInputResult = cvcInput + ' ';
document.getElementById ('cvc__number').textContent = cvcInputResult;


//errors
const name = document.querySelector('.name__input');
    if (!name.checkValidity()) {
        document.getElementById('error').innerHTML = name.validationMessage;
        error.style.color = "red"
    } else {
        document.getElementById('error').innerHTML = ''
    }

const number = document.querySelector('.number__input');
    if (!number.checkValidity()) {
        document.getElementById('error2').innerHTML = number.validationMessage;
        error2.style.color = "red"
    } else {
        document.getElementById('error2').innerHTML = ''
    }

const month = document.querySelector('.month__input');
    if (!month.checkValidity()) {
        document.getElementById('error3').innerHTML = month.validationMessage;
        error3.style.color = "red"
    } else {
        document.getElementById('error3').innerHTML = ''
    }

    const year = document.querySelector('.year__input');
    if (!year.checkValidity()) {
        document.getElementById('error4').innerHTML = year.validationMessage;
        error4.style.color = "red"
    } else {
        document.getElementById('error4').innerHTML = ''
    }


    const cvc = document.querySelector('.cvc__input');
    if (!cvc.checkValidity()) {
        document.getElementById('error5').innerHTML = cvc.validationMessage;
        error5.style.color = "red"
    } else {
        document.getElementById('error5').innerHTML = ''
    }
    
}
