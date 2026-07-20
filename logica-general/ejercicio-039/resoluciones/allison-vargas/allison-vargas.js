// Función para revisar el inventario de fórmulas químicas antes de una mezcla
function revisarQuimica(items, prioridad, regla) {
    // Caso borde: Si la lista de control viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un componente bloqueado (ej. reactivo inestable o envase dañado)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todos los compuestos están en orden seguro
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}