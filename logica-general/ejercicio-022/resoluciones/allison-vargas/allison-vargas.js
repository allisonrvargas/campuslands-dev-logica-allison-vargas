/**
 * Valida la coherencia de los datos de un equipo de fútbol sala para el ranking oficial.
 * @param {Object} estadisticasEquipo - Datos del equipo (nombre, partidosJugados, puntos, golesFavor).
 * @returns {Object} - Resultado de la auditoría de datos.
 */
function validarRankingFutbolSala(estadisticasEquipo) {
    // 1. Validación preventiva inicial de la estructura
    if (!estadisticasEquipo || typeof estadisticasEquipo !== 'object' || Object.keys(estadisticasEquipo).length === 0) {
        return {
            estado: "Rechazado",
            errorDetectado: "Estructura inválida",
            motivo: "No se recibieron las estadísticas del equipo para validar."
        };
    }

    const { nombre, partidosJugados, puntos, golesFavor } = estadisticasEquipo;

    // Regla A: Validación de valores numéricos lógicos (No pueden ser negativos)
    if (partidosJugados < 0 || puntos < 0 || golesFavor < 0) {
        return {
            estado: "Datos Corruptos",
            errorDetectado: "Valores negativos",
            motivo: "El sistema no admite estadísticas con números menores a cero."
        };
    }

    // Regla B: Validación matemática de puntos posibles
    // En fútbol sala, el puntaje máximo por partido es de 3 puntos (si se ganan todos)
    const puntosMaximosPosibles = partidosJugados * 3;
    if (puntos > puntosMaximosPosibles) {
        return {
            estado: "Datos Corruptos",
            errorDetectado: "Incoherencia matemática",
            motivo: `Un equipo con ${partidosJugados} partidos jugados no puede acumular ${puntos} puntos (Máximo posible: ${puntosMaximosPosibles}).`
        };
    }

    // Regla C: Control de datos vacíos en campos obligatorios
    if (!nombre || nombre.trim() === "") {
        return {
            estado: "Datos Incompletos",
            errorDetectado: "Nombre ausente",
            motivo: "El registro carece de una identidad o nombre de equipo válido."
        };
    }

    // Todo está correcto
    return {
        estado: "Aprobado",
        motivo: `Los datos del equipo '${nombre}' son coherentes y están listos para actualizar la tabla del ranking.`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un equipo con estadísticas lógicas y matemáticas correctas
const equipoCorrecto = { nombre: "Los de Siempre FC", partidosJugados: 5, puntos: 12, golesFavor: 18 };

console.log("--- Caso Normal ---");
console.log(validarRankingFutbolSala(equipoCorrecto));

// 2. Caso Borde: Un equipo con más puntos de los que físicamente podría conseguir
const equipoImposible = { nombre: "Fútsal Express", partidosJugados: 2, puntos: 10, golesFavor: 5 }; // Imposible hacer 10 puntos en 2 juegos

console.log("\n--- Caso Borde ---");
console.log(validarRankingFutbolSala(equipoImposible));