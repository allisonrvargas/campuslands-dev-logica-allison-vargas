let saquesExitosos = 18;
let totalSaques = 24;
let partidosGanados = 5;

let probabilidad = saquesExitosos / totalSaques;

let categoria = "";

if (probabilidad >= 0.75 && partidosGanados >= 5) {
    categoria = "jugador destacado";
} else if (probabilidad >= 0.6) {
    categoria = "jugador competitivo";
} else {
    categoria = "jugador en desarrollo";
}

let explicacion = "se calculo la probabilidad de exito de los saques y se evaluo junto con la cantidad de partidos ganados.";

console.log("probabilidad:", probabilidad);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);