function calcularRespuestas() {
    var correctas = 0;
    var incorrectas = 0;

    var respuesta1 = document.getElementById("respuesta1").value;
    if (respuesta1 == "Madrid")
        correctas++;
    else
        incorrectas++;

    var respuesta2 = document.getElementById("respuesta2").value;
    if (respuesta2 == "Amazonas")
        correctas++;
    else
        incorrectas++;

    var respuesta3 = document.getElementById("respuesta3").value;
    if (respuesta3 == "Miguel de Cervantes")
        correctas++;
    else
        incorrectas++;

    var respuesta4 = document.getElementById("respuesta4").value;
    if (respuesta4 == "Leonardo da Vinci")
        correctas++;
    else
        incorrectas++;
    
    document.getElementById("correctas").defaultValue = correctas;
    document.getElementById("incorrectas").defaultValue = incorrectas;    
}