function mostrarDatos() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comentarios = document.getElementById("comentarios").value;

    alert(`Nombre: ${nombre}\nEmail: ${email}\nComentarios: ${comentarios}`);
}
