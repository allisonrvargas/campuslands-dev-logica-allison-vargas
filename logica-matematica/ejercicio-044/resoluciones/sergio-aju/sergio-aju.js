function analizarInventario(motos) {
    return motos.map(m => {
        const porcentaje = (m.stockActual / m.stockMaximo) * 100;
        let estado = "";
        if (porcentaje < 20) estado = "Crítico";
        else if (porcentaje > 90) estado = "Sobrecarga";
        else estado = "Óptimo";
        
        return { ...m, porcentaje, estado };
    }).sort((a, b) => b.porcentaje - a.porcentaje);
}
const inventario = [
    {modelo: "Ninja", stockActual: 15, stockMaximo: 20},
    {modelo: "Duke", stockActual: 2, stockMaximo: 20}
];
const resultado = analizarInventario(inventario);
console.log("Moto más saturada:", resultado[0]);