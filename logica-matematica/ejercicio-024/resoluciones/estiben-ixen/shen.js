function evaluarInventarioMotos(motos) {
    if (!motos || motos.length === 0) {
        return { cantidad_total: 0, stock_maximo: 0, estado: "inventario vacio" };
    }

    const cantidades = motos.map(m => m.stock);
    const total = cantidades.reduce((a, b) => a + b, 0);
    const maximo = Math.max(...cantidades);
    const modeloMasAbundante = motos.find(m => m.stock === maximo).modelo;

    let estado = "";
    if (maximo > 50) estado = "sobrestock";
    else if (maximo < 5) estado = "critico";
    else estado = "optimo";

    return {
        cantidad_total: total,
        stock_maximo: maximo,
        modelo_destacado: modeloMasAbundante,
        estado: estado
    };
}