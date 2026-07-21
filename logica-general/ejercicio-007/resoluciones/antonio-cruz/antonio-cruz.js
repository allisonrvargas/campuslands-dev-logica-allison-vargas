// entradas

const playlist = [
    {
        titulo: "Numb",
        artista: "Linkin Park",
        duracion: 185
    },
    {
        titulo: "",
        artista: "Canserbero",
        duracion: 240
    },
    {
        titulo: "Ella y Yo",
        artista: "",
        duracion: 300
    },
    {
        titulo: "Mal Habito",
        artista: "Paulo Londra",
        duracion: -10
    }
];

// funcion para detectar inconsistencias

function detectarInconsistencias(canciones) {

    if (!Array.isArray(canciones) || canciones.length === 0) {
        return ["La playlist esta vacia."];
    }

    const errores = [];

    for (const cancion of canciones) {

        if (cancion.titulo === "") {
            errores.push("Una cancion no tiene titulo.");
        }

        if (cancion.artista === "") {
            errores.push(`"${cancion.titulo}" no tiene artista.`);
        }

        if (cancion.duracion <= 0) {
            errores.push(`"${cancion.titulo}" tiene una duracion invalida.`);
        }
    }

    return errores;
}

console.log(detectarInconsistencias(playlist));

// pruebas

console.log("\nCaso normal");

console.log(
    detectarInconsistencias(playlist)
);

console.log("\nCaso borde");

console.log(
    detectarInconsistencias([])
);