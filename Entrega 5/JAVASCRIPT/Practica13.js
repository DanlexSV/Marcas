function analizarCadena (cadena) {
    var mayusculas = cadena.toUpperCase();
    var minusculas = cadena.toLowerCase();

    if (cadena === mayusculas) {
        alert ("La cadena está formada solo de mayusculas");
    } else if (cadena === minusculas) {
        alert ("La cadena está formada solo de minusculas");
    } else {
        alert ("La cadena está formada de mayusculas y minusculas")
    }
}

var texto;
texto = prompt ("Escribe una frase:");
analizarCadena(texto);