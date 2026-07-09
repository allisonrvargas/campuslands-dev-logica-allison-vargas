/**
 * Evalúa las condiciones de un salto en paracaidismo para determinar la acción a seguir.
 * @param {Object} condiciones - Datos del salto (altitudPies, velocidadVientoNudos, equipoListo).
 * @returns {Object} - Diagnóstico final y acción recomendada.
 */
function evaluarCasoParacaidismo(condiciones) {
    // 1. Validación preventiva de la entrada
    if (!condiciones || typeof condiciones !== 'object' || Object.keys(condiciones).length === 0) {
        return {
            resultado: "Cancelación preventiva",
            motivo: "No se recibieron los datos de las condiciones del salto."
        };
    }

    // 2. Aplicación de reglas de negocio para la resolución del caso
    const { altitudPies, velocidadVientoNudos, equipoListo } = condiciones;

    // Regla A: El estado del equipo es vital
    if (equipoListo !== true) {
        return {
            resultado: "Salto cancelado",
            motivo: "Falla de seguridad: El paracaídas o el equipo de reserva no han pasado la revisión técnica."
        };
    }

    // Regla B: Evaluación climática (Viento máximo permitido para saltar de forma segura es 25 nudos)
    if (velocidadVientoNudos > 25) {
        return {
            resultado: "Salto cancelado",
            motivo: `Clima adverso: La velocidad del viento (${velocidadVientoNudos} nudos) supera el límite seguro de 25 nudos.`
        };
    }

    // Regla C: Evaluación de altitud para el tipo de apertura
    if (altitudPies < 3000) {
        return {
            resultado: "Salto cancelado",
            motivo: `Altitud peligrosa: ${altitudPies} pies es una altura demasiado baja para asegurar la apertura del paracaídas.`
        };
    } else if (altitudPies >= 3000 && altitudPies <= 5000) {
        return {
            resultado: "Salto autorizado con precaución",
            motivo: "Altitud baja. Se requiere una apertura inmediata del paracaídas principal al salir de la aeronave."
        };
    } else {
        return {
            resultado: "Salto autorizado",
            motivo: "Condiciones ideales. Altitud y velocidad del viento dentro de los rangos estándar de seguridad."
        };
    }
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un salto seguro con buenas condiciones
const saltoSeguro = { altitudPies: 10000, velocidadVientoNudos: 12, equipoListo: true };

console.log("--- Caso Normal ---");
console.log(evaluarCasoParacaidismo(saltoSeguro));

// 2. Caso Borde: El equipo está bien pero el viento es demasiado fuerte
const saltoPeligroso = { altitudPies: 12000, velocidadVientoNudos: 28, equipoListo: true };

console.log("\n--- Caso Borde ---");
console.log(evaluarCasoParacaidismo(saltoPeligroso));