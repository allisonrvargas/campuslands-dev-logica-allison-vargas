const detectarInconsistencias = (canciones) => {
    return canciones.map(cancion => {
        let error = null;

        if (!cancion.titulo || cancion.titulo.trim() === "") {
            error = "Falta título";
        } else if (cancion.duracion <= 0) {
            error = "Corrupta";
        } else if (!["mp3", "wav", "flac"].includes(cancion.formato.toLowerCase())) {
            error = "Formato no soportado";
        }

        return {
            titulo: cancion.titulo,
            estado: error ? "Inconsistente" : "Ok",
            motivo: error || "Sin errores"
        };
    });
};

const playlist = [
    { titulo: "Bohemian Rhapsody", duracion: 354, formato: "mp3" },
    { titulo: "", duracion: 200, formato: "wav" },
    { titulo: "Error track", duracion: -5, formato: "mp3" },
    { titulo: "Unknown", duracion: 180, formato: "ogg" }
];

console.log(detectarInconsistencias(playlist));