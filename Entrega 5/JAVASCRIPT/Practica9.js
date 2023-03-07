var num = parseInt(prompt("Introduce un número entero para calcular su factorial"));
var factorial = 1;

for (var i = num; i > 0; i--){
    factorial *= i;
}

alert ("El factorial de " + num + " es " + factorial);
