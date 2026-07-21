// Ejercicio 036 - Presupuestos y Descuentos
// Autor: Stefani Sánchez

function calcularPresupuesto(presupuesto, descuento) {
    if (presupuesto < 0 || descuento < 0 || descuento > 100) {
        return {
            error: "Los datos ingresados no son válidos."
        };
    }

    const montoDescuento = presupuesto * (descuento / 100);
    const total = presupuesto - montoDescuento;

    let clasificacion = "";

    if (descuento === 0) {
        clasificacion = "Sin descuento";
    } else if (descuento <= 20) {
        clasificacion = "Descuento bajo";
    } else if (descuento <= 50) {
        clasificacion = "Descuento medio";
    } else {
        clasificacion = "Descuento alto";
    }

    return {
        presupuesto,
        descuento,
        total: Number(total.toFixed(2)),
        clasificacion,
        explicacion: "Se aplicó el porcentaje de descuento al presupuesto inicial."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(calcularPresupuesto(2500, 20));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(calcularPresupuesto(2500, 120));