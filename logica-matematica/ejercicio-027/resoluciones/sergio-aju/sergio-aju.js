function generarPlaylist(duracionInicial, paso, cantidadCanciones) {
    if (duracionInicial < 0 || paso < 0 || cantidadCanciones <= 0) {
        return { error: "Los datos deben ser positivos y mayores a cero." };
    }

    let playlist = [];
    for (let i = 0; i < cantidadCanciones; i++) {
        let duracion = duracionInicial + (i * paso);
        playlist.push(duracion);
    }

    return {
        secuencia: playlist,
        total_tiempo: playlist.reduce((a, b) => a + b, 0),
        explicacion: `Playlist generada con ${cantidadCanciones} canciones, incrementando ${paso} seg por pista.`
    };
}
console.log("Caso Normal:", generarPlaylist(180, 10, 5));
console.log("Caso Borde (1 canción):", generarPlaylist(200, 10, 1));