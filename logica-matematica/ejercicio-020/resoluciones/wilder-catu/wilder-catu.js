// ==========================================
// Reto: Comida Urbana
// Campuslands
// ==========================================

// Función para clasificar un pedido según la cantidad de productos.
function clasificarPedido(nombreCliente, cantidadProductos) {

    // Validación de datos
    if (cantidadProductos < 0) {
        return {
            cliente: nombreCliente,
            clasificacion: "Dato inválido",
            mensaje: "La cantidad de productos no puede ser negativa."
        };
    }

    let clasificacion = "";

    if (cantidadProductos >= 10) {
        clasificacion = "Pedido para evento";
    } else if (cantidadProductos >= 5) {
        clasificacion = "Pedido familiar";
    } else if (cantidadProductos >= 2) {
        clasificacion = "Pedido compartido";
    } else {
        clasificacion = "Pedido individual";
    }

    return {
        cliente: nombreCliente,
        cantidadProductos: cantidadProductos,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarPedido("Fernando Colaj", 6);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarPedido("Carlos Pérez", -2);
console.log("\nPrueba 2");
console.log(prueba2);