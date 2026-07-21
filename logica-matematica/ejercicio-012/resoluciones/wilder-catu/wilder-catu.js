// ==========================================
// Reto: Ping Pong
// Campuslands
// ==========================================

// Función para clasificar a un jugador según los puntos obtenidos.
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

    if (puntos >= 21) {
        clasificacion = "Ganador";
    } else if (puntos >= 15) {
        clasificacion = "Buen desempeño";
    } else if (puntos >= 10) {
        clasificacion = "Desempeño regular";
    } else {
        clasificacion = "Debe mejorar";
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
const prueba1 = clasificarJugador("Fernando Colaj", 18);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarJugador("Carlos Pérez", -4);
console.log("\nPrueba 2");
console.log(prueba2);