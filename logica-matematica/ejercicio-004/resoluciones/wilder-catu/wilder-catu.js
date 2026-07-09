// ==========================================
// Reto: Inventario de Motos
// Campuslands
// ==========================================

// Función para clasificar el estado del inventario de una moto.
function clasificarInventario(modeloMoto, cantidad) {

    // Validación de datos
    if (cantidad < 0) {
        return {
            modelo: modeloMoto,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad de motos no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (cantidad >= 20) {
        clasificacion = "Stock alto";
    } else if (cantidad >= 10) {
        clasificacion = "Stock medio";
    } else if (cantidad >= 1) {
        clasificacion = "Stock bajo";
    } else {
        clasificacion = "Sin existencias";
    }

    return {
        modelo: modeloMoto,
        cantidad: cantidad,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarInventario("Yamaha FZ", 15);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarInventario("Honda CB190R", -3);
console.log("\nPrueba 2");
console.log(prueba2);