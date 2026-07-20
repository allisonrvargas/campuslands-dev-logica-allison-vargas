function calcularPuntajeRanking(participantes, bono, penalizacion) {
    // 1. Validaciones de casos borde
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "La lista de participantes no puede estar vacía." };
    }

    // 2. Proceso y Razonamiento Cuantitativo
    // Encontrar el valor máximo de la lista de participantes para la base de la proporción
    const maxParticipantes = Math.max(...participantes);

    // Calcular el puntaje final aplicando las reglas proporcionales
    let puntajeFinal = maxParticipantes + bono - penalizacion;

    // 3. Definir Clasificación según el resultado
    let clasificacion = "inicial";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    }

    // 4. Salida Esperada
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se determinó el máximo de participantes, se sumó el bono y se restó la penalización según las reglas proporcionales."
    };
}

// === PRUEBAS DEL RETO ===

// Prueba 1: Caso Ejemplo del Enunciado
const participantesEjemplo = [12, 18, 25, 30];
const bonoEjemplo = 8;
const penalizacionEjemplo = 3;
console.log("--- Caso de Prueba Ejemplo ---");
console.log(calcularPuntajeRanking(participantesEjemplo, bonoEjemplo, penalizacionEjemplo));

// Prueba 2: Caso de Prueba Propio (Normal)
const participantesPropio = [10, 15, 20];
const bonoPropio = 5;
const penalizacionPropio = 2;
console.log("\n--- Caso de Prueba Propio ---");
console.log(calcularPuntajeRanking(participantesPropio, bonoPropio, penalizacionPropio));

// Prueba 3: Caso Borde (Valores mínimos / límite)
const participantesBorde = [5];
const bonoBorde = 0;
const penalizacionBorde = 4;
console.log("\n--- Caso de Prueba Borde ---");
console.log(calcularPuntajeRanking(participantesBorde, bonoBorde, penalizacionBorde));