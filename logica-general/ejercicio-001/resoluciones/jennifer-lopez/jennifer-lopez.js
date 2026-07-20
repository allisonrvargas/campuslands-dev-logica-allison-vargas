// 1. Definimos los datos de entrada 
let items = ["aprobado", "pendiente", "bloqueado"];
let prioridad = "alta";
let regla = "revisar bloqueados primero";

// Variables para guardar la respuesta
let accion = "";
let motivo = "";

// Aplicacion de las reglas con condiciones claras
if (regla === "revisar bloqueados primero" && prioridad === "alta") {
    
    if (items.includes("bloqueado")) {
        accion = "revisar bloqueado";
        motivo = "la regla prioriza riesgos antes de tareas normales.";
    } else if (items.includes("pendiente")) {
        accion = "revisar pendiente";
        motivo = "no hay elementos bloqueados, se atiende lo siguiente en la lista.";
    } else {
        accion = "ninguna";
        motivo = "todos los items estan al dia.";
    }

} else {
    accion = "revisar normal";
    motivo = "no hay una regla de alta prioridad activa.";
}

// resutado final
console.log("accion:", accion);
console.log("motivo:", motivo);