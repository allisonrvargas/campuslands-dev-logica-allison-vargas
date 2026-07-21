// Función principal para procesar instrucciones de viajes
function procesarInstruccionesViaje(items, prioridad, regla) {
    if (!validarInstrucciones(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay instrucciones de viaje en la lista para procesar."
        };
    }

    if (esInstruccionBloqueada(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esta instrucción primero porque hay un problema con la reserva del viaje."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con las instrucciones, podemos continuar con el itinerario."
    };
}

// Funciones pequeñas para organizar mejor
function validarInstrucciones(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esInstruccionBloqueada(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}