const items = ["aprobado", "pendiente", "bloqueado"];
const prioridad = "alta";

let accion = "";
let motivo = "";

let hayBloqueo = false;
for (let i = 0; i < items.length; i++) {
    if (items[i] === "bloqueado") {
        hayBloqueo = true;
    }
}

if (prioridad === "alta" && hayBloqueo) {
    accion = "revisar bloqueado";
    motivo = "la regla prioriza riesgos antes de tareas normales.";
} else {
    accion = "continuar flujo normal";
    motivo = "no se detectaron bloqueos criticos.";
}

console.log("accion:", accion);
console.log("motivo:", motivo);