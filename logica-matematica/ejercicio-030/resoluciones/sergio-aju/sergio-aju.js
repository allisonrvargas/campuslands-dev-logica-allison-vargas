function calcularCostoPorPasajero(costoTotal, cantidadPasajeros) {
    if (cantidadPasajeros <= 0) return { error: "Debe haber al menos un pasajero." };
    if (costoTotal < 0) return { error: "El costo no puede ser negativo." };
    const costoBruto = costoTotal / cantidadPasajeros;
    const costoFinal = parseFloat(costoBruto.toFixed(2));

    return {
        costo_total: costoTotal,
        pasajeros: cantidadPasajeros,
        costo_por_pasajero: costoFinal,
        explicacion: `Se dividió el costo total entre los pasajeros y se redondeó a 2 decimales.`
    };
}
console.log("Caso Normal:", calcularCostoPorPasajero(1250.50, 3)); 
console.log("Caso Borde (División exacta):", calcularCostoPorPasajero(100, 4)); 