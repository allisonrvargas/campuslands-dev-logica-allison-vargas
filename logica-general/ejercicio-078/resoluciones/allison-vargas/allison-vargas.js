// Función principal para gestionar turnos en el taller de soldadura
function gestionarTurnosSoldadura(items, prioridad, regla) {
    if (!validarTurnos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay turnos en la lista para organizar."
        };
    }

    if (esTurnoBloqueado(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este turno primero porque hay un problema de seguridad en la soldadura."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el sistema de turnos, podemos seguir con el trabajo."
    };
}

// Funciones pequeñas para organizar mejor
function validarTurnos(items) {
    return items && items.length > 0;
}

function esTurnoBloqueado(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}