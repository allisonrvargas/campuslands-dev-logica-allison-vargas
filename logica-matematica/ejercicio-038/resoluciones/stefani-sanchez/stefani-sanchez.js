// Ejercicio 038 - Normalización de Puntajes
// Autor: Stefani Sánchez

function normalizarPuntajes(puntajes) {
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return {
            error: "Debe ingresar una lista de puntajes."
        };
    }

    const mayor = Math.max(...puntajes);

    if (mayor === 0) {
        return {
            error: "No es posible normalizar cuando todos los puntajes son cero."
        };
    }

    const puntajesNormalizados = puntajes.map(p =>
        Number(((p / mayor) * 100).toFixed(2))
    );

    return {
        puntajesOriginales: puntajes,
        puntajesNormalizados,
        explicacion: "Cada puntaje fue dividido entre el mayor puntaje y multiplicado por 100."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(normalizarPuntajes([65, 80, 95, 70]));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(normalizarPuntajes([0, 0, 0]));