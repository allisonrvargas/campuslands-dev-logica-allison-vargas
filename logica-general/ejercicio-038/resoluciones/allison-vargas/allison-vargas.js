// Función para revisar el estado del taller de soldadura antes de iniciar el turno
function revisarSoldadura(items, prioridad, regla) {
    // Caso borde: Si la lista de control viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un problema bloqueado (ej. falta de gas o equipo de protección dañado)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está seguro para iniciar a soldar
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}