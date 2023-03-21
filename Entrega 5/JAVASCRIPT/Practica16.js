var Color = prompt("Escribe ROJO, VERDE ó AZUL:");
Color = Color.toUpperCase();

switch (Color) {
    case "ROJO":
        document.bgColor = '#FF0000';
        break;
    case "VERDE":
        document.bgColor = "#OOFFOO";
        break;
    case "AZUL":
        document.bgColor = "#0000FF";
        break;
    default:
        alert ("Opcion no valida!") 
}