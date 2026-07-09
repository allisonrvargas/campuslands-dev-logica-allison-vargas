let golpesDisponibles = ["jab", "cross", "hook"];
let longitudSerie = 3;

let totalCombinaciones = Math.pow(golpesDisponibles.length, longitudSerie);

let intensidad = "";
if (totalCombinaciones > 20) {
    intensidad = "alta complejidad";
} else {
    intensidad = "baja complejidad";
}

console.log("combinaciones_posibles:", totalCombinaciones);
console.log("intensidad:", intensidad);