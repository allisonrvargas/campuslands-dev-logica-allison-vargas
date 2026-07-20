// Función principal para clasificar estados en videojuegos competitivos
function clasificarPartidas(items, prioridad, regla) {
    if (!validarPartidas(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay partidas en la lista para clasificar."
        };
    }

    if (esPartidaBloqueada(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este registro de juego primero porque tiene un error de conexión."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el historial, podemos continuar con el torneo."
    };
}

// Funciones pequeñas para organizar mejor
function validarPartidas(items) {
    return items && items.length > 0;
}

function esPartidaBloqueada(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}