var valores = [true, 5, false, "hola", "adios", 2];
if (valores[3] > valores[4]) {
    alert(valores[3] + " es mayor que " + valores[4]);
} else if (valores[3] < valores[4]) {
    alert(valores[4] + " es mayor que " + valores[3]);
} else {
    alert("Ambos tienen la misma longitud");
}

alert("La operacion logica de " + valores[0] + " AND " + valores[2] + " es: " + (valores[0] || valores[2])); 
alert("La operacion logica de " + valores[0] + " OR " + valores[2] + " es: " + valores[0] && valores[2]);

alert("La suma de " + valores[1] + " + " + valores[5] + " es: " + (valores[1] + valores[5]));
alert("La resta de " + valores[1] + " - " + valores[5] + " es: " + (valores[1] - valores[5]));
alert("La multiplicación de " + valores[1] + " * " + valores[5] + " es: " + (valores[1] * valores[5]));
alert("La división de " + valores[1] + " / " + valores[5] + " es: " + (valores[1] / valores[5]));
alert("El resto de " + valores[1] + " % " + valores[5] + " es: " + (valores[1] % valores[5]));