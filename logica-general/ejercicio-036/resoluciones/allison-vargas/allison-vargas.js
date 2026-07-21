// Función para revisar el estado de los fotogramas y renders de la animación 3D
function revisarAnimacion3D(items, prioridad, regla) {
    // Caso borde: Si la lista de chequeo viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un problema bloqueado (ej. error de renderizado o fotograma roto)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está listo para procesar la animación
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}