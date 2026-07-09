// ==========================================
// Reto: Playlist Musical
// Campuslands
// ==========================================

// Función para clasificar una canción según su duración.
function clasificarCancion(titulo, duracion) {

    // Validación de datos
    if (duracion < 0) {
        return {
            cancion: titulo,
            clasificacion: "Dato inválido",
            mensaje: "La duración no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (duracion >= 300) {
        clasificacion = "Canción larga";
    } else if (duracion >= 180) {
        clasificacion = "Duración media";
    } else if (duracion >= 60) {
        clasificacion = "Canción corta";
    } else {
        clasificacion = "Muy corta";
    }

    return {
        cancion: titulo,
        duracion: duracion,
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