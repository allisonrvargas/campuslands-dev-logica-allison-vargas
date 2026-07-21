// Función principal para comparar opciones de partidos de pingpong
function compararPartidos(items, prioridad, regla) {
    if (!validarEntrada(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay partidos en la lista para comparar."
        };
    }

    if (esPrioridadAlta(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el partido tiene un problema."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los partidos, podemos seguir con el torneo."
    };
}

// Funciones pequeñas para organizar mejor
function validarEntrada(items) {
    return items && items.length > 0;
}

function esPrioridadAlta(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}