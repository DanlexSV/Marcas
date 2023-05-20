function showLoginBox() {
    const loginBox = document.querySelector('.login-box');
    loginBox.classList.toggle('show');

    const loginButton = loginBox.querySelector('a');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        const message = "Bienvenido de nuevo!";
        alert(message);
        loginBox.classList.remove('show');
    });
}

function showRegisterBox() {
    const registerBox = document.querySelector('.register-box');
    registerBox.classList.toggle('show');

    const registerButton = registerBox.querySelector('a');
    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        const pwd1Input = document.getElementById('pwd1');
        const pwd2Input = document.getElementById('pwd2');
        const successMessage = 'Registrado con éxito!';
        const errorMessage = 'La contraseña no coincide';

        if (pwd1Input.value === pwd2Input.value) {
            alert(successMessage);
            registerBox.classList.remove('show');
            resetForm(registerBox);
        } else {
            alert(errorMessage);
        }
    });
}

function resetForm(registerBox) {
    const form = registerBox.querySelector('form');
    form.reset();
}