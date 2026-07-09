let largo = 10;
let ancho = 5;

let area = largo * ancho;
let perimetro = 2 * (largo + ancho);

let tiempoEstimado = 0;

if (area > 40) {
    tiempoEstimado = 120;
} else {
    tiempoEstimado = 60;
}

console.log("area:", area);
console.log("perimetro:", perimetro);
console.log("tiempo_estimado_minutos:", tiempoEstimado);