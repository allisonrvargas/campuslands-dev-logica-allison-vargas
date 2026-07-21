// ==========================================
// Reto: Videojuegos Competitivos
// Campuslands
// ==========================================

// Función para clasificar a un jugador según su puntaje.
function clasificarJugador(nombreJugador, puntaje) {

    // Validación de datos
    if (puntaje < 0) {
        return {
            jugador: nombreJugador,
            clasificacion: "Dato inválido",
            mensaje: "El puntaje no puede ser negativo."
        };
    }

    let clasificacion = "";

    if (puntaje >= 2000) {
        clasificacion = "Rango Diamante";
    } else if (puntaje >= 1500) {
        clasificacion = "Rango Oro";
    } else if (puntaje >= 1000) {
        clasificacion = "Rango Plata";
    } else {
        clasificacion = "Rango Bronce";
    }

    return {
        jugador: nombreJugador,
        puntaje: puntaje,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarJugador("Fernando Colaj", 1700);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarJugador("Carlos Pérez", -50);
console.log("\nPrueba 2");
console.log(prueba2);