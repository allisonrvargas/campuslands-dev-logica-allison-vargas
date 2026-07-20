// Función para validar el estado de las reservas en el sistema de viajes
function revisarReservasTurismo(items, prioridad, regla) {
    // Caso borde: Si no hay ninguna reserva registrada
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos una reserva bloqueada (ej. pago pendiente o falta de espacio)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para proceder con la confirmación
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}