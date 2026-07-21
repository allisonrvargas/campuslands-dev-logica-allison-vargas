function auditarPlaylist(canciones) {
    let reporte = [];

    for (let i = 0; i < canciones.length; i++) {
        let cancion = canciones[i];
        let errores = [];
        if (cancion.duracion <= 0) errores.push("Duración negativa o cero");
        if (cancion.volumen < 0 || cancion.volumen > 100) errores.push("Volumen fuera de rango");

        reporte.push({
            titulo: cancion.titulo,
            esValida: errores.length === 0,
            motivos: errores
        });
    }
    return reporte;
}

const miPlaylist = [
    { titulo: "Song A", duracion: 200, volumen: 80 },
    { titulo: "Song B", duracion: -5, volumen: 150 }
];

console.log(auditarPlaylist(miPlaylist));