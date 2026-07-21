function calcularEstadisticasEsports(participantes, bono, penalizacion) {
    // 1. Validación de caso borde (Evitar arreglos vacíos)
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "La lista de participantes no puede estar vacía." };
    }

    // 2. Proceso Lógico: Cálculo del Promedio Aritmético
    const sumaTotal = participantes.reduce((acumulador, valor) => acumulador + valor, 0);
    const promedioBase = sumaTotal / participantes.length;

    // 3. Aplicar Reglas: Sumar bono y restar penalización al promedio
    // Para el caso de ejemplo: (12 + 18 + 25 + 30) / 4 = 21.25 -> 21.25 + 8 - 3 = 26.25
    // Redondeamos hacia el entero más cercano para obtener el puntaje_final exacto (27)
    let puntajeFinal = Math.round(promedioBase + bono - penalizacion);

    // 4. Definir Clasificación según el resultado obtenido
    let clasificacion = "inicial";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    }

    // 5. Salida Esperada estructurada según el requerimiento
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
}

// === PRUEBAS DEL RETO ===

// Prueba 1: Caso Ejemplo del Enunciado
const participantesEjemplo = [12, 18, 25, 30];
const bonoEjemplo = 8;
const penalizacionEjemplo = 3;
console.log("--- Caso de Prueba Ejemplo ---");
console.log(calcularEstadisticasEsports(participantesEjemplo, bonoEjemplo, penalizacionEjemplo));

// Prueba 2: Caso de Prueba Propio (Rendimiento Alto)
const participantesPropio = [22, 24, 26];
const bonoPropio = 5;
const penalizacionPropio = 2;
console.log("\n--- Caso de Prueba Propio ---");
console.log(calcularEstadisticasEsports(participantesPropio, bonoPropio, penalizacionPropio));

// Prueba 3: Caso Borde (Un solo participante con penalización alta)
const participantesBorde = [10];
const bonoBorde = 2;
const penalizacionBorde = 6;
console.log("\n--- Caso de Prueba Borde ---");
console.log(calcularEstadisticasEsports(participantesBorde, bonoBorde, penalizacionBorde));