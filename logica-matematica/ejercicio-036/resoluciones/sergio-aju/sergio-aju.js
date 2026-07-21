function calcularPresupuestoAnimacion(servicios, descuentoGeneral) {
    const costoTotal = servicios.reduce((acumulador, s) => acumulador + s.precio, 0);
    const montoDescuento = (costoTotal * descuentoGeneral) / 100;
    const totalFinal = costoTotal - montoDescuento;
    let categoria = "";
    if (totalFinal > 1000) categoria = "Producción de Alto Nivel";
    else if (totalFinal > 500) categoria = "Producción Estándar";
    else categoria = "Proyecto Freelance";

    return {
        costo_total: costoTotal,
        descuento_aplicado: montoDescuento,
        total_a_pagar: totalFinal,
        categoria: categoria
    };
}
const proyectoA = [{nombre: 'modelado', precio: 300}, {nombre: 'rigging', precio: 400}];
console.log("Caso Normal:", calcularPresupuestoAnimacion(proyectoA, 10));
console.log("Caso Borde:", calcularPresupuestoAnimacion([], 0));