let partidosJugados = 20;
let partidosGanados = 12;

let efectividad = (partidosGanados / partidosJugados) * 100;

let categoria = "";

if (efectividad >= 75) {
    categoria = "élite";
} else if (efectividad >= 50) {
    categoria = "competitivo";
} else {
    categoria = "en desarrollo";
}

console.log("efectividad_equipo:", efectividad + "%");
console.log("categoria:", categoria);