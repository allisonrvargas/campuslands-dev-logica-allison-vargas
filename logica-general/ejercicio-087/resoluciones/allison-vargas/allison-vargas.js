// Función principal para detectar inconsistencias en una playlist
function detectarInconsistenciasPlaylist(items, prioridad, regla) {
    if (!validarPlaylist(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "la playlist no tiene canciones para revisar."
        };
    }

    if (hayInconsistencia(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este track primero porque tiene un problema de metadatos o formato."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con la playlist, las canciones están listas para reproducirse."
    };
}

// Funciones pequeñas para organizar mejor
function validarPlaylist(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function hayInconsistencia(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}