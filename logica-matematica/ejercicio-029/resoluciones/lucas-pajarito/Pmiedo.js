const peliculas = [
    {
        titulo: "La Casa Oscura",
        duracion: 90
    },
    {
        titulo: "Noche Eterna",
        duracion: 105
    },
    {
        titulo: "El Bosque Maldito",
        duracion: 120
    },
    {
        titulo: "Sombras del Terror",
        duracion: 135
    },
    {
        titulo: "El Último Grito",
        duracion: 150
    }
];

function analizarDuraciones(peliculas) {

    console.log("=== PELÍCULAS DE MIEDO ===");

    peliculas.forEach(pelicula => {

        console.log(`Película: ${pelicula.titulo}`);
        console.log(`Duración: ${pelicula.duracion} minutos`);

        if (pelicula.duracion % 15 === 0) {
            console.log("La duración es divisible entre 15.");
        } else {
            console.log("La duración NO es divisible entre 15.");
        }

        if (pelicula.duracion % 2 === 0) {
            console.log("La duración es un número par.");
        } else {
            console.log("La duración es un número impar.");
        }

        console.log("--------------------------------------");

    });

}

analizarDuraciones(peliculas);