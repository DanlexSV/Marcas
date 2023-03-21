var num;
num = parseInt(prompt("Escribe un número del 0 al 999"));
do {
    if (num >= 0 && num <= 999) {
        var digitos = num.toString().length;
        alert ("El número " + num + " tiene " + digitos);
        num--;
    } else {
        alert ("El número ingresado no está en el rango indicado")
    }
} while (num !== 0);