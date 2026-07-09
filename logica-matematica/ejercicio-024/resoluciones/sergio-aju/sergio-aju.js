function analizarInventarioMotos(cantidadActual, capacidadMaxima) {
    if (capacidadMaxima <= 0) return { error: "La capacidad debe ser mayor a 0." };
    if (cantidadActual < 0) return { error: "La cantidad no puede ser negativa." };
    const ocupacion = (cantidadActual / capacidadMaxima) * 100;

    let estado = "";
    if (cantidadActual > capacidadMaxima) {
        estado = "Sobrecapacidad (Alerta: Espacio excedido)";
    } else if (ocupacion >= 90) {
        estado = "Inventario Crítico (Cerca del máximo)";
    } else if (ocupacion >= 50) {
        estado = "Inventario Saludable";
    } else {
        estado = "Reabastecimiento Necesario (Bajo inventario)";
    }

    return {
        ocupacion: `${ocupacion.toFixed(1)}%`,
        estado: estado,
        explicacion: `Con ${cantidadActual} unidades de ${capacidadMaxima} posibles.`
    };
}
console.log("Caso Normal:", analizarInventarioMotos(85, 100)); 
console.log("Caso Borde (Sobrecapacidad):", analizarInventarioMotos(110, 100));