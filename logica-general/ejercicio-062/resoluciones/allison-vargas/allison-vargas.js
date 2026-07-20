// Función para validar estados en el ranking de fútbol sala
function revisarRankingFutbol(items, prioridad, regla) {
    // Caso borde: Si no hay equipos o registros de partidos para evaluar
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un registro bloqueado (ej. alineación indebida o partido no oficial)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para proceder con el ranking
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}