// Función para validar la integridad de componentes en fórmulas químicas
function revisarFormulasQuimicas(items, prioridad, regla) {
    // Caso borde: Si no hay reactivos o componentes registrados
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un elemento bloqueado (ej. reactivo inestable o peligroso)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está seguro para proceder con la combinación
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}