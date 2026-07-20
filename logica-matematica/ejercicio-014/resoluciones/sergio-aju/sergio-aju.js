function calcularCostoTatuaje(base, altura, precioPorCm2, precioPorCmLineal) {
    if (base <= 0 || altura <= 0) return "Error: Las medidas deben ser mayores a 0";

    const area = base * altura;
    const perimetro = 2 * (base + altura);
    const costoTotal = (area * precioPorCm2) + (perimetro * precioPorCmLineal);
    return {
        area: `${area} cm²`,
        perimetro: `${perimetro} cm`,
        costo_total: `$${costoTotal.toFixed(2)}`,
        explicacion: `Se calculó el área para la tinta y el perímetro para el trazado de líneas.`
    };
}
console.log("Caso Normal:", calcularCostoTatuaje(10, 5, 2.5, 1.5));
console.log("Caso Borde:", calcularCostoTatuaje(1, 1, 2.5, 1.5));