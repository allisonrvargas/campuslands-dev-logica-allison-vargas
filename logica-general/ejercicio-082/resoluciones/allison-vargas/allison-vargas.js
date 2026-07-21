// Función principal para validar datos en el ranking de fútbol sala
function validarRankingFutbol(items, prioridad, regla) {
    if (!estanDatosCorrectos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "los datos del ranking no son válidos o están vacíos."
        };
    }

    if (hayProblemaEnRanking(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este registro primero porque tiene una inconsistencia en el puntaje."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los datos, el ranking está actualizado correctamente."
    };
}

// Funciones pequeñas para organizar mejor
function estanDatosCorrectos(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function hayProblemaEnRanking(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}