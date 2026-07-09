function verificarNivelAceite(nivelActual, minSeguro, maxSeguro) {
    if (minSeguro >= maxSeguro) return { error: "El nivel mínimo no puede ser mayor o igual al máximo." };
    if (nivelActual < 0) return { error: "El nivel de aceite no puede ser negativo." };

    let estado = "";
    let accion = "";
    if (nivelActual < minSeguro) {
        estado = "Peligrosamente Bajo";
        accion = "Rellenar inmediatamente";
    } else if (nivelActual > maxSeguro) {
        estado = "Exceso de aceite";
        accion = "Drenar excedente para evitar fugas";
    } else {
        estado = "Nivel Óptimo";
        accion = "Sin acción requerida";
    }

    return {
        nivel: nivelActual,
        estado: estado,
        accion: accion,
        explicacion: `Nivel verificado dentro del rango [${minSeguro}, ${maxSeguro}].`
    };
}
console.log("Caso Normal:", verificarNivelAceite(4.5, 3.0, 5.0)); 
console.log("Caso Borde (Bajo):", verificarNivelAceite(2.0, 3.0, 5.0)); 