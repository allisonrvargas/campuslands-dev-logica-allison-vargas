function verificarInventario(inventario) {
    return inventario.map(item => {
        if (item.stockActual < item.stockMinimo) {
            const cantidadCompra = (item.stockMinimo * 2) - item.stockActual;
            const nivel = item.stockActual === 0 ? "Emergencia" : "Reposicion";
            
            return {
                repuesto: item.repuesto,
                accion: nivel,
                cantidad: cantidadCompra
            };
        }
        return { repuesto: item.repuesto, accion: "Stock suficiente" };
    }).filter(i => i.accion !== "Stock suficiente");
}