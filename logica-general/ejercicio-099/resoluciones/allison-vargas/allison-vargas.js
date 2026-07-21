/**
 * Función integradora para gestionar el inventario de fórmulas químicas.
 * Aplica reglas de seguridad sobre los estados de las fórmulas.
 */
function gestionarInventarioQuimico(items, prioridad, regla) {
    if (!validarInventario(items)) {
        return {
            accion: "detener operacion",
            motivo: "el inventario de fórmulas está vacío o presenta errores de carga."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    // Regla: Priorizar sustancias bloqueadas por seguridad o inestabilidad
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la inspección de sustancias bloqueadas (inestables) para evitar reacciones peligrosas."
        };
    }

    return {
        accion: "continuar mezcla",
        motivo: "todos los componentes de la fórmula están aprobados y seguros para su uso."
    };
}

function validarInventario(items) {
    return Array.isArray(items) && items.length > 0;
}