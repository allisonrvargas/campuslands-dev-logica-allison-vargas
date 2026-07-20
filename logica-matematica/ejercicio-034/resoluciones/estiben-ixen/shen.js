function cotizarTatuaje(ancho, alto, tipo) {
    const area = ancho * alto;
    const perimetro = 2 * (ancho + alto);
    let precioBase = area * 5000;

    const multiplicadores = { lineal: 1, sombreado: 1.3, realismo: 1.6 };
    let costoTotal = precioBase * (multiplicadores[tipo] || 1);

    if (perimetro > 50) {
        costoTotal *= 0.9;
    }

    return {
        area: `${area} cm2`,
        perimetro: `${perimetro} cm`,
        costo_total: new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(costoTotal)
    };
}

console.log("Cotización Lineal:", cotizarTatuaje(5, 5, 'lineal'));
console.log("Cotización Realismo (Grande):", cotizarTatuaje(20, 20, 'realismo'));