/**
 * Calcula el puntaje final controlado de un competidor y asigna su clasificación.
 * @param {Object} datosTorneo - Contiene la lista de puntajes de los participantes, el bono y la penalización.
 * @returns {Object} - Resultado del puntaje final y su categoría competitiva.
 */
function calcularPuntajeControlado(datosTorneo) {
    // 1. Validación preventiva de las entradas
    if (!datosTorneo || typeof datosTorneo !== 'object') {
        return {
            estado: "Error",
            motivo: "No se recibieron los datos del torneo."
        };
    }

    const { participantes, bono, penalizacion } = datosTorneo;

    if (!participantes || !Array.isArray(participantes) || participantes.length === 0) {
        return {
            estado: "Error",
            motivo: "La lista de participantes está vacía o es inválida."
        };
    }

    // 2. Operación aritmética controlada (Tomamos el último puntaje registrado como referencia)
    const puntajeBase = participantes[participantes.length - 1];
    const puntajeFinal = puntajeBase + bono - penalizacion;

    // 3. Condicional de clasificación competitiva
    let clasificacion = "";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "estándar";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se tomó el puntaje base (${puntajeBase}), se sumó el bono (+${bono}) y se restó la penalización (-${penalizacion}).`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Basado en los datos de la guía
const torneoNormal = { participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 };
console.log("--- Caso Normal ---");
console.log(calcularPuntajeControlado(torneoNormal));

// 2. Caso Borde: Participante con puntaje base bajo donde el resultado final no alcanza el rango competitivo
const torneoBorde = { participantes: [10], bono: 5, penalizacion: 2 };
console.log("\n--- Caso Borde ---");
console.log(calcularPuntajeControlado(torneoBorde));