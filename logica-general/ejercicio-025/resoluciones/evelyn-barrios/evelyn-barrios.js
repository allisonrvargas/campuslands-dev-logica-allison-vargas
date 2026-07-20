/**
 * EJERCICIO 25: Implementación de Paginación
 *
 * Dada una lista de items, un número de página y un tamaño de página,
 * esta función devuelve los items correspondientes a esa página.
 *
 * @param {Array<any>} items - El arreglo completo de items a paginar.
 * @param {number} pagina - El número de la página solicitada (empezando en 1).
 * @param {number} tamanoPagina - El número de items por página.
 * @returns {Array<any>} Un nuevo arreglo con los items de la página solicitada.
 */
function paginarResultados(items, pagina, tamanoPagina) {
  // Validación de entradas: la página y el tamaño deben ser números positivos.
  if (pagina <= 0 || tamanoPagina <= 0) {
    return [];
  }

  // Calculamos el índice de inicio. Si la página es 1, el inicio es 0.
  const inicio = (pagina - 1) * tamanoPagina;
  // Calculamos el índice de fin.
  const fin = inicio + tamanoPagina;

  // Usamos slice para extraer la porción del arreglo.
  // slice maneja correctamente los casos donde 'fin' excede la longitud del arreglo.
  return items.slice(inicio, fin);
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Paginación (Ejercicio 25) ---");

const listaCompleta = [
  { id: 1, nombre: 'Item A' }, { id: 2, nombre: 'Item B' }, { id: 3, nombre: 'Item C' },
  { id: 4, nombre: 'Item D' }, { id: 5, nombre: 'Item E' }, { id: 6, nombre: 'Item F' },
  { id: 7, nombre: 'Item G' }, { id: 8, nombre: 'Item H' }, { id: 9, nombre: 'Item I' },
  { id: 10, nombre: 'Item J' },
];

// Prueba 1: Obtener la primera página.
const pagina1 = paginarResultados(listaCompleta, 1, 3);
console.log("\nPrueba 1 (Página 1, tamaño 3):", pagina1);

// Prueba 2: Obtener la tercera página.
const pagina3 = paginarResultados(listaCompleta, 3, 3);
console.log("\nPrueba 2 (Página 3, tamaño 3):", pagina3);

// Prueba 3: Obtener la última página (que puede estar incompleta).
const pagina4 = paginarResultados(listaCompleta, 4, 3);
console.log("\nPrueba 3 (Página 4, tamaño 3):", pagina4);

// Prueba 4: Solicitar una página que no existe.
const paginaInexistente = paginarResultados(listaCompleta, 5, 3);
console.log("\nPrueba 4 (Página 5, inexistente):", paginaInexistente);

// Prueba 5: Parámetros inválidos.
const paginaInvalida = paginarResultados(listaCompleta, -1, 5);
console.log("\nPrueba 5 (Página inválida):", paginaInvalida);

console.log("\n--- Pruebas Finalizadas ---");