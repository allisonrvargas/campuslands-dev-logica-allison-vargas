// Función para revisar los datos del ranking de fútbol sala antes de actualizar posiciones
function revisarRankingFutbolSala(items, prioridad, regla) {
    // Caso borde: Si la lista de control viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un dato bloqueado (ej. equipo sancionado o resultado inválido)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todos los datos están correctos para actualizar la tabla
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}