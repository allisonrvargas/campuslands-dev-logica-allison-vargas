// Ejercicio 037: Estadísticas de Ranking - Arquitectura 3D

function calcularRankingArquitectura(puntajes) {
    if (puntajes.length === 0) {
        return {
            promedio_puntaje: 0,
            puntaje_maximo: 0,
            puntaje_minimo: 0,
            clasificacion: "sin calificar",
            explicacion: "No hay puntajes registrados para este render 3D."
        };
    }

    let sumaPuntajes = 0;
    let maximo = puntajes[0];
    let minimo = puntajes[0];

    for (let i = 0; i < puntajes.length; i++) {
        const puntajeActual = puntajes[i];
        sumaPuntajes += puntajeActual;

        if (puntajeActual > maximo) {
            maximo = puntajeActual;
        }

        if (puntajeActual < minimo) {
            minimo = puntajeActual;
        }
    }

    const promedio = Math.round((sumaPuntajes / puntajes.length) * 100) / 100;

    let clasificacion = "";
    if (promedio >= 90) {
        clasificacion = "render destacado";
    } else if (promedio >= 75) {
        clasificacion = "render competitivo";
    } else {
        clasificacion = "requiere optimizacion";
    }

    return {
        promedio_puntaje: promedio,
        puntaje_maximo: maximo,
        puntaje_minimo: minimo,
        clasificacion: clasificacion,
        explicacion: `De ${puntajes.length} evaluaciones, el promedio fue ${promedio}. El puntaje mas alto fue ${maximo} y el mas bajo ${minimo}.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = calcularRankingArquitectura([85, 92, 78, 95, 88]);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularRankingArquitectura([]);
console.log(resultadoBorde);