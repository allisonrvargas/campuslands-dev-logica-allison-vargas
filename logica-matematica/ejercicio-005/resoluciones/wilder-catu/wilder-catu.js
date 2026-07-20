// ==========================================
// Reto: Taller Mecánico
// Campuslands
// ==========================================

// Función para clasificar la prioridad de atención de un vehículo.
function clasificarReparacion(cliente, diasEnEspera) {

    // Validación de datos
    if (diasEnEspera < 0) {
        return {
            cliente: cliente,
            clasificacion: "Dato inválido",
            mensaje: "Los días de espera no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (diasEnEspera >= 15) {
        clasificacion = "Prioridad alta";
    } else if (diasEnEspera >= 8) {
        clasificacion = "Prioridad media";
    } else if (diasEnEspera >= 1) {
        clasificacion = "Prioridad baja";
    } else {
        clasificacion = "Ingreso reciente";
    }

    return {
        cliente: cliente,
        diasEnEspera: diasEnEspera,
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
const prueba2 = clasificarReparacion("Carlos Pérez", -4);
console.log("\nPrueba 2");
console.log(prueba2); 