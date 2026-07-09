// ==========================================
// Reto: Película de Miedo
// Campuslands
// ==========================================

// Función para clasificar una película de miedo según su duración.
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

    if (duracion >= 150) {
        clasificacion = "Terror épico";
    } else if (duracion >= 120) {
        clasificacion = "Largometraje de terror";
    } else if (duracion >= 90) {
        clasificacion = "Terror estándar";
    } else {
        clasificacion = "Cortometraje de terror";
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
const prueba1 = clasificarPelicula("El Conjuro", 112);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarPelicula("La Maldición", -10);
console.log("\nPrueba 2");
console.log(prueba2);