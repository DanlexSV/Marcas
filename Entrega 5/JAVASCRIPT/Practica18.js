function verificarEmail(mail) {
    var contiene_arroba = false;
    for (var i = 0; i < mail.length; i++) {
        if (mail[i] === "@") {
            contiene_arroba = true;
            break;
        }
    }
    return contiene_arroba;
}

var direccion_email = prompt("Ingrese su dirección de correo electronico:");
if (verificarEmail(direccion_email)) {
    alert ("La dirección de correo es válida");
} else {
    alert ("Dirección de correo no válida")
}