// Ejercicio 037 - Estadísticas de Ranking
// Autor: Stefani Sánchez

function analizarRanking(puntajes) {
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return {
            error: "Debe ingresar una lista de puntajes válida."
        };
    }

    let suma = 0;
    let mayor = puntajes[0];
    let menor = puntajes[0];

    for (let puntaje of puntajes) {
        suma += puntaje;

        if (puntaje > mayor) {
            mayor = puntaje;
        }

        if (puntaje < menor) {
            menor = puntaje;
        }
    }

    const promedio = suma / puntajes.length;

    let clasificacion = "";

    if (promedio >= 90) {
        clasificacion = "Excelente";
    } else if (promedio >= 70) {
        clasificacion = "Competitivo";
    } else {
        clasificacion = "En desarrollo";
    }

    return {
        promedio: Number(promedio.toFixed(2)),
        mayor,
        menor,
        clasificacion,
        explicacion: "Se calcularon el promedio, el puntaje más alto y el más bajo del ranking."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(analizarRanking([92, 85, 88, 95, 90]));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(analizarRanking([]));