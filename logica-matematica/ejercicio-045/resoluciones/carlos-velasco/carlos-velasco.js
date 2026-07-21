const evaluarStock = (stock, minimo) => {
    if (stock.length === 0) return { error: "Stock vacío" };

    const stockMinimo = Math.min(...stock);
    const piezasCriticas = stock.filter(item => item < minimo);
    const estado = piezasCriticas.length > 0 ? "Reposición necesaria" : "Stock óptimo";

    return {
        stock_critico: stockMinimo,
        estado_inventario: estado,
        explicacion: `Se detectaron ${piezasCriticas.length} repuestos por debajo del límite.`
    };
};

console.log(evaluarStock([10, 5, 20], 8));
console.log(evaluarStock([15, 20, 25], 8));