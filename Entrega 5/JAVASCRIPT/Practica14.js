function esPalindromo (cadena) {
    var caracteres = cadena.split("");
    var caracteresInvertido = caracteres.reverse();
    var cadenaInvertida = caracteresInvertido.join("");

    if (cadena === cadenaInvertida) {
        return true;
    } else {
        return false;
    }
}

var texto = prompt("Escribe una frase:");
texto = texto.toLowerCase();
if (esPalindromo(texto)){
    alert ("La frase es un Palíndromo");
} else {
    alert ("La frase no es un Palíndromo")
}