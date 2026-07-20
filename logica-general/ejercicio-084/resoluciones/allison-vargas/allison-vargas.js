// Función principal para aplicar filtros en el inventario de motos
function filtrarInventarioMotos(items, prioridad, regla) {
    if (!validarInventario(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "el inventario de motos está vacío o los datos no son correctos."
        };
    }

    if (esRevisionUrgente(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar este registro primero porque la moto tiene un problema técnico."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con el inventario, las motos están listas para la venta."
    };
}

// Funciones pequeñas para organizar mejor
function validarInventario(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esRevisionUrgente(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}