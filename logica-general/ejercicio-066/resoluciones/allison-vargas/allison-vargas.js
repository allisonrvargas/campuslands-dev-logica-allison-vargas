// Función para gestionar la búsqueda de estados en inventario de hiperdeportivos
function buscarEstadoAutos(items, prioridad, regla) {
    // Caso borde: Si no hay autos registrados en la lista
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un estado bloqueado (ej. motor en revisión o ajuste técnico)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar con la gestión
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}