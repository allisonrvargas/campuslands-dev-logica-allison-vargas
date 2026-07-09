function calcularPresupuestoAnimacion(horasRender, precioPorHora) {
    let costoTotal = horasRender * precioPorHora;
    let descuentoAplicado = 0;
    if (horasRender > 100) {
        descuentoAplicado = costoTotal * 0.20;
    } else if (horasRender >= 50) {
        descuentoAplicado = costoTotal * 0.10;
    }

    const presupuestoFinal = costoTotal - descuentoAplicado;

    return {
        horas: horasRender,
        costo_original: costoTotal,
        descuento: descuentoAplicado,
        presupuesto_final: presupuestoFinal.toFixed(2),
        explicacion: `Se aplicó un descuento del ${descuentoAplicado > 0 ? (descuentoAplicado/costoTotal)*100 : 0}% al costo base.`
    };
}
console.log("Caso Normal (60 horas):", calcularPresupuestoAnimacion(60, 50));
console.log("Caso Borde (10 horas):", calcularPresupuestoAnimacion(10, 50));