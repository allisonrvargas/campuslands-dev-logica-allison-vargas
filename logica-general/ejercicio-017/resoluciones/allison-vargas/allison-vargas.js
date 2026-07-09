/**
 * Evalúa las variables de un proyecto de arquitectura 3D mediante una tabla de decisión.
 * @param {Object} proyecto - Datos del plano (tipoDiseno, presupuestoAlto, requiereRealismo VR).
 * @returns {Object} - Opción tecnológica asignada y motor recomendado.
 */
function evaluarDecisionArquitectura(proyecto) {
    // 1. Validación preventiva de la entrada
    if (!proyecto || typeof proyecto !== 'object' || Object.keys(proyecto).length === 0) {
        return {
            decision: "Planificación pausada",
            motivo: "No se enviaron los parámetros técnicos del diseño arquitectónico."
        };
    }

    const { tipoDiseno, presupuestoAlto, requiereRealismo } = proyecto;

    // 2. Cruce de datos y lógica basada en la Tabla de Decisión
    // Fila de Decisión 1: Diseños complejos/exteriores con dinero y exigencia visual alta
    if (tipoDiseno === "Exterior" && presupuestoAlto === true && requiereRealismo === true) {
        return {
            decision: "Motor Avanzado Seleccionado",
            motor: "Unreal Engine 5",
            texturas: "8K / Lumens",
            motivo: "Se asigna la máxima calidad para renders exteriores de gran presupuesto con hiperrealismo."
        };
    }

    // Fila de Decisión 2: Diseños estándar de interiores o comerciales que necesitan realismo medio
    if (tipoDiseno === "Interior" && requiereRealismo === true) {
        return {
            decision: "Motor Estándar Seleccionado",
            motor: "V-Ray / Blender",
            texturas: "4K / PBR",
            motivo: "Optimizado para renderizado de espacios interiores que requieren buen manejo de iluminación fija."
        };
    }

    // Fila de Decisión 3: Proyectos de bajo presupuesto o esquemáticos
    return {
        decision: "Motor Básico Seleccionado",
        motor: "SketchUp / Twinmotion",
        texturas: "2K estándar",
        motivo: "Ideal para previsualizaciones rápidas o maquetas preliminares sin altos costos de cómputo."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Proyecto exterior exigente con buen presupuesto
const granProyecto = { tipoDiseno: "Exterior", presupuestoAlto: true, requiereRealismo: true };

console.log("--- Caso Normal ---");
console.log(evaluarDecisionArquitectura(granProyecto));

// 2. Caso Borde: Proyecto rápido que no cumple con las condiciones de alta gama
const anteproyecto = { tipoDiseno: "Interior", presupuestoAlto: false, requiereRealismo: false };

console.log("\n--- Caso Borde ---");
console.log(evaluarDecisionArquitectura(anteproyecto));