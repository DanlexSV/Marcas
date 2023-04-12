var String = prompt("Escribe una palabra:");

function PrimeraMitad(cadena) {
    var longitud = cadena.length;
    var mitad = Math.floor(longitud/2);
    var primeraMitad = cadena.substring(0, mitad);
    alert("La primera mitad de la cadena es: " + primeraMitad);
}

function UltimoCaracter(cadena) {
    var ultimocar = cadena.charAt(cadena.length - 1);
    alert("El último caracter de la cadena es: " + ultimocar);
}

function imprimirInversa(cadena) {
    var inversa = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
        inversa += cadena[i];
    }
    alert("La cadena invertida es: " + inversa);
}

function CantidadVocales(cadena) {
    var cantidadVocal = 0;
    var vocales = "aeiouAEIOU"
    for (var i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            cantidadVocal++;
        }
    }
    alert("La cantidad de vocales en la cadena es: " + cantidadVocal);
}

CantidadVocales(String);
PrimeraMitad(String);
UltimoCaracter(String);
imprimirInversa(String);