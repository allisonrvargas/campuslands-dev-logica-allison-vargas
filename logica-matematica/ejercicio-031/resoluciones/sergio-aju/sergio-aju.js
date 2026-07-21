function calcularPuntajeKickboxing(participantes, bono, penalizacion) {
    const sumaBase = participantes.reduce((acc, curr) => acc + curr, 0);
    const puntajeFinal = sumaBase + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal >= 50) {
        clasificacion = "elite";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron ${sumaBase} puntos base, se añadió un bono de ${bono} y se restó una penalización de ${penalizacion}.`
    };
}

console.log("Caso normal:", calcularPuntajeKickboxing([12, 18, 25, 30], 8, 3));

console.log("Caso borde:", calcularPuntajeKickboxing([], 5, 10));