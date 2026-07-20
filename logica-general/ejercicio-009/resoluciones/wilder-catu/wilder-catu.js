// Función para clasificar una película de miedo
function clasificarPeliculaMiedo(titulo, duracion) {

    if (duracion < 0) {
        return {
            titulo: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracion >= 120) {
        clasificacion = "Maratón del Terror";
    } else if (duracion >= 90) {
        clasificacion = "Terror Clásico";
    } else if (duracion >= 60) {
        clasificacion = "Terror Corto";
    } else {
        clasificacion = "Especial";
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
const prueba1 = clasificarPeliculaMiedo("El Conjuro", 112);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = clasificarPeliculaMiedo("La Bruja", 90);

console.log("\nCaso Borde");
console.log(prueba2);