const inventario = [
    { nombre: "Filtro de Aceite", actual: 5, minimo: 10, maximo: 50, critico: true, descontinuado: false },
    { nombre: "Pastillas de Freno", actual: 3, minimo: 8, maximo: 40, critico: true, descontinuado: false },
    { nombre: "Bujías", actual: 60, minimo: 10, maximo: 50, critico: false, descontinuado: false },
    { nombre: "Carburador Antiguo", actual: 1, minimo: 5, maximo: 10, critico: false, descontinuado: true }
];

let evaluarStock = (repuesto) => {
    if (repuesto.descontinuado) return "Estado: Ignorar (Descontinuado)";
    
    let minAjustado = repuesto.critico ? (repuesto.minimo * 2.0) : repuesto.minimo;
    
    if (repuesto.actual <= minAjustado) return "Alerta: Reposición urgente";
    if (repuesto.actual > repuesto.maximo) return "Alerta: Sobrestock, liberar espacio";
    
    return "Estado: Nivel óptimo";
};

if (inventario.length === 0) {
    console.log("No hay repuestos registrados en el sistema.");
} else {
    inventario.forEach((item) => {
        console.log(`${item.nombre}: ${evaluarStock(item)}`);
    });
}