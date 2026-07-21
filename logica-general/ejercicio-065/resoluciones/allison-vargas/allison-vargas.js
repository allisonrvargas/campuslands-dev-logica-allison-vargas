// Función para ordenar prioridades de reparaciones en un taller mecánico
function revisarTallerMecanico(items, prioridad, regla) {
    // Caso borde: Si no hay vehículos o tareas registradas
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos una tarea bloqueada (ej. falta de repuestos críticos)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar con la reparación
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}