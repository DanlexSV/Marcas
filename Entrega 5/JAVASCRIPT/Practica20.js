function valorNumerico (num) {
    var texto = "";
    switch (num) {
        case 1:
            texto = "uno";
            break;
        case 2:
            texto = "dos";
            break;
        case 3:
            texto = "tres";
            break;
        case 4:
            texto = "cuatro";
            break;
        case 5:
            texto = "cinco";
            break;
        default:
            texto = "Valor no valido";
    }
    return texto;
}

var num = parseInt(prompt("Escribe un valor numerico entero entre el 1 y el 5"));
var texto = valorNumerico(num);
alert (texto);