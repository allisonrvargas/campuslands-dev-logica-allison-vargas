// Función principal para organizar los estados de los combates
function organizarCombates(items, prioridad, regla) {
    if (!tieneDatos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay combates en la lista para revisar."
        };
    }

    if (esBloqueado(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el combate tiene un problema."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con la lista, podemos seguir con el entrenamiento."
    };
}

// Funciones pequeñas para separar el problema
function tieneDatos(items) {
    return items && items.length > 0;
}

function esBloqueado(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}