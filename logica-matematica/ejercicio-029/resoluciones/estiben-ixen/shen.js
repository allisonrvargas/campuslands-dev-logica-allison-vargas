function evaluarSustoPelicula(pelicula) {

    const { nombre, cantidad_sustos, duracion_minutos } = pelicula;

    if (duracion_minutos <= 0) return { error: "Duración inválida" };

    const frecuencia = cantidad_sustos / (duracion_minutos / 10);

    const esRitmoCardiaco = (cantidad_sustos % 5 === 0 && cantidad_sustos > 10);

    let nivel = "";
    if (frecuencia > 8) nivel = "Terror Extremo";
    else if (frecuencia > 4) nivel = "Terror Psicológico";
    else nivel = "Suspenso";

    return {
        pelicula: nombre,
        frecuencia_sustos: parseFloat(frecuencia.toFixed(2)),
        es_ritmo_cardiaco: esRitmoCardiaco,
        nivel_intensidad: nivel
    };
}