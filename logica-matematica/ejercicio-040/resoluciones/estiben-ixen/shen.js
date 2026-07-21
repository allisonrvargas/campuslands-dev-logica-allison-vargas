function simularPuestoComida(costoInsumos, precioVenta, unidadesVendidas, horasTrabajadas) {
    const margenUnitario = precioVenta - costoInsumos;
    const gananciaTotal = margenUnitario * unidadesVendidas;

    const demandaHora = unidadesVendidas / horasTrabajadas;
    let bonoEficiencia = 0;

    if (demandaHora > 20) {
        bonoEficiencia = gananciaTotal * 0.10;
    }

    const esArriesgado = (costoInsumos / precioVenta) > 0.6;

    const gananciaFinal = gananciaTotal + bonoEficiencia;

    return {
        ganancia_final: parseFloat(gananciaFinal.toFixed(2)),
        es_rentable: gananciaFinal > 0 && !esArriesgado,
        explicacion: `Simulación completada. Demanda de ${demandaHora.toFixed(1)} unidades/hora.`
    };
}

console.log("Caso normal:", simularPuestoComida(2, 5, 100, 4));
console.log("Caso borde (alto costo):", simularPuestoComida(4, 5, 100, 4));