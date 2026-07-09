const validarDatosFutbolSala = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender planilla", motivo: "Error: Metadatos de la regla o lista de estados del club incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "autorizar registro",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "el registro cumple con las reglas de negocio de la liga y está despejado."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(validarDatosFutbolSala(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(validarDatosFutbolSala(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Club con Fichas de Jugadores en Orden) ---");
console.log(validarDatosFutbolSala(["aprobado", "aprobado"], "media", "auditar alineacion"));