function parOImpar(num) {
    if (num % 2 === 0) {
        return (num + " es un numero par");
    } else {
        return (num + " es un numero impar")
    }
}

var numero;
numero = prompt("Escribe un numero entero");
const resultado = parOImpar(numero);

alert(resultado);