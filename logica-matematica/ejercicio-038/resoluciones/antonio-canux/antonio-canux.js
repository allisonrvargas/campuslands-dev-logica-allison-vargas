// Ejercicio 038: Normalización de Puntajes - Soldadura

function normalizarPruebaSoldadura(resistenciaMedida, resistenciaMinima, resistenciaMaxima) {
    if (resistenciaMinima >= resistenciaMaxima) {
        return {
            puntaje_normalizado: 0,
            clasificacion: "error de configuracion",
            explicacion: "El rango maximo debe ser estrictamente mayor al minimo."
        };
    }

    let puntaje = 0;

    if (resistenciaMedida <= resistenciaMinima) {
        puntaje = 0; // La soldadura falló antes del mínimo aceptable
    } else if (resistenciaMedida >= resistenciaMaxima) {
        puntaje = 100; // La soldadura superó el límite teórico, calificación perfecta
    } else {
        const proporcion = (resistenciaMedida - resistenciaMinima) / (resistenciaMaxima - resistenciaMinima);
        puntaje = proporcion * 100;
    }

    const puntajeRedondeado = Math.round(puntaje * 100) / 100;

    let clasificacion = "";
    if (puntajeRedondeado >= 90) {
        clasificacion = "soldadura certificada";
    } else if (puntajeRedondeado >= 60) {
        clasificacion = "soldadura aceptable";
    } else {
        clasificacion = "soldadura defectuosa";
    }

    return {
        puntaje_normalizado: puntajeRedondeado,
        clasificacion: clasificacion,
        explicacion: `Con una resistencia de ${resistenciaMedida} MPa en un rango de ${resistenciaMinima}-${resistenciaMaxima} MPa, el puntaje escalado es ${puntajeRedondeado}/100.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = normalizarPruebaSoldadura(450, 300, 500);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = normalizarPruebaSoldadura(250, 300, 500);
console.log(resultadoBorde);