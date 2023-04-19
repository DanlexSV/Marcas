function validarPassword() {
    const password = document.getElementById("password").value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (regex.test(password)) {
      alert("Password válida");
    } else {
      alert(
        "La password debe tener al menos 8 caracteres, un número, una mayúscula y una minúscula"
      );
    }
  }