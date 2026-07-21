// ==========================================
// Reto: Animación 3D
// Campuslands
// ==========================================

// Función para clasificar un proyecto de animación 3D según la cantidad de fotogramas.
function clasificarAnimacion(nombreProyecto, fotogramas) {

    // Validación de datos
    if (fotogramas < 0) {
        return {
            proyecto: nombreProyecto,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad de fotogramas no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (fotogramas >= 5000) {
        clasificacion = "Animación cinematográfica";
    } else if (fotogramas >= 3000) {
        clasificacion = "Animación profesional";
    } else if (fotogramas >= 1000) {
        clasificacion = "Animación intermedia";
    } else {
        clasificacion = "Animación básica";
    }

    return {
        proyecto: nombreProyecto,
        fotogramas: fotogramas,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarAnimacion("Robot del Futuro", 3500);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarAnimacion("Escena Inicial", -250);
console.log("\nPrueba 2");
console.log(prueba2);