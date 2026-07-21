// ==========================================
// Reto: Taller Mecánico
// Campuslands
// ==========================================

// Función para clasificar la prioridad de reparación de un vehículo.
function clasificarReparacion(nombreCliente, diasEspera) {

    // Validación de datos
    if (diasEspera < 0) {
        return {
            cliente: nombreCliente,
            clasificacion: "Dato inválido",
            mensaje: "Los días de espera no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (diasEspera >= 15) {
        clasificacion = "Prioridad alta";
    } else if (diasEspera >= 8) {
        clasificacion = "Prioridad media";
    } else if (diasEspera >= 1) {
        clasificacion = "Prioridad baja";
    } else {
        clasificacion = "Ingreso reciente";
    }

    return {
        cliente: nombreCliente,
        diasEspera: diasEspera,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarReparacion("Fernando Colaj", 10);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarReparacion("Carlos Pérez", -2);
console.log("\nPrueba 2");
console.log(prueba2);