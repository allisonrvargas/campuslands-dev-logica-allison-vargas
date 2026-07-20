// Función para gestionar los estados de los proyectos de dibujo digital
function revisarDibujoDigital(items, prioridad, regla) {
    // Caso borde: Si no hay capas o elementos para procesar
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un archivo bloqueado (ej. error de compatibilidad o capa corrupta)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está en orden para continuar con el trabajo
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}