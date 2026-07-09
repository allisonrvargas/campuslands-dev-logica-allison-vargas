/**
 * Valida un itinerario de viaje según las instrucciones y requisitos de cada destino.
 * @param {Array} instruccionesViaje - Lista de destinos con sus respectivos requisitos de entrada.
 * @param {Object} datosTurista - Información, documentos y presupuesto del viajero.
 * @returns {Object} - Estado final de la aprobación del viaje.
 */
function validarInstruccionesViaje(instruccionesViaje, datosTurista) {
    // 1. Validación preventiva de las entradas
    if (!instruccionesViaje || !Array.isArray(instruccionesViaje) || instruccionesViaje.length === 0) {
        return {
            estado: "Viaje cancelado",
            motivo: "No hay un itinerario o instrucciones de viaje configuradas para evaluar."
        };
    }

    if (!datosTurista || typeof datosTurista !== 'object') {
        return {
            estado: "Viaje cancelado",
            motivo: "Faltan los datos y documentos del turista para verificar los accesos."
        };
    }

    const bitacoraRuta = [];
    let itinerarioAprobado = true;
    let destinoRechazado = null;
    let motivoRechazo = "";

    // 2. Ciclo para evaluar cada instrucción del destino en orden secuencial
    for (let i = 0; i < instruccionesViaje.length; i++) {
        const destino = instruccionesViaje[i];

        // Regla A: Verificar si el destino exige visa y el turista no la tiene
        if (destino.requiereVisa === true && datosTurista.tieneVisaAprobada !== true) {
            itinerarioAprobado = false;
            destinoRechazado = destino.pais;
            motivoRechazo = "Falta de visa aprobada para el ingreso legal.";
            break;
        }

        // Regla B: Verificar si el costo del destino supera el presupuesto restante del turista
        if (destino.costoMinimoUSD > datosTurista.presupuestoDisponibleUSD) {
            itinerarioAprobado = false;
            destinoRechazado = destino.pais;
            motivoRechazo = `Fondos insuficientes. Se requieren $${destino.costoMinimoUSD} y solo dispone de $${datosTurista.presupuestoDisponibleUSD}.`;
            break;
        }

        // Si cumple los requisitos, se descuenta el presupuesto y se añade a la bitácora
        datosTurista.presupuestoDisponibleUSD -= destino.costoMinimoUSD;
        bitacoraRuta.push(`[APROBADO] Entrada permitida a ${destino.pais}.`);
    }

    // 3. Emitir el veredicto final de la agencia de turismo
    if (!itinerarioAprobado) {
        return {
            estado: "Itinerario Rechazado",
            puntoDeQuiebre: destinoRechazado,
            motivo: motivoRechazo,
            destinosAlcanzados: bitacoraRuta
        };
    }

    return {
        estado: "Viaje Autorizado",
        motivo: "El turista leyó y cumplió con todas las instrucciones y requisitos de la ruta.",
        resumenRuta: bitacoraRuta,
        presupuestoRestante: `$${datosTurista.presupuestoDisponibleUSD}`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un turista con papeles y dinero suficiente para completar su ruta
const rutaEuropa = [
    { pais: "España", requiereVisa: false, costoMinimoUSD: 500 },
    { pais: "Francia", requiereVisa: false, costoMinimoUSD: 600 }
];

const viajeroPreparado = { tieneVisaAprobada: false, presupuestoDisponibleUSD: 2000 };

console.log("--- Caso Normal ---");
console.log(JSON.stringify(validarInstruccionesViaje(rutaEuropa, viajeroPreparado), null, 2));

// 2. Caso Borde: El turista se queda sin dinero a mitad de la ruta planificada
const rutaLarga = [
    { pais: "Italia", requiereVisa: false, costoMinimoUSD: 800 },
    { pais: "Suiza", requiereVisa: false, costoMinimoUSD: 1500 } // Se pasa del dinero aquí
];

const viajeroConLoJusto = { tieneVisaAprobada: false, presupuestoDisponibleUSD: 1000 };

console.log("\n--- Caso Borde ---");
console.log(JSON.stringify(validarInstruccionesViaje(rutaLarga, viajeroConLoJusto), null, 2));