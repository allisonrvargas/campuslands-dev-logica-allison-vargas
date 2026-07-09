/**
 * Detecta inconsistencias en una playlist musical (canciones sin título o con duración inválida).
 * @param {Array} playlist - Arreglo de objetos de canciones.
 * @returns {Array|Object} - Lista de inconsistencias encontradas o reporte de estado limpio.
 */
function detectarInconsistenciasPlaylist(playlist) {
  // 1. Validación preventiva de la entrada
  if (!playlist || !Array.isArray(playlist) || playlist.length === 0) {
    return {
      accion: "omitir revisión",
      motivo: "La playlist está vacía o no se recibió una colección válida."
    };
  }

  const inconsistencias = [];

  // 2. Recorrido y aplicación de reglas de negocio para detectar anomalías
  playlist.forEach((cancion, indice) => {
    // Regla A: Título faltante o vacío
    if (!cancion.titulo || cancion.titulo.trim() === "") {
      inconsistencias.push({
        posicion: indice,
        error: "Título ausente",
        detalle: "La canción no cuenta con un nombre o el campo está vacío."
      });
    }

    // Regla B: Duración inválida (menor o igual a cero)
    if (typeof cancion.duracion !== 'number' || cancion.duracion <= 0) {
      inconsistencias.push({
        posicion: indice,
        cancion: cancion.titulo || "Desconocida",
        error: "Duración inválida",
        detalle: `La duración debe ser un número mayor a cero. Valor recibido: ${cancion.duracion}`
      });
    }
  });

  // 3. Resultado condicional según hallazgos
  if (inconsistencias.length === 0) {
    return {
      estado: "Playlist limpia",
      motivo: "Todas las canciones cumplen con las reglas de estructura básicas."
    };
  }

  return inconsistencias;
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Playlist con datos corruptos/incompletos
const miPlaylist = [
  { titulo: "La Inocente", artista: "Mora", duracion: 200 },
  { titulo: "", artista: "Desconocido", duracion: 180 }, // Error: Sin título
  { titulo: "Reina", artista: "Mora", duracion: -5 },    // Error: Duración negativa
  { titulo: "Memorias", artista: "Mora", duracion: 195 }
];

console.log("--- Caso Normal ---");
console.log(detectarInconsistenciasPlaylist(miPlaylist));

// 2. Caso Borde: Playlist sin ningún elemento
console.log("\n--- Caso Borde ---");
console.log(detectarInconsistenciasPlaylist([]));