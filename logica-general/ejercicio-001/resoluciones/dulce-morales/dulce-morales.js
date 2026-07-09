/**
 * Logica general 001 - Clasificación por Reglas
 * Estudiante: Dulce Alexandra Morales Ramírez
 * 
 * Descripción: Sistema automatizado que barre la lista de reportes de un 
 * jugador para aplicar la sanción de mayor prioridad configurada por el sistema.
 */

function clasificarInfraccionJugador(jugador, reportesAcumulados, reglaActiva) {
    // ==========================================
    // PROCESO: VALIDACIÓN DEL CASO BORDE
    // ==========================================
    // Si la lista de reportes está vacía, el jugador está limpio.
    if (!reportesAcumulados || reportesAcumulados.length === 0) {
        return {
            "Jugador afectado": jugador,
            "Prioridad detectada": "Ninguna / No aplica",
            "Sanción aplicada": "Ninguna. El sistema valida que no hay infracciones y mantiene la cuenta en estado óptimo."
        };
    }

    // Base de datos interna del sistema con el nivel de prioridad y sanción asignada
    const reglasNegocio = {
        "Uso de Hacks": {
            prioridad: "Alta",
            sancion: "Ban inmediato del servidor y baneo de IP."
        },
        "Toxicidad en chat": {
            prioridad: "Media",
            sancion: "Silenciar canal de voz y chat por 7 días."
        },
        "Abandono de partida (AFK)": {
            prioridad: "Baja",
            sancion: "Pérdida de puntos de emparejamiento."
        }
    };

    // ==========================================
    // PROCESO: EVALUACIÓN DE REGLAS DE NEGOCIO
    // ==========================================
    // El sistema barre los reportes buscando si cometió la falta que se está priorizando activamente
    if (reportesAcumulados.includes(reglaActiva)) {
        const detallesRegla = reglasNegocio[reglaActiva];
        
        return {
            "Jugador afectado": jugador,
            "Prioridad detectada": detallesRegla.prioridad,
            "Sanción aplicada": detallesRegla.sancion
        };
    }

    // Caso de control: Si tiene otros reportes pero no el que la regla activa prioriza
    return {
        "Jugador afectado": jugador,
        "Prioridad detectada": "Baja",
        "Sanción aplicada": "Bajo revisión moderada."
    };
}

// ==========================================
// SECCIÓN DE PRUEBAS 
// ==========================================

console.log("=== PRUEBA: CASO NORMAL ===");
const resultadoNormal = clasificarInfraccionJugador(
    "EspectroGamer", 
    ["Toxicidad en chat", "Uso de Hacks", "Abandono de partida (AFK)"], 
    "Uso de Hacks"
);
console.log(resultadoNormal);


console.log("\n=== PRUEBA: CASO BORDE ===");
const resultadoBorde = clasificarInfraccionJugador(
    "Xz_Biker_zX", 
    [], 
    "Uso de Hacks"
);
console.log(resultadoBorde);