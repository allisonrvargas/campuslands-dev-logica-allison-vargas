/**
 * Evalúa el flujo de aprobación paso a paso de una película para un festival de Ciencia Ficción.
 * @param {Object} pelicula - Objeto con datos de la película (titulo, anio, duracionMinutos).
 * @returns {Object} - Dictamen final del flujo con su estado y motivo paso a paso.
 */
function evaluarFlujoPeliculaSciFi(pelicula) {
  // 1. Validación preventiva de la entrada
  if (!pelicula || typeof pelicula !== 'object' || Object.keys(pelicula).length === 0) {
    return {
      estado: "Rechazado",
      pasoFallo: "Validación Inicial",
      motivo: "No se recibieron datos válidos de la película."
    };
  }

  // Paso 1: Verificación de metadatos obligatorios
  if (!pelicula.titulo || pelicula.titulo.trim() === "") {
    return {
      estado: "Rechazado",
      pasoFallo: "Paso 1: Metadatos",
      motivo: "La película carece de un título registrado."
    };
  }

  // Paso 2: Filtro de época (Solo clásicos modernos o posteriores a 1970)
  if (!pelicula.anio || pelicula.anio < 1970) {
    return {
      estado: "Rechazado",
      pasoFallo: "Paso 2: Filtro Cronológico",
      motivo: `El año de estreno (${pelicula.anio || 'N/A'}) es anterior al límite permitido de 1970.`
    };
  }

  // Paso 3: Control de extensión temporal (Duración lógica para el festival)
  if (!pelicula.duracionMinutos || pelicula.duracionMinutos < 60 || pelicula.duracionMinutos > 240) {
    return {
      estado: "Rechazado",
      pasoFallo: "Paso 3: Restricción de Duración",
      motivo: `La duración (${pelicula.duracionMinutos || 0} min) no entra en el rango del festival (60-240 min).`
    };
  }

  // Flujo exitoso: Cumple todos los pasos ordenados
  return {
    estado: "Aprobado",
    tituloPelicula: pelicula.titulo,
    motivo: "La película superó exitosamente todas las etapas secuenciales del flujo de admisión."
  };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Película válida que supera todos los filtros cronológicos y de tiempo
const peliculaValida = { titulo: "Interstellar", anio: 2014, duracionMinutos: 169 };

console.log("--- Caso Normal ---");
console.log(evaluarFlujoPeliculaSciFi(peliculaValida));

// 2. Caso Borde: Película antigua que rompe el paso 2 del flujo secuencial
const peliculaAntigua = { titulo: "Metropolis", anio: 1927, duracionMinutos: 153 };

console.log("\n--- Caso Borde ---");
console.log(evaluarFlujoPeliculaSciFi(peliculaAntigua));