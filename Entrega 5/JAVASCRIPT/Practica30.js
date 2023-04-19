function convertir() {
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var moneda = document.getElementById("moneda").value;
    var resultado = 0;
    if (moneda == "eurtopes") {
        resultado = cantidad * 166.386;
    } else if (moneda == "pestoeur") {
        resultado = cantidad / 166.386;
    }
    document.getElementById("resultado").value = resultado.toFixed(2);
}
