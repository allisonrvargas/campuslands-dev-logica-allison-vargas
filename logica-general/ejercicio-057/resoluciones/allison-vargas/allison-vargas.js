// Función para validar estados en proyectos de arquitectura 3D
function revisarArquitectura3D(items, prioridad, regla) {
    // Caso borde: Si no hay elementos o planos en la lista
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos una estructura o plano bloqueado (ej. error de cálculo estructural)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar con el modelado
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}