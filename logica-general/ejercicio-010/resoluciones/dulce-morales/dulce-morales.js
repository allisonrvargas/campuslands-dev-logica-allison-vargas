function validarInstruccionesViaje(itinerarioViaje) {
    // Caso borde primario: Objeto nulo o parámetros inválidos
    if (!itinerarioViaje || typeof itinerarioViaje !== "object") {
        return {
            permitirAbordaje: false,
            estadoPasajero: "error_sistema",
            motivo: "Error: No se cargaron los datos del boleto o itinerario de viaje."
        };
    }

    const { destino, esVueloInternacional, horasAntesAbordaje, tieneVisaRequerida } = itinerarioViaje;

    // Caso borde secundario: Tiempo de presentación físicamente imposible
    if (horasAntesAbordaje < 0) {
        return {
            permitirAbordaje: false,
            estadoPasajero: "error_datos",
            motivo: "El registro de horas de anticipación no puede ser un número negativo."
        };
    }

    // Proceso - Regla 1: Control de Documentos Internacionales (Visa)
    if (esVueloInternacional === true && tieneVisaRequerida === false) {
        return {
            permitirAbordaje: false,
            estadoPasajero: "rechazado_por_migracion",
            motivo: `Abordaje denegado para el destino '${destino}'. El pasajero no cuenta con la visa obligatoria exigida en los controles internacionales.`
        };
    }

    // Definir la instrucción de tiempo según el tipo de vuelo
    const tiempoMinimoRequerido = esVueloInternacional ? 3 : 2;

    // Proceso - Regla 2: Control de tiempo de abordaje (Lectura de instrucciones)
    if (horasAntesAbordaje < tiempoMinimoRequerido) {
        return {
            permitirAbordaje: false,
            estadoPasajero: "vuelo_perdido_por_tiempo",
            motivo: `Abordaje denegado. No se siguieron las instrucciones de la aerolínea: se presentó con ${horasAntesAbordaje} hora(s) de anticipación, omitiendo el mínimo de ${tiempoMinimoRequerido} horas requerido para rutas ${esVueloInternacional ? 'internacionales' : 'nacionales'}.`
        };
    }

    // Éxito: El pasajero leyó y aplicó todas las directivas correctamente
    return {
        permitirAbordaje: true,
        estadoPasajero: "listo_para_embarcar",
        motivo: `El pasajero cumplió con las instrucciones: llegó con la anticipación mínima de ${tiempoMinimoRequerido} horas para vuelos ${esVueloInternacional ? 'internacionales' : 'nacionales'} y cuenta con su documentación migratoria al día.`
    };
}

// Ejecución de pruebas para verificar consola
const viajeroResponsable = {
    destino: "Madrid",
    esVueloInternacional: true,
    horasAntesAbordaje: 4,
    tieneVisaRequerida: true
};

const viajeroImpuntual = {
    destino: "Tokio",
    esVueloInternacional: true,
    horasAntesAbordaje: 1,
    tieneVisaRequerida: true
};

console.log(validarInstruccionesViaje(viajeroResponsable)); // Caso Normal
console.log(validarInstruccionesViaje(viajeroImpuntual));   // Caso Borde