function limpiarPlaylist(playlist) {
    const validas = [];
    const invalidas = [];
    const idsVistos = new Set();

    playlist.forEach(cancion => {
        let error = "";
        
        if (!cancion.id || !cancion.titulo) error = "Faltan datos";
        else if (cancion.duracion <= 0) error = "Duración inválida";
        else if (!["mp3", "wav"].includes(cancion.formato)) error = "Formato no soportado";
        else if (idsVistos.has(cancion.id)) error = "ID duplicado";

        if (error) {
            invalidas.push({ ...cancion, motivo: error });
        } else {
            idsVistos.add(cancion.id);
            validas.push(cancion);
        }
    });

    return { validas, invalidas };
}