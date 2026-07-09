const playlist = [
    {
        cancion: "Electric Dreams",
        reproducciones: 120
    },
    {
        cancion: "Night Drive",
        reproducciones: 135
    },
    {
        cancion: "Sky Lights",
        reproducciones: 150
    },
    {
        cancion: "Digital Waves",
        reproducciones: 165
    },
    {
        cancion: "Future Beats",
        reproducciones: 180
    }
];

function analizarSecuencia(playlist) {

    console.log("=== PLAYLIST MUSICAL ===");

    let diferenciaConstante = true;
    const diferencia = playlist[1].reproducciones - playlist[0].reproducciones;

    playlist.forEach(musica => {

        console.log(`Canción: ${musica.cancion}`);
        console.log(`Reproducciones: ${musica.reproducciones}`);
        console.log("--------------------------------");
    });

    for (let i = 1; i < playlist.length; i++) {

        if (
            playlist[i].reproducciones - playlist[i - 1].reproducciones !== diferencia
        ) {
            diferenciaConstante = false;
            break;
        }

    }

    console.log(`Incremento entre canciones: ${diferencia}`);

    if (diferenciaConstante) {
        console.log("La secuencia es aritmética.");
    } else {
        console.log("La secuencia no es aritmética.");
    }

}

analizarSecuencia(playlist);