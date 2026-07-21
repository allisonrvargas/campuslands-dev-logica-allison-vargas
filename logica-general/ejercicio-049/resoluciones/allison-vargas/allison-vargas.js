// Función para simular el estado de los archivos de edición en una película de miedo
function revisarPeliculasMiedo(items, prioridad, regla) {
    // Caso borde: Si no hay elementos cargados en la sesión de edición
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un archivo bloqueado (ej. escena con error de render)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está en orden para continuar con el montaje
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}