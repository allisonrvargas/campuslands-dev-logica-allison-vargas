// Función para revisar las órdenes de trabajo en el taller mecánico antes de empezar
function revisarTallerMecanico(items, prioridad, regla) {
    // Caso borde: Si no hay órdenes o piezas registradas
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si algo está bloqueado (ej. falta un repuesto o hay peligro de seguridad)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está listo para comenzar la reparación
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}