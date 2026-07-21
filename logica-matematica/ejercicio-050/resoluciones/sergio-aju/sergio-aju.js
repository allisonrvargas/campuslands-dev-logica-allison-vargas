function calcularPrecioFinal(costo, impuesto, tasa) {
    if (costo < 0) return "Costo inválido";

    const conImpuesto = costo * (1 + impuesto);
    const convertido = conImpuesto * tasa;

    const precioFinal = Math.round(convertido * 100) / 100;

    return precioFinal.toFixed(2);
}