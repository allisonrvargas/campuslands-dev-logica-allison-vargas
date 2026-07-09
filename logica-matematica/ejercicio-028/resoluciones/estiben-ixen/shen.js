function evaluarPuntajePeliculas(pelicula) {
    const { nombre, calificacion_critica, votos_audiencia, popularidad } = pelicula;

    const puntajeBase = (calificacion_critica * 6) + (popularidad * 0.4);

    let multiplicador = 1.0;
    if (votos_audiencia > 1000000) {
        multiplicador = 1.2;
    } else if (votos_audiencia < 5000) {
        multiplicador = 0.8;
    }

    const puntajeFinal = (puntajeBase * multiplicador).toFixed(2);

    let categoria = "";
    if (puntajeFinal >= 80) categoria = "Obra Maestra";
    else if (puntajeFinal >= 50) categoria = "Recomendada";
    else categoria = "Bajo Radar";

    return {
        pelicula: nombre,
        puntaje_ajustado: parseFloat(puntajeFinal),
        categoria: categoria
    };
}