// ==========================================
// Reto: Viajes y Turismo
// Campuslands
// ==========================================

// Función para clasificar un viaje según la cantidad de días.
function clasificarViaje(destino, diasViaje) {

    // Validación de datos
    if (diasViaje < 0) {
        return {
            destino: destino,
            clasificacion: "Dato inválido",
            mensaje: "Los días de viaje no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (diasViaje >= 10) {
        clasificacion = "Vacaciones largas";
    } else if (diasViaje >= 5) {
        clasificacion = "Vacaciones completas";
    } else if (diasViaje >= 2) {
        clasificacion = "Escapada";
    } else {
        clasificacion = "Excursión";
    }

    return {
        destino: destino,
        diasViaje: diasViaje,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarViaje("Antigua Guatemala", 7);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarViaje("Lago de Atitlán", -2);
console.log("\nPrueba 2");
console.log(prueba2);