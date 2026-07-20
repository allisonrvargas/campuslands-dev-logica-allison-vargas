function evaluarStockRepuestos(repuestos) {
    const LIMITE_MAXIMO = 50;
    const MINIMO_CRITICO = 5;

    return repuestos.map(item => {
        const estado = item.cantidad <= MINIMO_CRITICO ? "CRÍTICO" : "NORMAL";
        const cantidadAComprar = item.cantidad < LIMITE_MAXIMO 
            ? LIMITE_MAXIMO - item.cantidad 
            : 0;

        return {
            nombre: item.nombre,
            estado,
            cantidadAComprar
        };
    });
}

const inventario = [
    { nombre: "Filtro de Aceite", cantidad: 3 },
    { nombre: "Pastillas de Freno", cantidad: 20 },
    { nombre: "Bujías", cantidad: 50 }
];

console.log(evaluarStockRepuestos(inventario));