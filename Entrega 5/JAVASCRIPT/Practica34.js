function validarEdad() {
    const radioMayor = document.querySelector('input[name="edad"][value="mayor"]');
    if (radioMayor.checked) {
        alert("¡Bienvenido!");
    } else {
        alert("Lo siento, debes ser mayor de 18 años para ingresar a la página.");
    }
}