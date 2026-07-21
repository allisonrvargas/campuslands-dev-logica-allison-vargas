let x1 = 10;
let y1 = 15;
let x2 = 28;
let y2 = 39;

let diferenciaX = x2 - x1;
let diferenciaY = y2 - y1;

let distancia = Math.sqrt(diferenciaX ** 2 + diferenciaY ** 2);

let categoria = "";

if (distancia >= 30 && x2 > x1 && y2 > y1) {
    categoria = "salto avanzado";
} else if (distancia >= 20) {
    categoria = "salto intermedio";
} else {
    categoria = "salto basico";
}

let explicacion = "se calculo la distancia entre dos coordenadas y se evaluo la direccion del desplazamiento para clasificar el salto.";

console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);