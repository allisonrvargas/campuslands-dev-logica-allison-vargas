/**
 * Reto Campuslands: Sistema de Gestión de Viajes
 * Lógica: Calcula el costo total de un viaje aplicando descuentos 
 * por temporada y cantidad de personas.
 */

function calcularViaje(destino, adultos, ninos, temporada) {
    const preciosBase = { "playa": 500, "montana": 400, "ciudad": 600 };
    
    // 1. Validación de entrada
    if (!preciosBase[destino]) return "Destino no disponible";

    let costoBase = (adultos * preciosBase[destino]) + (ninos * (preciosBase[destino] * 0.5));
    let descuento = 0;

    // 2. Aplicación de reglas de negocio
    if (temporada === "baja") {
        descuento = 0.20; // 20% descuento temporada baja
    }
    
    if ((adultos + ninos) > 5) {
        descuento += 0.05; // 5% extra por grupo grande
    }

    const total = costoBase * (1 - descuento);

    // 3. Resultado
    return {
        destino: destino,
        pasajeros: adultos + ninos,
        costoOriginal: costoBase,
        descuentoAplicado: (descuento * 100) + "%",
        totalAPagar: total.toFixed(2)
    };
}

// Ejemplo de uso:
console.log(calcularViaje("playa", 2, 2, "baja"));