function obtenerMayor() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var mayor = (num1 > num2) ? num1 : num2;
    alert("El mayor de los dos números es: " + mayor);
}