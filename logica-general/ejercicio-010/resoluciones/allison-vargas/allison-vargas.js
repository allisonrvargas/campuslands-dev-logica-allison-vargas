/**
 * Evalúa si una solicitud de viaje cumple con las instrucciones de documentación requeridas.
 * @param {Object} pasajero - Datos del viajero (nombre, destino, pasaporteVálido, seguroMédico).
 * @returns {Object} - Resultado de la validación según las instrucciones de embarque.
 */
function validarInstruccionesViaje(pasajero) {
    // 1. Validación preventiva de la entrada
    if (!pasajero || typeof pasajero !== 'object' || Object.keys(pasajero).length === 0) {
        return {
            accion: "Denegar embarque",
            motivo: "Falta la ficha de información del pasajero o los datos no son válidos."
        };
    }

    // 2. Procesamiento de las instrucciones de negocio
    const tienePasaporte = pasajero.pasaporteValido === true;
    const tieneSeguro = pasajero.seguroMedico === true;
    const destinoInternacional = pasajero.destino === "Internacional";

    // Regla A: El pasaporte es obligatorio para cualquier tipo de viaje
    if (!tienePasaporte) {
        return {
            accion: "Rechazar reserva",
            motivo: "Instrucción incumplida: Es obligatorio poseer un pasaporte vigente para viajar."
        };
    }

    // Regla B: Si el destino es internacional, el seguro médico es un requisito mandatorio
    if (destinoInternacional && !tieneSeguro) {
        return {
            accion: "Retener equipaje",
            motivo: "Instrucción incumplida: Los vuelos internacionales exigen una póliza de seguro médico activa."
        };
    }

    // Flujo exitoso: Cumple todas las instrucciones
    return {
        accion: "Aprobar pase de abordar",
        motivo: `El pasajero ${pasajero.nombre || "invitado"} cumple con todas las instrucciones de documentación del operador turístico.`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Pasajero internacional que cumple todas las instrucciones de viaje
const viajeroValido = { nombre: "Allison Vargas", destino: "Internacional", pasaporteValido: true, seguroMedico: true };

console.log("--- Caso Normal ---");
console.log(validarInstruccionesViaje(viajeroValido));

// 2. Caso Borde: Pasajero internacional que no leyó la instrucción del seguro médico
const viajeroIncompleto = { nombre: "Turista Despistado", destino: "Internacional", pasaporteValido: true, seguroMedico: false };

console.log("\n--- Caso Borde ---");
console.log(validarInstruccionesViaje(viajeroIncompleto));