function validarPasswords() {
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	if (password1 == password2) {
		alert("Las contraseñas son iguales");
	} else {
		alert("Las contraseñas no son iguales");
	}
}
