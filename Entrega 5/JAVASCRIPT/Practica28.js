function Concatenar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nombre_completo = nombre + " " + apellido;
    document.getElementById("nombre_completo").value = nombre_completo;
}
