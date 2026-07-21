// Función principal para evaluar las condiciones de paracaidismo antes del salto
function evaluarSalto(items, prioridad, regla) {
    // Caso borde: Si no hay elementos o chequeos en la lista
    if (!items || items.length === 0) {
        return {
            accion: "abortar salto",
            motivo: "no se encontraron chequeos de seguridad registrados en la lista para evaluar."
        };
    }

    // Caso normal: Buscar si existe algún elemento crítico o bloqueado (ej. mal clima, falla de equipo)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla de paracaidismo prioriza riesgos críticos antes de proceder al salto."
        };
    }

    // Flujo por defecto si el equipamiento está en orden
    return {
        accion: "proceder al salto seguro",
        motivo: "no se detectaron bloqueos ni fallas críticas en los sistemas analizados."
    };
}