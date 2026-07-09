/**
 * Evalúa y calcula el presupuesto de una comisión de dibujo digital según las reglas de negocio.
 * @param {Object} encargo - Datos de la ilustración (formato, resolucionDpi, usoComercial).
 * @returns {Object} - Reporte de cotización o estado de rechazo del encargo.
 */
function procesarReglasDibujoDigital(encargo) {
    // 1. Validación preventiva de la entrada
    if (!encargo || typeof encargo !== 'object' || Object.keys(encargo).length === 0) {
        return {
            estado: "Rechazado",
            motivo: "No se recibieron los parámetros básicos del encargo de dibujo."
        };
    }

    // 2. Aplicación de reglas de negocio
    const { formato, resolucionDpi, usoComercial } = encargo;
    let precioBase = 0;

    // Regla A: Definición del lienzo base por formato
    if (formato === "Avatar") {
        precioBase = 25;
    } else if (formato === "Ilustración Completa") {
        precioBase = 70;
    } else {
        return {
            estado: "No admitido",
            motivo: `El formato '${formato || 'N/A'}' no se encuentra disponible en el catálogo de comisiones.`
        };
    }

    // Regla B: Validación técnica de calidad (Resolución mínima para impresión o nitidez es 300 DPI)
    if (typeof resolucionDpi !== 'number' || resolucionDpi < 300) {
        return {
            estado: "Fallo técnico",
            motivo: "La resolución solicitada debe ser de al menos 300 DPI para garantizar una calidad profesional."
        };
    }

    // Regla C: Cargo extra por derechos de autor o uso comercial (+50% sobre el precio base)
    let costoFinal = precioBase;
    if (usoComercial === true) {
        costoFinal += precioBase * 0.5;
    }

    return {
        estado: "Cotizado",
        precioTotalUSD: costoFinal,
        motivo: `El encargo de tipo '${formato}' con ${resolucionDpi} DPI fue procesado correctamente (Uso comercial: ${usoComercial ? 'Sí' : 'No'}).`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Ilustración completa con alta resolución para uso comercial
const miEncargo = { formato: "Ilustración Completa", resolucionDpi: 300, usoComercial: true };

console.log("--- Caso Normal ---");
console.log(procesarReglasDibujoDigital(miEncargo));

// 2. Caso Borde: Encargo con una resolución por debajo del estándar de calidad requerido
const encargoBajaCalidad = { formato: "Avatar", resolucionDpi: 72, usoComercial: false };

console.log("\n--- Caso Borde ---");
console.log(procesarReglasDibujoDigital(encargoBajaCalidad));