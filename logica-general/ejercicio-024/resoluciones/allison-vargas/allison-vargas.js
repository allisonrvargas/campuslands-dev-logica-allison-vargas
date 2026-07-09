/**
 * Filtra el inventario de motocicletas según las condiciones técnicas y comerciales.
 * @param {Array} inventarioMotos - Lista de objetos con los datos de las motocicletas.
 * @returns {Object} - Reporte con las motos clasificadas para la venta o revisión.
 */
function filtrarInventarioMotos(inventarioMotos) {
    // 1. Validación preventiva de la entrada
    if (!inventarioMotos || !Array.isArray(inventarioMotos) || inventarioMotos.length === 0) {
        return {
            estado: "Inventario inactivo",
            motivo: "No hay registros de motocicletas en la base de datos para filtrar."
        };
    }

    const disponiblesVenta = [];
    const retenidasTaller = [];

    // 2. Ciclo para evaluar cada motocicleta según las reglas de negocio
    inventarioMotos.forEach(moto => {
        // Regla A: Si la moto no tiene los papeles al día o necesita mantenimiento urgente, va al taller
        if (moto.documentosAlDia !== true || moto.requiereMantenimiento === true) {
            retenidasTaller.push({
                modelo: moto.modelo,
                motivo: moto.requiereMantenimiento ? "Mantenimiento urgente" : "Documentación incompleta"
            });
        } else {
            // Regla B: Si cumple con todo, está lista para piso de venta
            disponiblesVenta.push({
                modelo: moto.modelo,
                precio: moto.precioUSD
            });
        }
    });

    // 3. Retornar el reporte estructurado de los filtros
    return {
        estado: "Filtro aplicado con éxito",
        totalMotosAnalizadas: inventarioMotos.length,
        listas: {
            aptasParaVenta: disponiblesVenta,
            retenidasEnTaller: retenidasTaller
        }
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un inventario mixto con motos listas y otras con detalles
const loteMotos = [
    { modelo: "Yamaha R3", precioUSD: 5500, documentosAlDia: true, requiereMantenimiento: false },
    { modelo: "Honda CB190R", precioUSD: 3200, documentosAlDia: true, requiereMantenimiento: true }, // Al taller
    { modelo: "Suzuki Gixxer", precioUSD: 2800, documentosAlDia: false, requiereMantenimiento: false } // Al taller
];

console.log("--- Caso Normal ---");
console.log(JSON.stringify(filtrarInventarioMotos(loteMotos), null, 2));

// 2. Caso Borde: El lote de motocicletas ingresado está completamente vacío
console.log("\n--- Caso Borde ---");
console.log(filtrarInventarioMotos([]));