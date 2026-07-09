function calcularCostoFinal(precioBase, tasaImpuesto) {
    const costoConImpuesto = precioBase * (1 + tasaImpuesto);
    
    // Regla: Redondear siempre hacia arriba al entero más cercano
    // para cubrir costos operativos mínimos
    const costoFinal = Math.ceil(costoConImpuesto);
    
    return {
        precioOriginal: precioBase,
        impuestoAplicado: (tasaImpuesto * 100).toFixed(1) + "%",
        costoFinal: costoFinal
    };
}

const reserva = { precioBase: 1250.75, tasaImpuesto: 0.16 };
console.log(calcularCostoFinal(reserva.precioBase, reserva.tasaImpuesto));