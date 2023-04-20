function mostrarDeportes() {
    var deportesSeleccionados = "";
    var checkboxes = document.getElementsByName("deporte");
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        deportesSeleccionados += checkboxes[i].value + ", ";
      }
    }
  
    if (deportesSeleccionados.length > 0) {
      deportesSeleccionados = deportesSeleccionados.slice(0, -2); // Elimina la última coma y el espacio
      alert("Has seleccionado: " + deportesSeleccionados);
    } else {
      alert("No has seleccionado ningún deporte.");
    }
  }
  