/**
 * Toma la decisión organizativa sobre el destino de un equipo en un torneo de eSports.
 * @param {Object} rendimientoEquipo - Datos del equipo (nombre, puntosObtenidos, porcentajePuntualidad).
 * @returns {Object} - Decisión del torneo y fase asignada.
 */
function tomarDecisionEsports(rendimientoEquipo) {
    // 1. Validación preventiva de la entrada
    if (!rendimientoEquipo || typeof rendimientoEquipo !== 'object' || Object.keys(rendimientoEquipo).length === 0) {
        return {
            estado: "Petición rechazada",
            decision: "Pendiente",
            motivo: "No se recibieron los datos del equipo para procesar su estado en el torneo."
        };
    }

    const { nombre, puntosObtenidos, porcentajePuntualidad } = rendimientoEquipo;

    // Regla A: Penalización por impuntualidad o abandono de salas de juego (Menos del 80% de asistencia/puntualidad)
    if (typeof porcentajePuntualidad !== 'number' || porcentajePuntualidad < 80) {
        return {
            estado: "Sancionado",
            decision: "Eliminado por reglamento",
            motivo: `El equipo '${nombre}' no cumple con el mínimo de puntualidad requerido (Posee: ${porcentajePuntualidad}%).`
        };
    }

    // 2. Toma de decisiones basada en los puntos obtenidos
    let faseDestino = "";
    let mensajeMotivo = "";

    if (puntosObtenidos >= 15) {
        faseDestino = "Clasificado a Playoffs (Upper Bracket)";
        mensajeMotivo = "Rendimiento alto. Puntos suficientes para pelear el campeonato principal.";
    } else if (puntosObtenidos >= 9 && puntosObtenidos < 15) {
        faseDestino = "Asignado a Repechaje (Lower Bracket)";
        mensajeMotivo = "Rendimiento medio. Pasa a la llave de eliminación secundaria para buscar cupo.";
    } else {
        faseDestino = "Eliminado de la competencia";
        mensajeMotivo = "Rendimiento bajo. No alcanzó el puntaje mínimo para mantenerse en el torneo.";
    }

    return {
        estado: "Procesado correctamente",
        decision: faseDestino,
        motivo: `${mensajeMotivo} (Puntos: ${puntosObtenidos}, Puntualidad: ${porcentajePuntualidad}%).`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un equipo responsable que clasifica directo a la llave principal
const equipoPro = { nombre: "Infinity Gaming", puntosObtenidos: 18, porcentajePuntualidad: 95 };

console.log("--- Caso Normal ---");
console.log(tomarDecisionEsports(equipoPro));

// 2. Caso Borde: Equipo con buenos puntos pero eliminado por llegar tarde a las partidas
const equipoTardio = { nombre: "Alpha Squad", puntosObtenidos: 16, porcentajePuntualidad: 75 };

console.log("\n--- Caso Borde ---");
console.log(tomarDecisionEsports(equipoTardio));