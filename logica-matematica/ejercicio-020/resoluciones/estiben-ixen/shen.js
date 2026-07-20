function simularTiempoServicio(pedidos, tiempoPreparacion, tiempoDespacho) {
    const tiempoTotal = pedidos * (tiempoPreparacion + tiempoDespacho);
    
    return {
        pedidosProcesados: pedidos,
        tiempoTotalMinutos: tiempoTotal,
        tiempoPromedioPorCliente: tiempoTotal / pedidos
    };
}

const simulacion = simularTiempoServicio(10, 5, 2);
console.log(simulacion);