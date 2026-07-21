function gestionarInventarioMotos(modelo, stockActual, stockMinimo, stockMaximo) {
    let estado = "";
    let accion = "";

    if (stockActual < stockMinimo) {
        estado = "Crítico: Desabastecimiento inminente";
        accion = `Solicitar ${stockMaximo - stockActual} unidades`;
    } else if (stockActual > stockMaximo) {
        estado = "Sobreabastecido: Espacio limitado";
        accion = "Detener compras y realizar oferta promocional";
    } else {
        estado = "Nivel óptimo";
        accion = "Mantener stock actual";
    }

    return {
        modelo: modelo,
        estado: estado,
        recomendacion: accion,
        explicacion: `Stock actual: ${stockActual}. Rango permitido: ${stockMinimo}-${stockMaximo}.`
    };
}

console.log("Caso normal:", gestionarInventarioMotos("Yamaha MT-07", 15, 10, 40));
console.log("Caso borde (Crítico):", gestionarInventarioMotos("Honda CB500", 2, 10, 40));