function calcularPresupuestoViaje(costoBase, tasaCambio, impuestos) {
    const costoConvertido = costoBase * tasaCambio;
    const totalConImpuestos = costoConvertido * (1 + impuestos);
    const presupuestoFinal = Math.ceil(totalConImpuestos);

    let categoria = "";
    if (presupuestoFinal > 1000) {
        categoria = "Lujo";
    } else if (presupuestoFinal >= 500) {
        categoria = "Turista";
    } else {
        categoria = "Económico";
    }

    return {
        presupuesto_final: presupuestoFinal,
        categoria: categoria,
        explicacion: `Calculado sobre costo base de ${costoBase} con tasa ${tasaCambio} e impuestos del ${impuestos * 100}%.`
    };
}
console.log("Caso Normal:", calcularPresupuestoViaje(120, 4.15, 0.12)); 
console.log("Caso Borde (Costo cero):", calcularPresupuestoViaje(0, 4.15, 0.12));