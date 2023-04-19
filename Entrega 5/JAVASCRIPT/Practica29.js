function calcularCubo() {
    var base = parseInt(document.getElementById("base").value);
    var exponente = parseInt(document.getElementById("exponente").value);
    var resultado = Math.pow(base, exponente);
    alert("El resultado de elevar " + base + " al exponente " + exponente + " es: " + resultado);
}
