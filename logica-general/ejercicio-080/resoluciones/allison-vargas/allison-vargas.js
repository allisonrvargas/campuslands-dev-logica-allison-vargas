// Función principal para aplicar estrategias de selección en pedidos de comida urbana
function aplicarEstrategiaSeleccion(items, prioridad, regla) {
    if (!validarPedidos(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay pedidos en la lista para seleccionar."
        };
    }

    if (esSeleccionPrioritaria(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este pedido primero por problemas con los ingredientes."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con los pedidos, podemos continuar con la entrega."
    };
}

// Funciones pequeñas para organizar mejor la lógica
function validarPedidos(items) {
    return items && items.length > 0;
}

function esSeleccionPrioritaria(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}