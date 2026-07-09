function calcularTiempoDibujo(distanciaTotal, velocidadTrazo) {

    if (velocidadTrazo <= 0) {
        return { error: "La velocidad debe ser mayor a 0 para poder dibujar." };
    }
    const tiempoNecesario = distanciaTotal / velocidadTrazo;

    let complejidad = "";
    if (tiempoNecesario > 120) {
        complejidad = "Obra Maestra (Muy complejo)";
    } else if (tiempoNecesario >= 30) {
        complejidad = "Estándar";
    } else {
        complejidad = "Boceto Rápido";
    }

    return {
        tiempo_estimado: `${tiempoNecesario.toFixed(2)} minutos`,
        complejidad: complejidad,
        explicacion: `Para recorrer ${distanciaTotal}px a ${velocidadTrazo}px/min.`
    };
}

// Pruebas
console.log("Caso Normal:", calcularTiempoDibujo(500, 10)); 
console.log("Caso Borde (Velocidad nula):", calcularTiempoDibujo(500, 0));