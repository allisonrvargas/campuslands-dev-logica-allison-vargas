// Función para revisar los pedidos e ingredientes de comida urbana antes de despachar
function revisarComidaUrbana(items, prioridad, regla) {
    // Caso borde: Si la lista de control viene vacía
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Si hay un pedido o insumo bloqueado (ej. falta de ingrediente clave o alerta de entrega)
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Si todos los pedidos están listos para la cocina
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}