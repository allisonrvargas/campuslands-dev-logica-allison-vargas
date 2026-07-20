// Función principal para resolver casos de seguridad en paracaidismo
function resolverCasoParacaidismo(items, prioridad, regla) {
    if (!estaCompleto(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay casos de seguridad en la lista para revisar."
        };
    }

    if (esSituacionCritica(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque la seguridad es lo más importante."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los chequeos, podemos seguir con el salto."
    };
}

// Funciones pequeñas para organizar mejor
function estaCompleto(items) {
    return items && items.length > 0;
}

function esSituacionCritica(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}