let partidosJugados = 20;
let partidosGanados = 12;

let porcentajeVictoria = (partidosGanados / partidosJugados) * 100;
let nivel = "";

if (porcentajeVictoria >= 70) {
    nivel = "equipo elite";
} else if (porcentajeVictoria >= 50) {
    nivel = "equipo estable";
} else {
    nivel = "equipo en desarrollo";
}

console.log("porcentaje:", porcentajeVictoria + "%");
console.log("nivel:", nivel);