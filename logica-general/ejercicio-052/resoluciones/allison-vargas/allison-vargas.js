// Función para comparar y revisar el estado de los insumos o partidos de ping-pong
function revisarPingPong(items, prioridad, regla) {
    // Caso borde: Si no hay elementos en la lista de revisión
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay algo bloqueado (ej. mesa dañada o falta de pelotas)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para iniciar el juego
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}