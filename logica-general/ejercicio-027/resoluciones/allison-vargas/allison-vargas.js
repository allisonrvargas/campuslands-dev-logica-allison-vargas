/**
 * Audita una lista de reproducción musical para detectar errores o inconsistencias de datos.
 * @param {Array} playlistCanciones - Lista de objetos que representan las canciones.
 * @returns {Object} - Reporte técnico del estado de la playlist.
 */
function auditarPlaylistMusical(playlistCanciones) {
    // 1. Validación preventiva de la entrada
    if (!playlistCanciones || !Array.isArray(playlistCanciones) || playlistCanciones.length === 0) {
        return {
            estado: "Playlist vacía",
            motivo: "No se encontraron pistas de audio registradas en la lista para auditar."
        };
    }

    const cancionesInconsistentes = [];
    let cancionesVerificadas = 0;

    // 2. Ciclo para revisar cada canción según las reglas de negocio
    playlistCanciones.forEach((cancion, indice) => {
        let erroresEncontrados = [];

        // Regla A: Validación de duración lógica (No puede ser menor o igual a 0 segundos)
        if (typeof cancion.duracionSegundos !== 'number' || cancion.duracionSegundos <= 0) {
            erroresEncontrados.push("Duración inválida o en cero");
        }

        // Regla B: Validación de metadatos obligatorios (Artista)
        if (!cancion.artista || cancion.artista.trim() === "") {
            erroresEncontrados.push("Falta el artista principal");
        }

        // Regla C: Validación de metadatos obligatorios (Título)
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            erroresEncontrados.push("Falta el título de la canción");
        }

        // Si la canción tiene problemas, se registra la inconsistencia
        if (erroresEncontrados.length > 0) {
            cancionesInconsistentes.push({
                posicion: indice + 1,
                pista: cancion.titulo || "Pista Desconocida",
                alertas: erroresEncontrados
            });
        } else {
            cancionesVerificadas++;
        }
    });

    // 3. Evaluar resultados finales y emitir el veredicto
    if (cancionesInconsistentes.length > 0) {
        return {
            estado: "Inconsistencias detectadas",
            pistasSaludables: cancionesVerificadas,
            alertasTotales: cancionesInconsistentes.length,
            detalles: cancionesInconsistentes
        };
    }

    return {
        estado: "Playlist óptima",
        motivo: "Todas las canciones del listado cuentan con metadatos válidos y tiempos coherentes."
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Playlist con canciones completamente válidas y coherentes
const playlistFavorita = [
    { titulo: "La Inocente", artista: "Mora", duracionSegundos: 200 },
    { titulo: "Memorias", artista: "Mora", duracionSegundos: 215 }
];

console.log("--- Caso Normal ---");
console.log(JSON.stringify(auditarPlaylistMusical(playlistFavorita), null, 2));

// 2. Caso Borde: Playlist que contiene archivos corruptos o datos incompletos
const playlistConErrores = [
    { titulo: "Modelito", artista: "Mora", duracionSegundos: 180 },
    { titulo: "", artista: "Artista Desconocido", duracionSegundos: 210 }, // Falta título
    { titulo: "Tuyo", artista: "", duracionSegundos: -10 } // Falta artista y tiempo negativo
];

console.log("\n--- Caso Borde ---");
console.log(JSON.stringify(auditarPlaylistMusical(playlistConErrores), null, 2));