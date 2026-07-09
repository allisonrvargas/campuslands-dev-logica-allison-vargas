// ==========================================
// Reto: Videojuegos Competitivos
// Campuslands
// ==========================================

// Función para clasificar a un jugador según sus puntos.
function clasificarJugador(nombre, puntos) {

    // Validación de datos
    if (puntos < 0) {
        return {
            jugador: nombre,
            clasificacion: "Dato inválido",
            mensaje: "Los puntos no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (puntos >= 2000) {
        clasificacion = "Diamante";
    } else if (puntos >= 1500) {
        clasificacion = "Oro";
    } else if (puntos >= 1000) {
        clasificacion = "Plata";
    } else {
        clasificacion = "Bronce";
    }

    return {
        jugador: nombre,
        puntos: puntos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarJugador("Fernando", 1750);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarJugador("Carlos", -50);
console.log("\nPrueba 2");
console.log(prueba2);