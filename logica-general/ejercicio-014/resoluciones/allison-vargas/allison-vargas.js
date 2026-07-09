/**
 * Diagnostica errores o fallas de seguridad en una sesión de tatuajes.
 * @param {Object} sesion - Datos de la sesión (tintaAprobada, agujasEsterilizadas, experienciaAnios).
 * @returns {Object} - Reporte del diagnóstico y estado de la sesión.
 */
function diagnosticarErroresTatuaje(sesion) {
    // 1. Validación preventiva de la entrada
    if (!sesion || typeof sesion !== 'object' || Object.keys(sesion).length === 0) {
        return {
            estado: "Fallo crítico",
            errorDetectado: "Sin datos",
            diagnostico: "No se recibieron los parámetros mínimos para evaluar la sesión."
        };
    }

    // 2. Aplicación de reglas de negocio para encontrar errores
    const { tintaAprobada, agujasEsterilizadas, experienciaAnios } = sesion;

    // Regla A: Higiene y esterilización (Prioridad máxima)
    if (agujasEsterilizadas !== true) {
        return {
            estado: "Sesión Cancelada",
            errorDetectado: "Alerta Sanitaria",
            diagnostico: "Las agujas no están esterilizadas. Riesgo biológico crítico."
        };
    }

    // Regla B: Calidad de los insumos
    if (tintaAprobada !== true) {
        return {
            estado: "Sesión Detenida",
            errorDetectado: "Material no apto",
            diagnostico: "La tinta no cuenta con el registro de salud regulatorio obligatorio."
        };
    }

    // Regla C: Control de experiencia para diseños complejos
    if (typeof experienciaAnios !== 'number' || experienciaAnios < 1) {
        return {
            estado: "Sesión en Observación",
            errorDetectado: "Falta de experiencia",
            diagnostico: "El tatuador tiene menos de un año de experiencia. Se sugiere supervisión."
        };
    }

    // Sesión segura sin errores
    return {
        estado: "Listo para iniciar",
        errorDetectado: "Ninguno",
        diagnostico: "Todos los controles de salud, materiales y experiencia se encuentran en orden."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Sesión que cumple con todos los requisitos de salud y técnicos
const sesionSegura = { tintaAprobada: true, agujasEsterilizadas: true, experienciaAnios: 3 };

console.log("--- Caso Normal ---");
console.log(diagnosticarErroresTatuaje(sesionSegura));

// 2. Caso Borde: Error de higiene crítico que cancela todo
const sesionInsegura = { tintaAprobada: true, agujasEsterilizadas: false, experienciaAnios: 5 };

console.log("\n--- Caso Borde ---");
console.log(diagnosticarErroresTatuaje(sesionInsegura));