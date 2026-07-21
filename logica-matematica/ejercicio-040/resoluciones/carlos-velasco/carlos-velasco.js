const simularVentas = (inicial, tasa, dias, costoFijo) => {
    let ventasActuales = inicial;
    let totalAcumulado = 0;

    for (let i = 1; i <= dias; i++) {
        totalAcumulado += (ventasActuales - costoFijo);
        ventasActuales *= (1 + tasa);
    }

    const rentabilidad = totalAcumulado > 0 ? "Rentable" : "En pérdida";

    return {
        ganancia_neta_total: totalAcumulado.toFixed(2),
        clasificacion: rentabilidad,
        explicacion: `Simulación de ${dias} días con tasa del ${tasa * 100}% y costo fijo de ${costoFijo}.`
    };
};

console.log(simularVentas(100, 0.1, 5, 80));
console.log(simularVentas(50, 0.05, 3, 70));