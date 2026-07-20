/**
 * EJERCICIO 23: Extractor de Elementos Únicos
 *
 * Dada una lista de elementos, esta función devuelve un nuevo arreglo
 * que contiene solo los elementos únicos, eliminando los duplicados.
 *
 * @param {Array<any>} items - Un arreglo con posibles elementos duplicados.
 * @returns {Array<any>} Un nuevo arreglo con solo los elementos únicos.
 */
function obtenerElementosUnicos(items) {
  // Un Set en JavaScript es una colección de valores únicos.
  // 1. Creamos un Set a partir del arreglo de entrada, lo que elimina duplicados.
  // 2. Usamos el operador de propagación (...) para convertir el Set de nuevo a un arreglo.
  return [...new Set(items)];
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Extractor de Únicos (Ejercicio 23) ---");

// Prueba 1: Arreglo de números con duplicados.
const numeros = [1, 2, 3, 2, 4, 5, 5, 1, 6];
const unicosNumeros = obtenerElementosUnicos(numeros);
console.log("\nPrueba 1 (Números):", unicosNumeros); // Esperado: [1, 2, 3, 4, 5, 6]

// Prueba 2: Arreglo de strings con duplicados.
const palabras = ['hola', 'mundo', 'hola', 'javascript', 'mundo'];
const unicasPalabras = obtenerElementosUnicos(palabras);
console.log("\nPrueba 2 (Strings):", unicasPalabras); // Esperado: ['hola', 'mundo', 'javascript']

// Prueba 3: Arreglo sin duplicados.
const sinDuplicados = [10, 20, 30, 40];
const resultadoSinDuplicados = obtenerElementosUnicos(sinDuplicados);
console.log("\nPrueba 3 (Sin Duplicados):", resultadoSinDuplicados); // Esperado: [10, 20, 30, 40]

// Prueba 4: Arreglo vacío.
const vacio = [];
const resultadoVacio = obtenerElementosUnicos(vacio);
console.log("\nPrueba 4 (Arreglo Vacío):", resultadoVacio); // Esperado: []

console.log("\n--- Pruebas Finalizadas ---");