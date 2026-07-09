function verificarStockMinimo(producto) {
    // Caso borde: Datos nulos, vacíos o stocks negativos físicamente imposibles
    if (!producto || producto.stockActual < 0 || producto.stockMinimoSeguridad < 0) {
        return {
            alertaCompra: false,
            unidadesPedir: 0,
            estadoAlmacen: "error_stock_negativo"
        };
    }

    const { nombre, stockActual, stockMinimoSeguridad } = producto;

    // Proceso: Evaluar regla de negocio para alertas de compra (Quiebre de stock)
    if (stockActual <= stockMinimoSeguridad) {
        // Fórmula para calcular el lote óptimo a pedir
        const unidadesPedir = (stockMinimoSeguridad * 3) - stockActual;
        
        return {
            alertaCompra: true,
            unidadesPedir: unidadesPedir,
            estadoAlmacen: "solicitar_reabastecimiento"
        };
    }

    return {
        alertaCompra: false,
        unidadesPedir: 0,
        estadoAlmacen: "inventario_estable"
    };
}

// Ejecución de pruebas para verificar consola
console.log(verificarStockMinimo({
    nombre: "Cautín para Soldar ESP32",
    stockActual: 3,
    stockMinimoSeguridad: 10
})); // Caso Normal

console.log(verificarStockMinimo({
    nombre: "Destornillador de Precisión",
    stockActual: -5,
    stockMinimoSeguridad: 5
})); // Caso Borde