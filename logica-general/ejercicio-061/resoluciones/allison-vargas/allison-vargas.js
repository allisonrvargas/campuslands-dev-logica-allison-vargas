// Función para gestionar estados en videojuegos competitivos
function revisarVideojuegos(items, prioridad, regla) {
    // Caso borde: Si no hay elementos o jugadores en la lista
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si detectamos un estado bloqueado (ej. cuenta sancionada o error en emparejamiento)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todo está correcto para continuar la partida
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}