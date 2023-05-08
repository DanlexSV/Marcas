function mostrarPrecio() {
    var pizza = document.getElementById("pizza").value;
    var precio;
    switch(pizza) {
        case "jamonyqueso":
            precio = "$200";
            break;
        case "muzzarella":
            precio = "$150";
            break;
        case "morrones":
            precio = "$180";
            break;
        default:
            precio = "";
    }
    document.getElementById("precio").value = precio;
}