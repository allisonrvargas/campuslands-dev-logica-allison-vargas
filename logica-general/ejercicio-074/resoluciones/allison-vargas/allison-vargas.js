// Función principal para diagnosticar estados en el proceso de tatuaje
function diagnosticarTatuaje(items, prioridad, regla) {
    if (!validarDisponibilidad(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay tatuajes en la lista para revisar."
        };
    }

    if (esErrorCritico(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque el diseño tiene un error."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con la sesión, podemos seguir trabajando."
    };
}

// Funciones pequeñas para organizar el diagnóstico
function validarDisponibilidad(items) {
    return items && items.length > 0;
}

function esErrorCritico(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}