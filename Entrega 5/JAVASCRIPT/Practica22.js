function formatDate(dia, mes, anio) {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var fecha = new Date(anio, mes - 1, dia);
    var fechaString = `Hoy es ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    return fechaString;
  }

var dia = prompt("Escriba el dia:");
var mes = prompt("Escriba el mes en formato numérico:");
var anio = prompt("Escriba el año:");

var fechaFormateada = formatDate(dia, mes, anio);
alert (fechaFormateada);