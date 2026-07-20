function validarReaccionQuimica(masaReactivos, masaProductos, valenciaElemento) {
    const diferenciaMasa = Math.abs(masaReactivos - masaProductos);
    const conservacionValida = diferenciaMasa < 0.01; // Tolerancia mínima

    const valenciaValida = valenciaElemento >= 1 && valenciaElemento <= 4;

    let estado = "";
    if (conservacionValida && valenciaValida) {
        estado = "Reacción equilibrada y estable";
    } else if (!conservacionValida) {
        estado = "Error: Violación de la ley de conservación de masa";
    } else {
        estado = "Error: Valencia fuera de rango de estabilidad";
    }

    return {
        es_posible: conservacionValida && valenciaValida,
        estado: estado,
        diferencia_masa: diferenciaMasa.toFixed(3)
    };
}

console.log("Caso normal:", validarReaccionQuimica(18.02, 18.01, 2));
console.log("Caso borde (masa errónea):", validarReaccionQuimica(18.02, 25.00, 2));