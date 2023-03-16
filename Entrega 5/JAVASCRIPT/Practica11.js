var nombres = new Array (5);
var i;

for (i = 0; i < 5; i++) {
    nombres[i] = prompt("Introduce un nombre: ");
}

const cadena = nombres.join("<br>");
document.write(cadena);