/**
 * Función integradora para la selección de pedidos en comida urbana.
 * Evalúa los estados de preparación para optimizar el servicio.
 */
function seleccionarPedidoUrbano(items, prioridad, regla) {
    if (!validarPedidos(items)) {
        return {
            accion: "pausar cocina",
            motivo: "la lista de pedidos es inválida o no hay órdenes activas."
        };
    }

    const hayBloqueados = items.includes("bloqueado");
    
    // Regla de negocio: Los pedidos bloqueados (por falta de ingredientes o error) 
    // siempre van primero para no detener la operación general.
    if (regla === "revisar bloqueados primero" && hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza la resolución de pedidos con inconsistencias antes de continuar con el despacho."
        };
    }

    return {
        accion: "despachar pedido",
        motivo: "los pedidos están aprobados y listos para ser entregados al cliente."
    };
}

function validarPedidos(items) {
    return Array.isArray(items) && items.length > 0;
}