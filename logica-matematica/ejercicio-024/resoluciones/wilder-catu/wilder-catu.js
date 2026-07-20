// ==========================================
// Reto: Inventario de Motos
// Campuslands
// ==========================================

// Función para clasificar el inventario de un modelo de motocicleta.
function clasificarInventario(modeloMoto, cantidadDisponible) {

    // Validación de datos
    if (cantidadDisponible < 0) {
        return {
            modelo: modeloMoto,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad disponible no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (cantidadDisponible >= 20) {
        clasificacion = "Stock alto";
    } else if (cantidadDisponible >= 10) {
        clasificacion = "Stock medio";
    } else if (cantidadDisponible >= 1) {
        clasificacion = "Stock bajo";
    } else {
        clasificacion = "Sin existencias";
    }

    return {
        modelo: modeloMoto,
        cantidadDisponible: cantidadDisponible,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarInventario("Yamaha FZ 3.0", 15);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarInventario("Honda CB190R", -4);
console.log("\nPrueba 2");
console.log(prueba2);