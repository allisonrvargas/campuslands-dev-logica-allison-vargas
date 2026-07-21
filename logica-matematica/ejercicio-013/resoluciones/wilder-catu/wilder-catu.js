// ==========================================
// Reto: Paracaidismo
// Campuslands
// ==========================================

// Función para clasificar un salto según la altura.
function clasificarSalto(nombreParticipante, alturaSalto) {

    // Validación de datos
    if (alturaSalto < 0) {
        return {
            participante: nombreParticipante,
            clasificacion: "Dato inválido",
            mensaje: "La altura del salto no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (alturaSalto >= 4000) {
        clasificacion = "Salto extremo";
    } else if (alturaSalto >= 3000) {
        clasificacion = "Salto de gran altura";
    } else if (alturaSalto >= 1500) {
        clasificacion = "Salto recreativo";
    } else {
        clasificacion = "Salto de entrenamiento";
    }

    return {
        participante: nombreParticipante,
        alturaSalto: alturaSalto,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarSalto("Fernando Colaj", 3200);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarSalto("Carlos Pérez", -500);
console.log("\nPrueba 2");
console.log(prueba2);