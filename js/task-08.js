const form = document.querySelector("#login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === '' || passwordValue === '') {
        alert("Всі поля повинні бути заповнені");
    } else {
        const formInput = {
            email: emailValue,
            password: passwordValue
        };

        console.log(formInput);
    }
});

