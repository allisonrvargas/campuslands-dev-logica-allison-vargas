// Función para clasificar una canción según su duración
function clasificarCancion(titulo, duracion) {

    if (duracion < 0) {
        return {
            titulo: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracion >= 7) {
        clasificacion = "Muy larga";
    } else if (duracion >= 5) {
        clasificacion = "Larga";
    } else if (duracion >= 3) {
        clasificacion = "Normal";
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
const prueba1 = clasificarCancion("Bohemian Rhapsody", 6);

console.log("Prueba Normal");
console.log(prueba1);

// --------------------
// Caso borde
// --------------------
const prueba2 = clasificarCancion("Intro", 3);

console.log("\nCaso Borde");
console.log(prueba2);