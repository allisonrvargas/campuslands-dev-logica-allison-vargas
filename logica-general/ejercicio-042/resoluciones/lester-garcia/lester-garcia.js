const equipo = {
    nombre: "Leones",
    partidosJugados: 12,
    victorias: 8,
    empates: 2,
    derrotas: 2
};

let validacion = "";
let motivo = "";

const totalResultados =
    equipo.victorias + equipo.empates + equipo.derrotas;

if (equipo.partidosJugados <= 0) {
    validacion = "Datos inválidos";
    motivo = "La cantidad de partidos jugados debe ser mayor que cero.";
} else if (totalResultados !== equipo.partidosJugados) {
    validacion = "Datos inválidos";
    motivo = "La suma de victorias, empates y derrotas no coincide con los partidos jugados.";
} else {
    validacion = "Datos válidos";
    motivo = "La información del equipo es consistente para el ranking.";
}

console.log("validacion:", validacion);
console.log("motivo:", motivo);