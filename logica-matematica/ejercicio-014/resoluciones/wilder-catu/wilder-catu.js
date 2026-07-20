// ==========================================
// Reto: Tatuajes
// Campuslands
// ==========================================

// Función para clasificar un tatuaje según su tamaño.
function clasificarTatuaje(cliente, tamano) {

    // Validación de datos
    if (tamano < 0) {
        return {
            cliente: cliente,
            clasificacion: "Dato inválido",
            mensaje: "El tamaño del tatuaje no puede ser negativo."
        };
    }

    let clasificacion = "";

    if (tamano >= 30) {
        clasificacion = "Tatuaje grande";
    } else if (tamano >= 15) {
        clasificacion = "Tatuaje mediano";
    } else if (tamano >= 5) {
        clasificacion = "Tatuaje pequeño";
    } else {
        clasificacion = "Micro tatuaje";
    }

    return {
        cliente: cliente,
        tamano: tamano,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarTatuaje("Fernando Colaj", 18);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarTatuaje("Carlos Pérez", -6);
console.log("\nPrueba 2");
console.log(prueba2);