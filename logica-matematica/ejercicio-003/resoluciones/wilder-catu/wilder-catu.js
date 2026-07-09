// ==========================================
// Reto: Torneo de eSports
// Campuslands
// ==========================================

// Función para clasificar un equipo según las victorias obtenidas.
function clasificarEquipo(nombreEquipo, victorias) {

    // Validación de datos
    if (victorias < 0) {
        return {
            equipo: nombreEquipo,
            clasificacion: "Dato inválido",
            mensaje: "Las victorias no pueden ser negativas."
        };
    }

    let clasificacion = "";

    if (victorias >= 15) {
        clasificacion = "Campeón";
    } else if (victorias >= 10) {
        clasificacion = "Playoffs";
    } else if (victorias >= 5) {
        clasificacion = "Fase de grupos";
    } else {
        clasificacion = "Eliminado";
    }

    return {
        equipo: nombreEquipo,
        victorias: victorias,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarEquipo("Dragons Gaming", 12);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarEquipo("Phoenix Team", -2);
console.log("\nPrueba 2");
console.log(prueba2);