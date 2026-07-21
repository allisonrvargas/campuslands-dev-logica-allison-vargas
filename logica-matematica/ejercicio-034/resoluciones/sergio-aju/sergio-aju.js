function calcularCostoTatuaje(ancho, alto, tipo, esComplejo) {
    if (ancho <= 0 || alto <= 0) return { costo_total: 0, detalle: "Medidas no válidas" };

    let costo = 0;
    if (tipo === "lineal") {
        costo = (2 * (ancho + alto)) * 5;
    } else if (tipo === "relleno") {
        costo = (ancho * alto) * 10;
    }

    if (esComplejo) costo *= 1.30;
    if (costo > 500) costo *= 0.90;

    return { costo_total: parseFloat(costo.toFixed(2)), detalle: "Cálculo realizado con éxito" };
}

// Pruebas
console.log(calcularCostoTatuaje(10, 10, "relleno", false)); // { costo_total: 900, ... }
console.log(calcularCostoTatuaje(0, 5, "lineal", false));    // { costo_total: 0, ... }