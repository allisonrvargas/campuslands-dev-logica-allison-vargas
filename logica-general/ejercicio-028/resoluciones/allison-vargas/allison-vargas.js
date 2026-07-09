/**
 * Controla y procesa el flujo secuencial de una misión en una película de ciencia ficción.
 * @param {Array} pasosMision - Lista ordenada de objetos que representan las etapas del viaje.
 * @returns {Object} - Reporte final del estado del flujo de la misión.
 */
function procesarFlujoMision(pasosMision) {
    // 1. Validación preventiva de la entrada
    if (!pasosMision || !Array.isArray(pasosMision) || pasosMision.length === 0) {
        return {
            estado: "Misión cancelada",
            motivo: "No se encontraron protocolos o pasos configurados para iniciar el viaje."
        };
    }

    const bitacoraPasos = [];
    let misionExitosa = true;
    let faseFallo = null;

    // 2. Ciclo secuencial: Cada paso depende de que el anterior no haya fallado
    for (let i = 0; i < pasosMision.length; i++) {
        const paso = pasosMision[i];

        // Regla A: Si un paso crítico registra un error técnico, el flujo se interrumpe inmediatamente
        if (paso.sistemaEstable === false) {
            misionExitosa = false;
            faseFallo = paso.fase;
            bitacoraPasos.push(`[FALLO EN SISTEMA] El flujo se detuvo críticamente en: Fase de ${paso.fase}.`);
            break; // Abortar la secuencia por completo
        }

        // Regla B: Si el sistema está bien, se procesa y se registra de forma exitosa
        bitacoraPasos.push(`[ÉXITO] Fase de ${paso.fase} completada al 100%.`);
    }

    // 3. Emitir el reporte de la central de comando espacial
    if (!misionExitosa) {
        return {
            estado: "Misión fallida",
            faseDelIncidente: faseFallo,
            secuenciaEjecutada: bitacoraPasos,
            motivo: "El protocolo de ciencia ficción exige abortar el flujo si un subsistema no está estable."
        };
    }

    return {
        estado: "Misión exitosa",
        secuenciaEjecutada: bitacoraPasos,
        motivo: "Todos los pasos de la navegación espacial se completaron en el orden correcto y sin anomalías."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un viaje intergaláctico perfecto donde todos los sistemas están estables
const viajeAndromeda = [
    { fase: "Despegue Planetario", sistemaEstable: true },
    { fase: "Salto Hiperespacial", sistemaEstable: true },
    { fase: "Inserción Orbital", sistemaEstable: true }
];

console.log("--- Caso Normal ---");
console.log(JSON.stringify(procesarFlujoMision(viajeAndromeda), null, 2));

// 2. Caso Borde: La nave falla a mitad de camino en el salto hiperespacial, bloqueando el aterrizaje
const viajeConAvaria = [
    { fase: "Despegue Planetario", sistemaEstable: true },
    { fase: "Salto Hiperespacial", sistemaEstable: false }, // Falla aquí
    { fase: "Aterrizaje Seguro", sistemaEstable: true }    // Este paso nunca debe ejecutarse
];

console.log("\n--- Caso Borde ---");
console.log(JSON.stringify(procesarFlujoMision(viajeConAvaria), null, 2));