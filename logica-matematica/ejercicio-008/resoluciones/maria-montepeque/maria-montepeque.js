//Ejercicio 008: Patrones de Puntuación - Películas de Ciencia Ficción

function analizarPatronesPuntuacion(catalogo) {
    // 1. Validación Defensiva Inicial
    if (!Array.isArray(catalogo) || catalogo.length === 0) {
        return {
            estado: "Error",
            motivo: "El catálogo de películas de ciencia ficción se encuentra vacío o es inválido."
        };
    }

    let sumaTotal = 0;
    let incrementos = 0;
    let decrementos = 0;
    let empates = 0;
    let totalPeliculasValidas = 0;
    let puntuacionAnterior = null;

    // 2. Procesamiento Single-Pass O(N): Filtrado, validación y métricas en un solo ciclo
    for (let i = 0; i < catalogo.length; i++) {
        const pelicula = catalogo[i];

        if (!pelicula || typeof pelicula !== "object") continue;

        const score = Number(pelicula.puntuacion);

        if (isNaN(score) || score < 0 || score > 10) {
            return {
                estado: "Error",
                motivo: "Las puntuaciones individuales deben ser valores numéricos dentro de la escala de 0 a 10."
            };
        }

        sumaTotal += score;
        totalPeliculasValidas++;

        if (puntuacionAnterior !== null) {
            if (score > puntuacionAnterior) {
                incrementos++;
            } else if (score < puntuacionAnterior) {
                decrementos++;
            } else {
                empates++;
            }
        }

        puntuacionAnterior = score;
    }

    if (totalPeliculasValidas === 0) {
        return {
            estado: "Error",
            motivo: "El catálogo no contiene registros de películas válidos."
        };
    }

    // 3. Operaciones aritméticas controladas de promedio general
    const promedioGeneral = Math.round((sumaTotal / totalPeliculasValidas) * 100) / 100;

    // 4. Determinación estricta y simétrica del patrón secuencial
    let patronDetectado = "Fluctuación Inestable";
    const totalComparaciones = totalPeliculasValidas - 1;

    if (totalPeliculasValidas > 1) {
        if (incrementos === totalComparaciones) {
            patronDetectado = "Saga en Mejora Progresiva (Efecto Secuela Perfecta)";
        } else if (decrementos === totalComparaciones) {
            patronDetectado = "Saga en Declive Progresivo (Fatiga de Franquicia)";
        } else if (empates === totalComparaciones) {
            patronDetectado = "Saga de Calidad Homogénea (Estabilidad Absoluta)";
        } else if (incrementos > decrementos) {
            patronDetectado = "Tendencia General Positiva";
        } else if (decrementos > incrementos) {
            patronDetectado = "Tendencia General Negativa";
        }
    } else {
        patronDetectado = "Muestra Unitaria (Sin patrón de comparación)";
    }

    // 5. Clasificación categórica basada en el promedio ponderado
    let clasificacionSaga = "Poco valorada";
    if (promedioGeneral >= 8.5) {
        clasificacionSaga = "Saga de Culto / Obra Maestra Sci-Fi";
    } else if (promedioGeneral >= 6.5) {
        clasificacionSaga = "Éxito Comercial / Aceptación Estable";
    }

    // 6. Retorno estructurado del informe técnico analítico
    return {
        analisCuantitativo: {
            totalEntregas: totalPeliculasValidas,
            promedioPuntuacion: promedioGeneral,
            clasificacion: clasificacionSaga
        },
        patronSecuencial: {
            patron: patronDetectado,
            metricas: { 
                cambiosPositivos: incrementos, 
                cambiosNegativos: decrementos,
                sinCambios: empates
            }
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 008 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Mejora Progresiva",
        catalogo: [
            { titulo: "Ciberespacio Origin", puntuacion: 7.2 },
            { titulo: "Ciberespacio: El Despertar", puntuacion: 8.5 },
            { titulo: "Ciberespacio: Revolución Final", puntuacion: 9.6 }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Fluctuación Inestable",
        catalogo: [
            { titulo: "Crisis Temporal 1", puntuacion: 9.0 },
            { titulo: "Crisis Temporal 2", puntuacion: 5.4 },
            { titulo: "Crisis Temporal 3", puntuacion: 8.2 }
        ]
    },
    {
        tipo: "Caso Crítico Detectado - Estabilidad Absoluta (Varianza Cero)",
        catalogo: [
            { titulo: "Matrix Alfa", puntuacion: 8.0 },
            { titulo: "Matrix Beta", puntuacion: 8.0 },
            { titulo: "Matrix Gamma", puntuacion: 8.0 }
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Inyección de Elemento Nulo Intermedio",
        catalogo: [
            { titulo: "Star Voyage I", puntuacion: 7.0 },
            null, 
            { titulo: "Star Voyage II", puntuacion: 8.5 }
        ]
    },
    {
        tipo: "Caso Borde 2 (Guía) - Límite Fuera de Rango",
        catalogo: [{ titulo: "Viaje Infinito", puntuacion: 11.5 }]
    },
    {
        tipo: "Caso Borde 3 (Guía) - Catálogo Vacío",
        catalogo: []
    }
];

pruebas.forEach(({ tipo, catalogo }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarPatronesPuntuacion(catalogo), null, 2));
});