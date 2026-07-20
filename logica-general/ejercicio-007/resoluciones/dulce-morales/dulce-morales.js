function detectarInconsistenciasPlaylist(playlistDatos) {
    // Caso borde: Datos nulos, vacíos o tipos incorrectos
    if (!playlistDatos || !playlistDatos.cancionesLista || !Array.isArray(playlistDatos.cancionesLista)) {
        return {
            esConsistente: false,
            estadoPlaylist: "error_datos_corruptos",
            motivo: "No se proporcionaron datos de lista válidos para el análisis de metadatos."
        };
    }

    const { nombre, totalCanciones, duracionTotalSegundos, cancionesLista } = playlistDatos;

    // Proceso - Regla 1: Validar el número de canciones en el contenedor físico
    if (cancionesLista.length !== totalCanciones) {
        return {
            esConsistente: false,
            estadoPlaylist: "error_inconsistencia",
            motivo: `Discrepancia detectada: El contador indica ${totalCanciones} canciones pero el reproductor solo contiene ${cancionesLista.length} elementos.`
        };
    }

    // Proceso - Regla 2: Sumar las duraciones reales de la pista
    let sumaDuracionReal = 0;
    for (let i = 0; i < cancionesLista.length; i++) {
        // Evitar números negativos en canciones individuales
        if (cancionesLista[i].duracion < 0) {
            return {
                esConsistente: false,
                estadoPlaylist: "error_tiempo_negativo",
                motivo: `Error: La canción '${cancionesLista[i].titulo}' registra una duración negativa inválida.`
            };
        }
        sumaDuracionReal += cancionesLista[i].duracion;
    }

    if (sumaDuracionReal !== duracionTotalSegundos) {
        return {
            esConsistente: false,
            estadoPlaylist: "error_inconsistencia",
            motivo: `Discrepancia detectada: La duración total declarada es de ${duracionTotalSegundos}s, pero las pistas suman un total real de ${sumaDuracionReal}s.`
        };
    }

    // Éxito: Todo está cuadrado correctamente
    return {
        esConsistente: true,
        estadoPlaylist: "sincronizado",
        motivo: `Los metadatos e inventario de la playlist '${nombre}' coinciden perfectamente con los archivos físicos.`
    };
}

// Ejecución de pruebas para verificar consola
const playlistCorrecta = {
    nombre: "Coding Hits",
    totalCanciones: 2,
    duracionTotalSegundos: 380,
    cancionesLista: [
        { titulo: "Lo-Fi Beats", duracion: 180 },
        { titulo: "Synthwave Code", duracion: 200 }
    ]
};

const playlistErronea = {
    nombre: "Chill Mix",
    totalCanciones: 3,
    duracionTotalSegundos: 400,
    cancionesLista: [
        { titulo: "Song A", duracion: 150 }
    ]
};

console.log(detectarInconsistenciasPlaylist(playlistCorrecta)); // Caso Normal
console.log(detectarInconsistenciasPlaylist(playlistErronea));  // Caso Borde