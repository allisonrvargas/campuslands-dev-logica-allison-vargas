// Función principal para controlar inventarios lógicos
function controlarInventarioLogico(items, prioridad, regla) {
    if (!tieneStock(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay nada en el inventario para revisar."
        };
    }

    if (esRevisionUrgente(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esto primero porque hay un problema lógico en el inventario."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el inventario, podemos seguir con el resto."
    };
}

// Funciones pequeñas para organizar mejor
function tieneStock(items) {
    return items && items.length > 0;
}

function esRevisionUrgente(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}