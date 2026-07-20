const partidasGanadas = 8;
const penalizaciones = 2;

let resultado = "";
let motivo = "";

// Regla: Se necesitan al menos 5 partidas ganadas y máximo 3 penalizaciones
if (partidasGanadas >= 5 && penalizaciones <= 3) {
    resultado = "Avanza a la final";
    motivo = "Cumple con el minimo de victorias y conducta aceptable.";
} else {
    resultado = "Eliminado";
    motivo = "No cumple los requisitos minimos o tiene muchas faltas.";
}

console.log("resultado:", resultado);
console.log("motivo:", motivo);