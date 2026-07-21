// Función principal para la toma de decisiones en el torneo de esports
function tomarDecisionTorneo(items, prioridad, regla) {
    if (!validarEntradas(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay estados de partida en la lista para tomar decisiones."
        };
    }

    if (esSituacionDePrioridad(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este estado primero porque el torneo tiene un bloqueo técnico."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el torneo, podemos continuar con las partidas."
    };
}

// Funciones pequeñas para organizar la lógica
function validarEntradas(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esSituacionDePrioridad(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}