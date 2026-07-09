/**
 * Analiza una matriz de posiciones 3D para buscar puntos corruptos o fuera de los límites.
 * @param {Array[]} mallaVertices - Matriz bidimensional que representa los puntos de la animación.
 * @returns {Object} - Diagnóstico de los vértices de animación analizados.
 */
function analizarMatrizAnimacion(mallaVertices) {
    // 1. Validación preventiva de la entrada
    if (!mallaVertices || !Array.isArray(mallaVertices) || mallaVertices.length === 0) {
        return {
            estado: "Error de render",
            motivo: "La malla de animación está vacía o no es una cuadrícula válida."
        };
    }

    let puntosFueraDeLimite = 0;
    const posicionesErrores = [];

    // 2. Ciclo anidado para recorrer las filas y columnas de la matriz
    for (let fila = 0; fila < mallaVertices.length; fila++) {
        for (let col = 0; col < mallaVertices[fila].length; col++) {
            const valorZ = mallaVertices[fila][col];

            // Regla de Negocio: Si la profundidad Z pasa de 100 o es menor a -100, la animación se deforma
            if (typeof valorZ !== 'number' || valorZ > 100 || valorZ < -100) {
                puntosFueraDeLimite++;
                posicionesErrores.push(`[Fila ${fila}, Columna ${col}]`);
            }
        }
    }

    // 3. Resultados basados en los errores de la matriz
    if (puntosFueraDeLimite > 0) {
        return {
            estado: "Malla corrupta",
            conteoErrores: puntosFueraDeLimite,
            detalles: `Se encontraron puntos fuera de los límites de animación en: ${posicionesErrores.join(', ')}.`
        };
    }

    return {
        estado: "Render óptimo",
        motivo: "Todos los vértices de la matriz se encuentran dentro de las coordenadas seguras de animación."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Matriz limpia con coordenadas correctas de animación
const cuadriculaCorrecta = [
    [10, 25, -5],
    [40, 0, 15],
    [-8, 50, 30]
];

console.log("--- Caso Normal ---");
console.log(analizarMatrizAnimacion(cuadriculaCorrecta));

// 2. Caso Borde: Matriz que contiene un punto desbordado (500) en la posición [1, 2]
const cuadriculaError = [
    [10, 25, -5],
    [40, 0, 500], // Error aquí
    [-8, 50, 30]
];

console.log("\n--- Caso Borde ---");
console.log(analizarMatrizAnimacion(cuadriculaError));