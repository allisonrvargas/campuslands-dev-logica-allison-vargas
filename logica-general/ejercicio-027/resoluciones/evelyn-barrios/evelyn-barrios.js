/**
 * EJERCICIO 27: Composición de Datos Asíncronos
 *
 * Este script simula la obtención de datos de múltiples fuentes de una API
 * de forma concurrente y combina los resultados.
 */

// --- API Simulada ---

/**
 * Simula la obtención del perfil de un usuario.
 * @param {number} id - ID del usuario.
 * @returns {Promise<object>}
 */
function obtenerPerfil(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Juan Pérez', email: 'juan.p@example.com' });
      } else {
        reject(`Error: Perfil para ID ${id} no encontrado.`);
      }
    }, 1000); // Tarda 1 segundo
  });
}

/**
 * Simula la obtención del historial de compras de un usuario.
 * @param {number} id - ID del usuario.
 * @returns {Promise<object>}
 */
function obtenerHistorial(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        idUsuario: id,
        compras: [
          { producto: 'Laptop', monto: 1200 },
          { producto: 'Mouse', monto: 50 },
        ],
      });
    }, 1500); // Tarda 1.5 segundos
  });
}

/**
 * Orquesta la obtención de todos los datos del dashboard de un usuario.
 * @param {number} usuarioId - El ID del usuario.
 * @returns {Promise<object>} Un objeto combinado con todos los datos del dashboard.
 */
async function obtenerDashboardCompleto(usuarioId) {
  console.log(`\nIniciando obtención de datos para el dashboard del usuario ${usuarioId}...`);
  try {
    const [perfil, historial] = await Promise.all([
      obtenerPerfil(usuarioId),
      obtenerHistorial(usuarioId)
    ]);

    return {
      usuario: perfil,
      historialDeCompras: historial.compras,
    };
  } catch (error) {
    console.error(`Error al construir el dashboard para el usuario ${usuarioId}:`, error);
    return null;
  }
}

// --- BLOQUE DE PRUEBAS ---
(async () => {
  console.log("--- Iniciando Pruebas de Composición Asíncrona (Ejercicio 27) ---");

  const dashboardUsuario1 = await obtenerDashboardCompleto(1);
  if (dashboardUsuario1) console.log("Dashboard completo del Usuario 1:", dashboardUsuario1);

  const dashboardUsuario2 = await obtenerDashboardCompleto(2);
  if (!dashboardUsuario2) console.log("No se pudo generar el dashboard para el Usuario 2, como era esperado.");
})();