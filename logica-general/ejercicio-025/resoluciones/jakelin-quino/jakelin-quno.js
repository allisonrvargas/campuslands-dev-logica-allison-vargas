const reparacion = "cambio de aceite";
const esUrgente = false;

let prioridad = "";
let motivo = "";

if (reparacion === "motor" || esUrgente === true) {
    prioridad = "alta";
    motivo = "La reparacion afecta la seguridad o funcionalidad critica.";
} else {
    prioridad = "baja";
    motivo = "Es una tarea de mantenimiento preventivo.";
}

console.log("prioridad:", prioridad);
console.log("motivo:", motivo);