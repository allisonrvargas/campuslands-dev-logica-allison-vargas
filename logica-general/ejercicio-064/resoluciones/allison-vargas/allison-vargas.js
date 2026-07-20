// Función para filtrar el inventario de motos según estado
function revisarInventarioMotos(items, prioridad, regla) {
    // Caso borde: Si no hay motos registradas
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos una moto bloqueada (ej. por falla mecánica o falta de documentos)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar con el inventario
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}