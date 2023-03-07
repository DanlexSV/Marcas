var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
    'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numDNI = parseInt(prompt("Introduce el número de DNI"));
var letraDNI = prompt("Introduce la letra del DNI").toUpperCase();

if (numDNI < 0 || numDNI > 99999999) {
  alert("El número de DNI proporcionado no es válido");
} else {
  var resto = numDNI % 23;
  var letraCalculada = letras[resto];

  if (letraDNI != letraCalculada) {
    alert("La letra indicada no es correcta");
  } else {
    alert("El número y la letra de DNI son correctos");
  }
}
