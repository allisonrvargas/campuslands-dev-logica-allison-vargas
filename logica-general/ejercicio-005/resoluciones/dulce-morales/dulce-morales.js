function ordenarPrioridadesTaller(listaVehiculos) {
    // Caso borde: Cola del taller vacía o datos nulos
    if (!listaVehiculos || listaVehiculos.length === 0) {
        return {
            ordenAtencion: [],
            motivo: "No hay vehículos en la cola de espera del taller mecánico."
        };
    }

    // Mapa de peso de prioridades por tipo de falla (A mayor número, mayor urgencia)
    const pesoFalla = {
        "frenos": 3,
        "direccion": 3,
        "motor": 2,
        "cambio_aceite": 1,
        "estetica": 0
    };

    // Proceso: Ordenamiento avanzado multivariable
    const vehiculosOrdenados = [...listaVehiculos].sort((vehiculoA, vehiculoB) => {
        const pesoA = pesoFalla[vehiculoA.fallaTipo] !== undefined ? pesoFalla[vehiculoA.fallaTipo] : -1;
        const pesoB = pesoFalla[vehiculoB.fallaTipo] !== undefined ? pesoFalla[vehiculoB.fallaTipo] : -1;

        // 1. Comparar por nivel de riesgo de la falla
        if (pesoB !== pesoA) {
            return pesoB - pesoA; 
        }

        // 2. Desempatar por orden cronológico (menor hora de ingreso = llegó antes)
        return vehiculoA.ingresoHoras - vehiculoB.ingresoHoras;
    });

    // Extraer solo las placas para el reporte de salida estructurado
    const ordenPlacas = vehiculosOrdenados.map(v => v.placa);

    return {
        ordenAtencion: ordenPlacas,
        motivo: "Se priorizan los fallos en sistema de frenos y dirección. Al haber empate, se atiende primero por orden de llegada física al taller."
    };
}

// Ejecución de pruebas para verificar consola
const colaTaller = [
    { placa: "M-456B", fallaTipo: "cambio_aceite", ingresoHoras: 3 },
    { placa: "P-123A", fallaTipo: "frenos", ingresoHoras: 2 },
    { placa: "P-789C", fallaTipo: "frenos", ingresoHoras: 1 }
];

console.log(ordenarPrioridadesTaller(colaTaller)); // Caso Normal
console.log(ordenarPrioridadesTaller([]));          // Caso Borde