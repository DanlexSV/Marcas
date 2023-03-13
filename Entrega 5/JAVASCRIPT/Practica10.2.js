var vec = [];
var f;

for(f = 0; f < 5; f++) {
    var nro = 1 + (Math.random()*1000);
    vec.push(parseInt(nro));
}

var num;
var veclenght;
num = vec[3] + vec[4];
veclenght = vec.length;

alert ("La suma de los dos ultimos elementos es " + num + ", y el tamaño final del vector es " + veclenght);