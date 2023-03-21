var personas = 0;
var hombres = 0;
var mujeres = 0;
var hombres_edad = 0;

while (true) {
    var doc = prompt("Ingrese el número del documento (0 para salir)")
    if (doc === "0") {
        break;
    }

    var edad = parseInt(prompt("Ingresa una edad"));
    var sexo = prompt("Escribe el sexo \n" + "masculino / femenino").toLowerCase();
    personas++;

    if (sexo === "masculino") {
        hombres++;
        if (edad >= 18 && edad <= 65) {
            hombres_edad++;
        }
    } else {
        mujeres++;
    }
}

alert("Cantidad total de personas censadas: " + personas);
alert("Cantidad de hombres: " + hombres);
alert("Cantidad de hombres de edad entre los 18 y 65: " + hombres_edad);
alert("Cantidad de mujeres: " + mujeres);