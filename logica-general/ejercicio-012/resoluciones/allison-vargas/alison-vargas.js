/**
 * Compara el rendimiento de dos jugadores de pingpong para determinar el ganador.
 * @param {Object} jugadorA - Datos del primer jugador (nombre, puntos).
 * @param {Object} jugadorB - Datos del segundo jugador (nombre, puntos).
 * @returns {Object} - Resultado de la comparación con el ganador o estado de empate.
 */
function compararPartidaPingpong(jugadorA, jugadorB) {
    // 1. Validación preventiva de las entradas
    if (!jugadorA || !jugadorB || typeof jugadorA.puntos !== 'number' || typeof jugadorB.puntos !== 'number') {
        return {
            resultado: "Partida inválida",
            motivo: "Faltan datos de los jugadores o los puntajes no son números válidos."
        };
    }

    // 2. Aplicación de reglas de negocio (Comparación de opciones)
    if (jugadorA.puntos > jugadorB.puntos) {
        return {
            resultado: "Ganador definido",
            campeon: jugadorA.nombre,
            motivo: `${jugadorA.nombre} anotó más puntos en el encuentro con un total de ${jugadorA.puntos}.`
        };
    } else if (jugadorB.puntos > jugadorA.puntos) {
        return {
            resultado: "Ganador definido",
            campeon: jugadorB.nombre,
            motivo: `${jugadorB.nombre} anotó más puntos en el encuentro con un total de ${jugadorB.puntos}.`
        };
    } else {
        // Regla para caso de empate
        return {
            resultado: "Empate",
            motivo: `Ambos jugadores tienen el mismo puntaje (${jugadorA.puntos} puntos). Se requiere un set de desempate.`
        };
    }
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un jugador tiene más puntos que el otro
const jugador1 = { nombre: "Allison Vargas", puntos: 21 };
const jugador2 = { nombre: "Rival Técnico", puntos: 15 };

console.log("--- Caso Normal ---");
console.log(compararPartidaPingpong(jugador1, jugador2));

// 2. Caso Borde: Ambos jugadores terminan con la misma puntuación
const jugadorEmpatado1 = { nombre: "Allison Vargas", puntos: 20 };
const jugadorEmpatado2 = { nombre: "Rival Técnico", puntos: 20 };

console.log("\n--- Caso Borde ---");
console.log(compararPartidaPingpong(jugadorEmpatado1, jugadorEmpatado2));