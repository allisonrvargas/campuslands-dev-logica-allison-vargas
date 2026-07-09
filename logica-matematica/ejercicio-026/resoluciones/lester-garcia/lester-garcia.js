let velocidadKmh = 340;
let tiempoHoras = 2;

let velocidadMs = velocidadKmh / 3.6;
let distancia = velocidadKmh * tiempoHoras;

let categoria = "";

if (velocidadMs >= 90 && distancia >= 600) {
    categoria = "hiperdeportivo extremo";
} else if (velocidadMs >= 80) {
    categoria = "hiperdeportivo";
} else {
    categoria = "deportivo";
}

let explicacion = "se convirtio la velocidad a metros por segundo y se calculo la distancia recorrida para clasificar el vehiculo.";

console.log("velocidad_ms:", velocidadMs);
console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);