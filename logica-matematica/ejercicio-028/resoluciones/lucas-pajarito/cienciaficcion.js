const peliculas = [
    {
        titulo: "Galaxia Infinita",
        puntuacion: 8.5
    },
    {
        titulo: "Código Estelar",
        puntuacion: 8.7
    },
    {
        titulo: "Horizonte Cuántico",
        puntuacion: 8.9
    },
    {
        titulo: "Viaje Interestelar",
        puntuacion: 9.1
    },
    {
        titulo: "Planeta Omega",
        puntuacion: 9.3
    }
];

function analizarPatron(peliculas) {

    console.log("=== PELÍCULAS DE CIENCIA FICCIÓN ===");

    const incremento = (
        peliculas[1].puntuacion - peliculas[0].puntuacion
    ).toFixed(1);

    let patron = true;

    peliculas.forEach(pelicula => {

        console.log(`Película: ${pelicula.titulo}`);
        console.log(`Puntuación: ${pelicula.puntuacion}`);
        console.log("-----------------------------------");

    });

    for (let i = 1; i < peliculas.length; i++) {

        const diferencia = (
            peliculas[i].puntuacion - peliculas[i - 1].puntuacion
        ).toFixed(1);

        if (diferencia !== incremento) {
            patron = false;
            break;
        }

    }

    console.log(`Incremento detectado: ${incremento}`);

    if (patron) {
        console.log("Existe un patrón constante de puntuación.");
    } else {
        console.log("No existe un patrón constante.");
    }

}

analizarPatron(peliculas);