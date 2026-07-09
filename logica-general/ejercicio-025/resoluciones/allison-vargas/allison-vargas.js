/**
 * Ordena y asigna prioridades de atención a los vehículos que ingresan al taller mecánico.
 * @param {Array} listaVehiculos - Arreglo de objetos que representan los vehículos en espera.
 * @returns {Array|Object} - Lista ordenada por prioridad de atención o reporte de error.
 */
function ordenarPrioridadesTaller(listaVehiculos) {
    // 1. Validación preventiva de la entrada
    if (!listaVehiculos || !Array.isArray(listaVehiculos) || listaVehiculos.length === 0) {
        return {
            estado: "Taller vacío",
            motivo: "No hay vehículos registrados en la lista de espera para ordenar."
        };
    }

    // 2. Clasificación en bandejas de prioridad según reglas de negocio
    const prioridadCritica = []; // Vehículos de emergencia o fallas de frenos/dirección
    const prioridadAlta = [];     // Fallas de motor o transmisión
    const prioridadNormal = [];   // Mantenimientos preventivos (aceite, pastillas, chequeo)

    listaVehiculos.forEach(vehiculo => {
        // Regla A: Máxima prioridad a vehículos de emergencia o fallas de seguridad vial críticas
        if (vehiculo.esEmergencia === true || vehiculo.tipoFalla === "Frenos") {
            prioridadCritica.push({
                placa: vehiculo.placa,
                falla: vehiculo.tipoFalla,
                nivel: "Crítica"
            });
        }
        // Regla B: Prioridad alta a problemas mecánicos mayores del motor
        else if (vehiculo.tipoFalla === "Motor") {
            prioridadAlta.push({
                placa: vehiculo.placa,
                falla: vehiculo.tipoFalla,
                nivel: "Alta"
            });
        }
        // Regla C: Servicios estándar o mantenimientos rápidos
        else {
            prioridadNormal.push({
                placa: vehiculo.placa,
                falla: vehiculo.tipoFalla,
                nivel: "Normal"
            });
        }
    });

    // 3. Fusión final respetando la jerarquía de prioridades de atención
    return [...prioridadCritica, ...prioridadAlta, ...prioridadNormal];
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un grupo mixto de autos que entran al taller el mismo día
const colaAutos = [
    { placa: "M-521ABC", tipoFalla: "Cambio de Aceite", esEmergencia: false },
    { placa: "M-990XYZ", tipoFalla: "Motor", esEmergencia: false },
    { placa: "AMB-123", tipoFalla: "Chequeo general", esEmergencia: true }, // Ambulancia
    { placa: "M-112DEF", tipoFalla: "Frenos", esEmergencia: false }         // Falla crítica
];

console.log("--- Caso Normal ---");
console.log(ordenarPrioridadesTaller(colaAutos));

// 2. Caso Borde: La lista del taller ingresa sin ningún carro para evaluar
console.log("\n--- Caso Borde ---");
console.log(ordenarPrioridadesTaller([]));