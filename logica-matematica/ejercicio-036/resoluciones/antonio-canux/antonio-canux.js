// Ejercicio 036: Presupuestos y Descuentos - Animación 3D

function calcularPresupuestoAnimacion(segundosAnimacion, precioBasePorSegundo) {
    if (segundosAnimacion <= 0 || precioBasePorSegundo <= 0) {
        return {
            costo_base: 0,
            descuento_porcentaje: 0,
            costo_final: 0,
            clasificacion: "datos invalidos",
            explicacion: "El tiempo de animacion y el precio base deben ser mayores a cero."
        };
    }

    const costoBase = segundosAnimacion * precioBasePorSegundo;

    let porcentajeDescuento = 0;
    let clasificacion = "";

    if (segundosAnimacion > 60) {
        porcentajeDescuento = 15;
        clasificacion = "proyecto mayor";
    } else if (segundosAnimacion >= 30) {
        porcentajeDescuento = 10;
        clasificacion = "proyecto estandar";
    } else {
        porcentajeDescuento = 0;
        clasificacion = "proyecto corto";
    }

    const montoDescuento = costoBase * (porcentajeDescuento / 100);
    const costoFinal = costoBase - montoDescuento;

    return {
        costo_base: costoBase,
        descuento_porcentaje: porcentajeDescuento,
        costo_final: costoFinal,
        clasificacion: clasificacion,
        explicacion: `Para ${segundosAnimacion} segundos a $${precioBasePorSegundo} c/u, el costo base es $${costoBase}. Se aplica un descuento del ${porcentajeDescuento}%, dejando el total en $${costoFinal}.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = calcularPresupuestoAnimacion(45, 50);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularPresupuestoAnimacion(0, 30);
console.log(resultadoBorde);