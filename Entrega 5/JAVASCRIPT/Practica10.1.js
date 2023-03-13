var frase = prompt("Escriba una frase nueva:");
var palabras = frase.split(" ");
var mensaje = "";

for (i in palabras){
    mensaje += palabras[i] + "\n";
}

alert(mensaje);