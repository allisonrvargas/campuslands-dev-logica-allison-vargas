// ==========================================
// Reto: Dibujo Digital
// Campuslands
// ==========================================

// Función para clasificar un dibujo según la cantidad de capas utilizadas.
function clasificarDibujo(nombreProyecto, cantidadCapas) {

    // Validación de datos
    if (cantidadCapas < 0) {
        return {
            proyecto: nombreProyecto,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad de capas no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (cantidadCapas >= 30) {
        clasificacion = "Ilustración profesional";
    } else if (cantidadCapas >= 20) {
        clasificacion = "Ilustración avanzada";
    } else if (cantidadCapas >= 10) {
        clasificacion = "Ilustración intermedia";
    } else {
        clasificacion = "Boceto digital";
    }

    return {
        proyecto: nombreProyecto,
        cantidadCapas: cantidadCapas,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarDibujo("Paisaje Futurista", 22);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarDibujo("Concepto Inicial", -3);
console.log("\nPrueba 2");
console.log(prueba2);