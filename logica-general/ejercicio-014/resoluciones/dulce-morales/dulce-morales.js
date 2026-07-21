function diagnosticarErroresTatuaje(solicitudTatuaje) {
    // Caso borde primario: Objeto vacío o datos estructuralmente dañados
    if (!solicitudTatuaje || typeof solicitudTatuaje !== "object") {
        return {
            tieneErrores: true,
            tipoDiagnostico: "error_estructura",
            motivo: "No se recibieron los metadatos o registros obligatorios de la sesión de tatuaje."
        };
    }

    const { cliente, edad, tieneConsentimientoFirmado, zonaCuerpo } = solicitudTatuaje;

    // Caso borde secundario: Edades incoherentes o números negativos
    if (edad <= 0 || edad > 120) {
        return {
            tieneErrores: true,
            tipoDiagnostico: "error_datos_corruptos",
            motivo: "El registro contiene un parámetro de edad biológicamente imposible."
        };
    }

    // Proceso - Regla 1: Diagnóstico de Error Legal por minoría de edad
    if (edad < 18 && tieneConsentimientoFirmado === false) {
        return {
            tieneErrores: true,
            tipoDiagnostico: "error_legal_edad",
            motivo: `Diagnóstico: El cliente ${cliente} es menor de edad y no cuenta con el consentimiento firmado por sus tutores legales.`
        };
    }

    // Proceso - Regla 2: Diagnóstico de Error de Zona de Alto Riesgo o Restringida
    const zonaNormalizada = zonaCuerpo.toLowerCase().trim();
    if (zonaNormalizada === "rostro" || zonaNormalizada === "cuello") {
        return {
            tieneErrores: true,
            tipoDiagnostico: "error_zona_restringida",
            motivo: `Diagnóstico: La zona '${zonaCuerpo}' requiere una consulta técnica presencial previa debido a la sensibilidad nerviosa y tiempos de cicatrización.`
        };
    }

    // Éxito: No se diagnosticaron anomalías ni errores en la orden
    return {
        tieneErrores: false,
        tipoDiagnostico: "aprobado",
        motivo: `La solicitud de ${cliente} cumple con todos los requisitos de edad, documentación legal y parámetros de zona del cuerpo establecidos.`
    };
}

// Ejecución de pruebas para verificar salida en la consola del desarrollador
const ordenValida = {
    cliente: "Esteban Ruiz",
    edad: 24,
    tieneConsentimientoFirmado: true,
    zonaCuerpo: "antebrazo"
};

const ordenMenorDeEdad = {
    cliente: "Kevin Sosa",
    edad: 16,
    tieneConsentimientoFirmado: false,
    zonaCuerpo: "espalda"
};

console.log(diagnosticarErroresTatuaje(ordenValida));      // Caso Normal
console.log(diagnosticarErroresTatuaje(ordenMenorDeEdad)); // Caso Borde