function calcularPresupuestoViaje(viaje) {
    const { costoBase, numeroPersonas, tasaImpuesto } = viaje;

    if (numeroPersonas <= 0) return { error: "Número de personas inválido" };

    const subtotal = costoBase * numeroPersonas;
    const totalConImpuestos = subtotal * (1 + tasaImpuesto / 100);

    let final = totalConImpuestos;
    if (final > 5000) {
        final *= 0.95;
    }
    
    const presupuestoFinal = Math.round(final);

    return {
        destino: viaje.destino,
        presupuesto_total: presupuestoFinal,
        moneda: "USD"
    };
}