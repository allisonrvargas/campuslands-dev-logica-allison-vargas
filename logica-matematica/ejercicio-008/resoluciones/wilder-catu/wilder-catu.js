// ==========================================
// Reto: Película de Ciencia Ficción
// Campuslands
// ==========================================

// Función para clasificar una película según su duración.
function clasificarPelicula(titulo, duracion) {

    // Validación de datos
    if (duracion < 0) {
        return {
            pelicula: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracion >= 180) {
        clasificacion = "Película épica";
    } else if (duracion >= 120) {
        clasificacion = "Largometraje";
    } else if (duracion >= 90) {
        clasificacion = "Duración estándar";
    } else {
        clasificacion = "Cortometraje";
    }

    return {
        pelicula: titulo,
        duracion: duracion,
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
const prueba2 = clasificarPelicula("Proyecto X", -30);
console.log("\nPrueba 2");
console.log(prueba2);