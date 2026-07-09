function detectarInconsistencias(playlist) {
    return playlist.filter(cancion => {
        const duracionInvalida = cancion.duracionSegundos <= 0;
        const nombreVacio = !cancion.nombre || cancion.nombre.trim() === "";
        const idDuplicado = playlist.filter(c => c.id === cancion.id).length > 1;

        return duracionInvalida || nombreVacio || idDuplicado;
    });
}

const playlist = [
    { id: 1, nombre: "Bohemian Rhapsody", duracionSegundos: 354 },
    { id: 2, nombre: "", duracionSegundos: 200 },
    { id: 1, nombre: "Under Pressure", duracionSegundos: 248 },
    { id: 3, nombre: "Radio Ga Ga", duracionSegundos: -10 }
];

console.log("Inconsistencias detectadas:", detectarInconsistencias(playlist));
