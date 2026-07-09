/**
 * Clasifica a un jugador de videojuegos competitivos en su rango correspondiente.
 * @param {Object} perfilJugador - Datos del jugador (partidasGanadas, partidasTotales, cuentaSancionada).
 * @returns {Object} - Rango asignado o estado de la cuenta.
 */
function clasificarRangoVideojuego(perfilJugador) {
    // 1. Validación preventiva de la entrada
    if (!perfilJugador || typeof perfilJugador !== 'object' || Object.keys(perfilJugador).length === 0) {
        return {
            estado: "Error de emparejamiento",
            motivo: "No se recibieron los datos del perfil del jugador para analizar."
        };
    }

    const { partidasGanadas, partidasTotales, cuentaSancionada } = perfilJugador;

    // Regla A: Caso especial de penalización por comportamiento
    if (cuentaSancionada === true) {
        return {
            estado: "Descalificado",
            rango: "Ninguno (Baneado)",
            motivo: "La cuenta tiene reportes activos por mal comportamiento en la comunidad."
        };
    }

    // Validación de seguridad para evitar divisiones por cero
    if (typeof partidasTotales !== 'number' || partidasTotales <= 0) {
        return {
            estado: "Inactivo",
            rango: "Sin clasificar",
            motivo: "El jugador no registra partidas disputadas en la temporada."
        };
    }

    // 2. Cálculo de la tasa de rendimiento (porcentaje de victorias)
    const porcentajeVictorias = (partidasGanadas / partidasTotales) * 100;

    // 3. Clasificación por reglas combinadas de rendimiento
    let rangoAsignado = "";
    if (porcentajeVictorias >= 75) {
        rangoAsignado = "Diamante";
    } else if (porcentajeVictorias >= 50 && porcentajeVictorias < 75) {
        rangoAsignado = "Oro";
    } else {
        rangoAsignado = "Plata";
    }

    return {
        estado: "Clasificación exitosa",
        rango: rangoAsignado,
        motivo: `El jugador tiene un rendimiento del ${porcentajeVictorias.toFixed(1)}% tras ganar ${partidasGanadas} de ${partidasTotales} juegos.`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Jugador limpio con excelente tasa de victorias
const jugadorTop = { partidasGanadas: 80, partidasTotales: 100, cuentaSancionada: false };

console.log("--- Caso Normal ---");
console.log(clasificarRangoVideojuego(jugadorTop));

// 2. Caso Borde: Jugador con buen puntaje pero con cuenta sancionada
const jugadorToxico = { partidasGanadas: 90, partidasTotales: 100, cuentaSancionada: true };

console.log("\n--- Caso Borde ---");
console.log(clasificarRangoVideojuego(jugadorToxico));