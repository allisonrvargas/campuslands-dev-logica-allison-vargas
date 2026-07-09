//Ejercicio 010: Redondeo y Precisión - Viajes y Turismo

function liquidarPresupuestoTurismo(destino, costoTotalPaquete, cantidadViajeros) {
    // 1. Casteo defensivo y normalización contra strings numéricos de formularios
    const pasajeros = Number(cantidadViajeros);
    const costoTotal = Number(costoTotalPaquete);

    if (isNaN(pasajeros) || pasajeros <= 0 || isNaN(costoTotal) || costoTotal < 0) {
        return {
            estado: "Error",
            motivo: "Los datos cuantitativos deben ser valores numéricos positivos y la cantidad de viajeros mayor a cero."
        };
    }

    // 2. Transición a aritmética entera (Centavos) para evitar errores IEEE 754
    const costoEnCentavos = Math.round(costoTotal * 100);
    
    const cuotaCentavosPersona = Math.floor(costoEnCentavos / pasajeros);
    
    // 3. Recaudación simulada en base a la cuota base en centavos
    const totalRecaudadoCentavos = cuotaCentavosPersona * pasajeros;

    // 4. Extracción matemática exacta del residuo de caja
    const centavosFaltantesAjuste = costoEnCentavos - totalRecaudadoCentavos;

    // 5. Reconversión a formato decimal flotante tradicional para el reporte del cliente
    const cuotaFinalPorPersona = cuotaCentavosPersona / 100;
    const recaudacionEstimada = totalRecaudadoCentavos / 100;
    const ajusteCajaFinal = centavosFaltantesAjuste / 100;

    return {
        destino: String(destino || "Destino No Especificado").trim(),
        logistica: {
            viajeros: pasajeros
        },
        auditoriaFinanciera: {
            costoOriginalPaquete: Math.round(costoTotal * 100) / 100,
            cuotaAsignadaPorPersona: cuotaFinalPorPersona,
            recaudacionEstimada: recaudacionEstimada,
            ajusteCentavosCaja: -ajusteCajaFinal, 
            estadoCaja: centavosFaltantesAjuste === 0 ? "Cuadrada Perfecta" : "Cuadrada con Ajuste Decimal"
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 010 ---");

const pruebas = [
    {
        tipo: "Caso Normal 1 (Guía) - Residuo Periódico Infinito (Q1000.55 entre 3)",
        destino: "Isla de Flores", costo: 1000.55, viajeros: 3
    },
    {
        tipo: "Caso Normal 2 (Guía) - División Exacta (Q2400.00 entre 4)",
        destino: "Semuc Champey", costo: 2400.00, viajeros: 4
    },
    {
        tipo: "Caso Tolerancia a Fallos - Inputs en Formato String desde HTML",
        destino: "Tikal", costo: "1500.75", viajeros: "7"
    },
    {
        tipo: "Caso Borde (Guía) - División por Cero (Pasajeros Inválidos)",
        destino: "Antigua Guatemala", costo: 500.00, viajeros: 0
    }
];

pruebas.forEach(({ tipo, destino, costo, viajeros }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(liquidarPresupuestoTurismo(destino, costo, viajeros), null, 2));
});