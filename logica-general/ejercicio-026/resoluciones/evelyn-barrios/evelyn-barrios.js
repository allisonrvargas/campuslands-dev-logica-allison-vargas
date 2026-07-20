/**
 * EJERCICIO 26: Simulación de API Asíncrona
 *
 * Esta función simula una llamada a una API para obtener datos de un usuario.
 * Devuelve una Promesa que se resuelve con los datos del usuario si se encuentra,
 * o se rechaza si el usuario no existe.
 *
 * @param {number} id - El ID del usuario a buscar.
 * @returns {Promise<object>} Una promesa que resuelve con el objeto del usuario o rechaza con un error.
 */
function obtenerDatosDeUsuario(id) {
  // Base de datos simulada
  const usuarios = [
    { id: 1, nombre: 'Ana García', email: 'ana.g@example.com' },
    { id: 2, nombre: 'Luis Pérez', email: 'luis.p@example.com' },
    { id: 3, nombre: 'Carla Mora', email: 'carla.m@example.com' },
  ];

  return new Promise((resolve, reject) => {
    // Simulamos una demora de red de 1.5 segundos
    setTimeout(() => {
      const usuarioEncontrado = usuarios.find(u => u.id === id);

      if (usuarioEncontrado) {
        // Si se encuentra el usuario, la promesa se resuelve exitosamente.
        resolve(usuarioEncontrado);
      } else {
        // Si no se encuentra, la promesa se rechaza con un error.
        reject(`Error: No se encontró un usuario con el ID ${id}.`);
      }
    }, 1500);
  });
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de API Asíncrona (Ejercicio 26) ---");
console.log("Solicitando datos... (la respuesta tardará ~1.5 segundos)");

(async () => {
  // Prueba 1: Buscar un usuario que sí existe.
  try {
    console.log("\nPrueba 1: Buscando usuario con ID 2...");
    const datosUsuario1 = await obtenerDatosDeUsuario(2);
    console.log("Usuario encontrado:", datosUsuario1);
  } catch (error) {
    console.error("Error en Prueba 1:", error);
  }

  // Prueba 2: Buscar un usuario que no existe.
  try {
    console.log("\nPrueba 2: Buscando usuario con ID 99...");
    const datosUsuario2 = await obtenerDatosDeUsuario(99);
    console.log("Usuario encontrado:", datosUsuario2);
  } catch (error) {
    console.error("Error en Prueba 2:", error);
  }
})();