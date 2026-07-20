/**
 * EJERCICIO 28: Gestor de Reintentos para API
 *
 * Este script implementa un gestor de reintentos para funciones asíncronas
 * que pueden fallar, como las llamadas a una API.
 */

/**
 * Simula una API que puede fallar aleatoriamente.
 * @returns {Promise<string>}
 */
function obtenerDatosInestables() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% de probabilidad de éxito
      if (Math.random() > 0.5) {
        resolve("¡Datos obtenidos con éxito!");
      } else {
        reject("Error de red: No se pudo conectar con el servidor.");
      }
    }, 1000);
  });
}

/**
 * Envuelve una función asíncrona y la reintenta un número de veces si falla.
 * @param {Function} funcionAsincrona - La función a ejecutar (ej: una llamada a API).
 * @param {number} maxReintentos - El número máximo de intentos.
 * @returns {Promise<any>} El resultado de la función si tiene éxito.
 */
async function gestorDeReintentos(funcionAsincrona, maxReintentos) {
  for (let intento = 1; intento <= maxReintentos; intento++) {
    try {
      console.log(`Intento ${intento} de ${maxReintentos}...`);
      // Intentamos ejecutar la función y esperamos el resultado.
      const resultado = await funcionAsincrona();
      // Si tiene éxito, lo retornamos y salimos del bucle.
      return resultado;
    } catch (error) {
      // Si falla, lo registramos.
      console.error(`El intento ${intento} falló:`, error);
      // Si es el último intento, relanzamos el error para que el llamador sepa que falló.
      if (intento === maxReintentos) {
        throw new Error(`La operación falló después de ${maxReintentos} intentos.`);
      }
    }
  }
}

// --- BLOQUE DE PRUEBAS ---
(async () => {
  console.log("--- Iniciando Pruebas del Gestor de Reintentos (Ejercicio 28) ---");

  try {
    // Intentaremos obtener los datos hasta 3 veces.
    const datos = await gestorDeReintentos(obtenerDatosInestables, 3);
    console.log("\nResultado final:", datos);
  } catch (errorFinal) {
    console.error("\nError final:", errorFinal.message);
  }
})();