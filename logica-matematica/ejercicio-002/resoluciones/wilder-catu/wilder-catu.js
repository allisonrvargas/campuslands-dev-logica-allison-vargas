// ==========================================
// Reto: Ranking de Fútbol Sala
// Campuslands
// ==========================================

// Función para clasificar un equipo según sus puntos.
function clasificarEquipo(nombreEquipo, puntos) {

    // Validación de datos
    if (puntos < 0) {
        return {
            equipo: nombreEquipo,
            clasificacion: "Dato inválido",
            mensaje: "Los puntos no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (puntos >= 30) {
        clasificacion = "Líder";
    } else if (puntos >= 20) {
        clasificacion = "Zona de clasificación";
    } else if (puntos >= 10) {
        clasificacion = "Media tabla";
    } else {
        clasificacion = "Zona de descenso";
    }

    return {
        equipo: nombreEquipo,
        puntos: puntos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarEquipo("Leones FC", 24);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarEquipo("Tigres FC", -5);
console.log("\nPrueba 2");
console.log(prueba2);