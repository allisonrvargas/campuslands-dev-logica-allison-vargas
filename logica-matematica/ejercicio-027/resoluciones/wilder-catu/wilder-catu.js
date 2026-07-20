// ==========================================
// Reto: Playlist Musical
// Campuslands
// ==========================================

// Función para clasificar una canción según su duración.
function clasificarCancion(tituloCancion, duracionSegundos) {

    // Validación de datos
    if (duracionSegundos < 0) {
        return {
            cancion: tituloCancion,
            clasificacion: "Dato inválido",
            mensaje: "La duración de la canción no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracionSegundos >= 300) {
        clasificacion = "Canción larga";
    } else if (duracionSegundos >= 180) {
        clasificacion = "Duración media";
    } else if (duracionSegundos >= 60) {
        clasificacion = "Canción corta";
    } else {
        clasificacion = "Muy corta";
    }

    return {
        cancion: tituloCancion,
        duracionSegundos: duracionSegundos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarCancion("Blinding Lights", 200);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarCancion("Canción Desconocida", -15);
console.log("\nPrueba 2");
console.log(prueba2);