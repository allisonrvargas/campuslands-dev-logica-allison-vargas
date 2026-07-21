/**
 * EJERCICIO 21: Filtro Avanzado de Productos
 *
 * Dada una lista de productos y un objeto de filtros, esta función devuelve
 * un nuevo arreglo con los productos que cumplen todos los criterios de filtrado.
 *
 * @param {object[]} productos - Un arreglo de objetos de producto.
 * @param {object} filtros - Un objeto con los criterios de filtrado.
 *   Posibles filtros: `precioMaximo` (number), `categoria` (string), `enStock` (boolean).
 * @returns {object[]} Un nuevo arreglo con los productos filtrados.
 */
function filtrarProductos(productos, filtros) {
  return productos.filter(producto => {
    let cumplePrecio = true;
    let cumpleCategoria = true;
    let cumpleStock = true;

    // Evaluar filtro por precio máximo
    if (filtros.precioMaximo !== undefined) {
      cumplePrecio = producto.precio <= filtros.precioMaximo;
    }

    // Evaluar filtro por categoría
    if (filtros.categoria) {
      cumpleCategoria = producto.categoria === filtros.categoria;
    }

    // Evaluar filtro por disponibilidad en stock
    if (filtros.enStock === true) {
      cumpleStock = producto.stock > 0;
    }

    // El producto debe cumplir todas las condiciones activas
    return cumplePrecio && cumpleCategoria && cumpleStock;
  });
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Filtro de Productos (Ejercicio 21) ---");

const catalogo = [
  { id: 1, nombre: 'Laptop Pro', precio: 1500, categoria: 'Electronica', stock: 5 },
  { id: 2, nombre: 'Teclado Mecánico', precio: 95, categoria: 'Electronica', stock: 10 },
  { id: 3, nombre: 'Silla de Oficina', precio: 250, categoria: 'Hogar', stock: 0 },
  { id: 4, nombre: 'Libro de Diseño', precio: 45, categoria: 'Libros', stock: 20 },
  { id: 5, nombre: 'Monitor 4K', precio: 450, categoria: 'Electronica', stock: 0 },
];

const filtro1 = { precioMaximo: 500, categoria: 'Electronica' };
console.log("\nPrueba 1 (Electrónicos < 500):", filtrarProductos(catalogo, filtro1));

const filtro2 = { enStock: true };
console.log("\nPrueba 2 (Solo en stock):", filtrarProductos(catalogo, filtro2));

const filtro3 = { categoria: 'Hogar', enStock: true };
console.log("\nPrueba 3 (Hogar en stock):", filtrarProductos(catalogo, filtro3));

const filtro4 = {};
console.log("\nPrueba 4 (Sin filtros):", filtrarProductos(catalogo, filtro4));

console.log("\n--- Pruebas Finalizadas ---");