function encontrarMayor() {
  var num1 = parseInt(prompt("Ingresa el primer número:"));
  var num2 = parseInt(prompt("Ingresa el segundo número:"));
  var num3 = parseInt(prompt("Ingresa el tercer número:"));

  if (num1 > num2 && num1 > num3) {
    alert(`El número mayor es: ${num1}`);
  } else if (num2 > num1 && num2 > num3) {
    alert(`El número mayor es: ${num2}`);
  } else if (num3 > num1 && num3 > num2) {
    alert(`El número mayor es: ${num3}`);
  } else {
    alert("Los números son iguales.");
  }
}


function retornarEnCastellano() {
  var valor = parseInt(prompt("Ingresa un número entre 1 y 5:"));

  switch (valor) {
    case 1:
      alert("Uno");
      break;
    case 2:
      alert("Dos");
      break;
    case 3:
      alert("Tres");
      break;
    case 4:
      alert("Cuatro");
      break;
    case 5:
      alert("Cinco");
      break;
    default:
      alert("El número ingresado no está entre 1 y 5.");
      break;
  }
}


function PerimetroCuadrado() {
  var lado = parseInt(prompt("Ingrese el valor del lado del cuadrado:"));
  var perimetro = 4 * lado;
  alert("El perimetro cuadrado de " + lado + " es: " + perimetro);
}


function censoProvincial() {
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
}