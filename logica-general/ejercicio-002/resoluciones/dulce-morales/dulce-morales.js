function validarRankingFutsal(equipoEstadisticas) {
    // Caso borde primario: Datos nulos, vacíos o tipos de datos incorrectos
    if (!equipoEstadisticas || typeof equipoEstadisticas !== "object") {
        return {
            datosValidos: false,
            estadoRanking: "error_estructura",
            motivo: "Error de sistema: No se han proporcionado estadísticas válidas para evaluar."
        };
    }

    const { nombre, partidosJugados, partidosGanados, puntosActuales } = equipoEstadisticas;

    // Caso borde secundario: Valores numéricos negativos físicamente imposibles
    if (partidosJugados < 0 || partidosGanados < 0 || puntosActuales < 0) {
        return {
            datosValidos: false,
            estadoRanking: "error_inconsistencia",
            motivo: "Error de validación: Las métricas deportivas no pueden contener valores negativos."
        };
    }

    // Proceso: Evaluar regla de consistencia de partidos (Ganados nunca mayor a Jugados)
    if (partidosGanados > partidosJugados) {
        return {
            datosValidos: false,
            estadoRanking: "error_inconsistencia",
            motivo: "Error de validación: El número de partidos ganados excede los partidos jugados, o la puntuación supera el límite teórico máximo."
        };
    }

    // Evaluar regla de consistencia de puntuación (Máximo 3 puntos por partido jugado)
    const puntosMaximosPosibles = partidosJugados * 3;
    if (puntosActuales > puntosMaximosPosibles) {
        return {
            datosValidos: false,
            estadoRanking: "error_inconsistencia",
            motivo: "Error de validación: El número de partidos ganados excede los partidos jugados, o la puntuación supera el límite teórico máximo."
        };
    }

    // Si pasa todos los filtros de auditoría, los datos son correctos
    return {
        datosValidos: true,
        estadoRanking: "datos_verificados",
        motivo: `Las estadísticas del equipo ${nombre} son matemáticamente consistentes y aptas para actualizar la tabla general.`
    };
}

// Ejecución de pruebas para verificar consola
const equipoCoherente = {
    nombre: "Futsal Campuslands",
    partidosJugados: 5,
    partidosGanados: 3,
    puntosActuales: 10
};

const equipoIncoherente = {
    nombre: "Sporting Ruidoso",
    partidosJugados: 4,
    partidosGanados: 5,
    puntosActuales: 15
};

console.log(validarRankingFutsal(equipoCoherente));   // Caso Normal
console.log(validarRankingFutsal(equipoIncoherente)); // Caso Borde