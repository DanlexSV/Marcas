function calcularImporte() {
    // Obtener la pizza seleccionada y su precio
    var pizzaSelect = document.getElementById("pizza");
    var precioPizza = parseFloat(pizzaSelect.options[pizzaSelect.selectedIndex].value);

    // Obtener la cantidad de pizzas
    var cantidadInput = document.getElementById("cantidad");
    var cantidad = parseInt(cantidadInput.value);

    // Calcular el importe total
    var importe = precioPizza * cantidad;

    // Mostrar el importe total en el input correspondiente
    var importeInput = document.getElementById("importe");
    importeInput.value = importe.toFixed(2);
}