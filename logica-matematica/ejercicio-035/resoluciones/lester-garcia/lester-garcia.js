let velocidad = 8;
let tiempo = 6;
let pausas = 1;

let distancia = velocidad * tiempo;

let categoria = "";

if (distancia >= 45 && pausas <= 1) {
    categoria = "proyecto rapido";
} else if (distancia >= 30) {
    categoria = "proyecto constante";
} else {
    categoria = "proyecto inicial";
}

let explicacion = "se calculo la distancia recorrida mediante la relacion entre velocidad y tiempo y se evaluo la cantidad de pausas.";

console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);