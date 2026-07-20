// Función para clasificar una película de ciencia ficción
function clasificarPelicula(titulo, duracion) {

    if (duracion < 0) {
        return {
            titulo: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracion >= 180) {
        clasificacion = "Épica";
    } else if (duracion >= 150) {
        clasificacion = "Larga";
    } else if (duracion >= 90) {
        clasificacion = "Estándar";
    } else {
        clasificacion = "Corta";
    }

    return {
        titulo: titulo,
        duracion: duracion,
        clasificacion: clasificacion
    };
}

// --------------------
// Prueba normal
// --------------------
const prueba1 = clasificarPelicula("Interstellar", 169);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = clasificarPelicula("Moon", 90);

console.log("\nCaso Borde");
console.log(prueba2);