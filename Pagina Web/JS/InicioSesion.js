function showLoginBox() {
    const loginBox = document.getElementById('loginBox');
    loginBox.classList.toggle('show');
}

function submitLogin() {
    const loginBox = document.getElementById('loginBox');
    const message = "Bienvenido de nuevo!";
    alert(message);
    loginBox.classList.remove('show');
}
