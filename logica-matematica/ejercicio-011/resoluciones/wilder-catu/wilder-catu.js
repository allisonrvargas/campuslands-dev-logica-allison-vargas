// ==========================================
// Reto: Kickboxing
// Campuslands
// ==========================================

// Función para clasificar a un peleador según los puntos obtenidos.
function clasificarPeleador(nombre, puntos) {

    // Validación de datos
    if (puntos < 0) {
        return {
            peleador: nombre,
            clasificacion: "Dato inválido",
            mensaje: "Los puntos no pueden ser negativos."
        };
    }

    let clasificacion = "";

    if (puntos >= 90) {
        clasificacion = "Campeón";
    } else if (puntos >= 75) {
        clasificacion = "Finalista";
    } else if (puntos >= 60) {
        clasificacion = "Competidor";
    } else {
        clasificacion = "En entrenamiento";
    }

    return {
        peleador: nombre,
        puntos: puntos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarPeleador("Fernando Colaj", 82);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarPeleador("Carlos Pérez", -8);
console.log("\nPrueba 2");
console.log(prueba2);