// ==========================================
// Reto: Películas de Ciencia Ficción
// Campuslands
// ==========================================

// Función para clasificar una película según su duración.
function clasificarPelicula(titulo, duracionMinutos) {

    // Validación de datos
    if (duracionMinutos < 0) {
        return {
            pelicula: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración de la película no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracionMinutos >= 180) {
        clasificacion = "Épica";
    } else if (duracionMinutos >= 120) {
        clasificacion = "Largometraje";
    } else if (duracionMinutos >= 90) {
        clasificacion = "Duración estándar";
    } else {
        clasificacion = "Cortometraje";
    }

    return {
        pelicula: titulo,
        duracionMinutos: duracionMinutos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarPelicula("Interstellar", 169);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarPelicula("Proyecto X", -20);
console.log("\nPrueba 2");
console.log(prueba2);