// Ejercicio 040: Simulaciones con Fórmulas - Comida Urbana

function simularVentaComidaUrbana(racionesPreparadas, costoPorRacion, precioVenta, porcentajeDemanda) {
    if (racionesPreparadas <= 0 || porcentajeDemanda < 0 || porcentajeDemanda > 100) {
        return {
            ganancia_neta: 0,
            raciones_sobrantes: 0,
            clasificacion: "parametros invalidos",
            explicacion: "Las raciones deben ser mayores a 0 y la demanda debe estar entre 0% y 100%."
        };
    }

    if (costoPorRacion >= precioVenta) {
        return {
            ganancia_neta: 0,
            raciones_sobrantes: 0,
            clasificacion: "modelo no rentable",
            explicacion: "El costo de produccion no puede ser mayor o igual al precio de venta."
        };
    }

    const racionesVendidas = Math.floor(racionesPreparadas * (porcentajeDemanda / 100));
    const racionesSobrantes = racionesPreparadas - racionesVendidas;
    const costoTotal = racionesPreparadas * costoPorRacion;
    const ingresos = racionesVendidas * precioVenta;
    const gananciaNeta = ingresos - costoTotal;

    let clasificacion = "";
    if (gananciaNeta > 0) {
        clasificacion = "dia de exito";
    } else if (gananciaNeta === 0) {
        clasificacion = "punto de equilibrio";
    } else {
        clasificacion = "dia de perdidas";
    }

    return {
        ganancia_neta: gananciaNeta,
        raciones_sobrantes: racionesSobrantes,
        clasificacion: clasificacion,
        explicacion: `Se prepararon ${racionesPreparadas} raciones. Con una demanda del ${porcentajeDemanda}%, se vendieron ${racionesVendidas}. La ganancia neta fue de $${gananciaNeta}.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = simularVentaComidaUrbana(50, 2, 5, 80);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = simularVentaComidaUrbana(100, 3, 6, 20);
console.log(resultadoBorde);