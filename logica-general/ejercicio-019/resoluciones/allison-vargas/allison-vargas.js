/**
 * Controla el inventario de reactivos químicos para la preparación de una fórmula.
 * @param {Array} inventarioReactivos - Lista de objetos con los compuestos (elemento, stockGramos, esPeligroso).
 * @returns {Object} - Reporte del estado del inventario para el laboratorio.
 */
function controlarInventarioQuimico(inventarioReactivos) {
    // 1. Validación preventiva de la entrada
    if (!inventarioReactivos || !Array.isArray(inventarioReactivos) || inventarioReactivos.length === 0) {
        return {
            estado: "Laboratorio pausado",
            motivo: "No se encontraron reactivos registrados en el inventario actual."
        };
    }

    let reactivosCriticos = 0;
    const alertasStock = [];

    // 2. Ciclo para revisar el inventario reactivo por reactivo
    inventarioReactivos.forEach(reactivo => {
        // Regla A: Si es un elemento peligroso y tiene menos de 50 gramos, es una alerta crítica
        if (reactivo.esPeligroso === true && reactivo.stockGramos < 50) {
            reactivosCriticos++;
            alertasStock.push(`${reactivo.elemento} (Stock crítico: ${reactivo.stockGramos}g)`);
        }
        // Regla B: Si es un elemento común pero se quedó totalmente en cero
        else if (reactivo.stockGramos <= 0) {
            alertasStock.push(`${reactivo.elemento} (Agotado por completo)`);
        }
    });

    // 3. Evaluar resultados y emitir el reporte del inventario
    if (alertasStock.length > 0) {
        return {
            estado: "Alerta de reabastecimiento",
            reactivosCriticosPeligrosos: reactivosCriticos,
            detalles: `Se requiere compra urgente para: ${alertasStock.join(', ')}.`
        };
    }

    return {
        estado: "Inventario seguro",
        motivo: "Todos los reactivos químicos cuentan con los niveles de stock necesarios para trabajar."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Inventario con existencias correctas y seguras
const inventarioSeguro = [
    { elemento: "Agua Destilada", stockGramos: 1000, esPeligroso: false },
    { elemento: "Ácido Sulfúrico", stockGramos: 250, esPeligroso: true },
    { elemento: "Cloruro de Sodio", stockGramos: 500, esPeligroso: false }
];

console.log("--- Caso Normal ---");
console.log(controlarInventarioQuimico(inventarioSeguro));

// 2. Caso Borde: Un elemento peligroso tiene muy poco stock (alerta crítica)
const inventarioPeligroso = [
    { elemento: "Agua Destilada", stockGramos: 800, esPeligroso: false },
    { elemento: "Ácido Clorhídrico", stockGramos: 20, esPeligroso: true }, // Alerta crítica
    { elemento: "Nitrato de Potasio", stockGramos: 0, esPeligroso: false }  // Agotado
];

console.log("\n--- Caso Borde ---");
console.log(controlarInventarioQuimico(inventarioPeligroso));