function desaparecer(elemento) {
    elemento.style.display = "none";
  }

  function mostrar(elemento) {
    elemento.style.display = "block";
  }

  function mostrarTodo() {
    var boton = document.getElementById("boton");
    var caja = document.getElementById("caja");
    var texto = document.getElementById("texto");

    mostrar(boton);
    mostrar(caja);
    mostrar(texto);
}