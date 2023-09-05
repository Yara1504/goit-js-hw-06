const inputString = document.querySelector('#validation-input');
const lengthInput = document.querySelector('[data-length]');

inputString.addEventListener('blur', function () {
    const inputElement = inputString.value;
    const length = parseInt(lengthInput.getAttribute('data-length'));

    if (inputElement.length === length) {
        inputString.classList.add('valid');
    } else {
        inputString.classList.remove('valid');
        inputString.classList.add('invalid');
    }
});