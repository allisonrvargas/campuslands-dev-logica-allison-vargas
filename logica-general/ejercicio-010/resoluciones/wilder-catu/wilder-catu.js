// Función para clasificar un viaje
function clasificarViaje(destino, diasViaje) {

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

// --------------------
// Prueba normal
// --------------------
const prueba1 = clasificarViaje("Antigua Guatemala", 6);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = clasificarViaje("Lago de Atitlán", 1);

console.log("\nCaso Borde");
console.log(prueba2);