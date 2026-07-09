function calcularPresupuestoAnimacion(horas, costoPorHora) {
    const subtotal = horas * costoPorHora;
    let descuento = 0;

    // Regla: Descuento por volumen
    if (horas > 100) {
        descuento = 0.20; // 20% de descuento
    } else if (horas > 50) {
        descuento = 0.10; // 10% de descuento
    }

    const total = subtotal * (1 - descuento);

    return {
        horas,
        subtotal: subtotal.toFixed(2),
        descuentoAplicado: (descuento * 100) + "%",
        totalFinal: total.toFixed(2)
    };
}

console.log(calcularPresupuestoAnimacion(120, 50));