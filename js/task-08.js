const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector("#login-form");

const emailValue = emailInput.value;
const passwordValue = passwordInput.value;

if (emailValue === '' || passwordValue === '') {
    alert("Всі поля повинні бути заповнені");
    }
 formInput = {
    email: emailValue,
    password: passwordValue
 }

console.log(formInput);

form.addEventListener("submit", (event) => {
    event.preventDefault();
});



