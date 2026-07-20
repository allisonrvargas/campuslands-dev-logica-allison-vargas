// ==========================================
// Reto: Arquitectura 3D
// Campuslands
// ==========================================

// Función para clasificar un proyecto de arquitectura 3D según su área.
function clasificarProyecto(nombreProyecto, area) {

    // Validación de datos
    if (area < 0) {
        return {
            proyecto: nombreProyecto,
            clasificacion: "Dato inválido",
            mensaje: "El área del proyecto no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (area >= 1000) {
        clasificacion = "Mega proyecto";
    } else if (area >= 500) {
        clasificacion = "Proyecto grande";
    } else if (area >= 200) {
        clasificacion = "Proyecto mediano";
    } else {
        clasificacion = "Proyecto pequeño";
    }

    return {
        proyecto: nombreProyecto,
        area: area,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarProyecto("Centro Comercial", 650);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarProyecto("Casa Familiar", -50);
console.log("\nPrueba 2");
console.log(prueba2);