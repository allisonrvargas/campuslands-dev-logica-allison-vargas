/**
 * EJERCICIO 20: Transformador de Datos de Usuario
 *
 * Dada una lista de objetos de usuario con un formato "crudo", esta función
 * los transforma a un formato de "perfil limpio", seleccionando, combinando
 * y renombrando propiedades.
 *
 * @param {object[]} usuariosCrudos - Un arreglo de objetos de usuario en formato original.
 * @returns {object[]} Un nuevo arreglo con los objetos de usuario en el formato deseado.
 */
function transformarPerfilesDeUsuario(usuariosCrudos) {
  // Usamos el método .map() para crear un nuevo arreglo transformado
  // sin modificar el original.
  return usuariosCrudos.map(usuario => {
    return {
      id: usuario.userId,
      nombreCompleto: `${usuario.firstName} ${usuario.lastName}`,
      email: usuario.email,
      estaActivo: usuario.status === 'active',
    };
  });
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Transformador de Datos (Ejercicio 20) ---");

const datosOriginales = [
  { userId: 1, firstName: 'Ana', lastName: 'García', email: 'ana.g@example.com', status: 'active' },
  { userId: 2, firstName: 'Luis', lastName: 'Pérez', email: 'luis.p@example.com', status: 'inactive' },
  { userId: 3, firstName: 'Carla', lastName: 'Mora', email: 'carla.m@example.com', status: 'active' },
];

const perfilesLimpios = transformarPerfilesDeUsuario(datosOriginales);

console.log("Perfiles de usuario transformados:");
console.log(perfilesLimpios);

// Prueba con un arreglo vacío
const datosVacios = [];
const perfilesVacios = transformarPerfilesDeUsuario(datosVacios);
console.log("\nPrueba con arreglo vacío:");
console.log(perfilesVacios); // Esperado: []

console.log("--- Pruebas Finalizadas ---");