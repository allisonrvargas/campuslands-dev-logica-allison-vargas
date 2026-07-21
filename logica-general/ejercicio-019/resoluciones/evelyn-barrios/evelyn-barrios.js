/**
 * EJERCICIO 19: Agregador de Datos de Transacciones
 *
 * Dada una lista de objetos de transacción, esta función calcula y agrupa
 * el monto total y el número de transacciones por categoría.
 *
 * @param {object[]} transacciones - Un arreglo de objetos de transacción.
 *   Cada objeto debe tener las propiedades `categoria` (string) y `monto` (number).
 * @returns {object} Un objeto donde cada clave es una categoría y su valor
 *   es un objeto con `montoTotal` y `numeroTransacciones`.
 */
function generarResumenPorCategoria(transacciones) {
  const resumen = {};

  // Iteramos sobre cada transacción en la lista de entrada.
  for (const transaccion of transacciones) {
    const { categoria, monto } = transaccion;

    // Si la categoría aún no existe en nuestro resumen, la inicializamos.
    if (!resumen[categoria]) {
      resumen[categoria] = {
        montoTotal: 0,
        numeroTransacciones: 0,
      };
    }

    // Actualizamos los valores para la categoría correspondiente.
    resumen[categoria].montoTotal += monto;
    resumen[categoria].numeroTransacciones += 1;
  }

  return resumen;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Agregador de Datos (Ejercicio 19) ---");

const listaDeTransacciones = [
  { id: 1, categoria: 'Electronica', monto: 1200 },
  { id: 2, categoria: 'Libros', monto: 35 },
  { id: 3, categoria: 'Electronica', monto: 80 },
  { id: 4, categoria: 'Ropa', monto: 50 },
  { id: 5, categoria: 'Libros', monto: 22 },
  { id: 6, categoria: 'Electronica', monto: 300 },
];

const resumenDeVentas = generarResumenPorCategoria(listaDeTransacciones);

console.log("Resumen de ventas por categoría:");
console.log(resumenDeVentas);

console.log("--- Pruebas Finalizadas ---");