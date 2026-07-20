let puntuaciones = [78, 92, 85, 88, 95];

let mayor = puntuaciones[0];
let menor = puntuaciones[0];
let suma = 0;

for (let i = 0; i < puntuaciones.length; i++) {
    suma += puntuaciones[i];

    if (puntuaciones[i] > mayor) {
        mayor = puntuaciones[i];
    }

    if (puntuaciones[i] < menor) {
        menor = puntuaciones[i];
    }
}

let promedio = suma / puntuaciones.length;

let categoria = "";

if (promedio >= 85) {
    categoria = "proyecto destacado";
} else {
    categoria = "proyecto en progreso";
}

let explicacion = "se calcularon el promedio, la puntuacion maxima y la minima para evaluar el ranking.";

console.log("promedio:", promedio);
console.log("puntuacion_maxima:", mayor);
console.log("puntuacion_minima:", menor);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);