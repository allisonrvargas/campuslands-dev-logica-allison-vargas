function ejecutarSeleccionComidaUrbana(datosEntrada) {
    if (!datosEntrada || !Array.isArray(datosEntrada.items)) {
        return { accion: "pausar cocina", motivo: "Lista de pedidos corrupta." };
    }

    const { items, prioridad } = datosEntrada;
    let ordenCriticaEncontrada = false;

    
    for (const pedido of items) { 
        if (pedido === "bloqueado") {
            ordenCriticaEncontrada = true;
            break;
        }
    }

    if (prioridad === "alta" && ordenCriticaEncontrada) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    return {
        accion: "despachar comandas",
        motivo: "Flujo de cocina óptimo, órdenes listas para entrega."
    };
}