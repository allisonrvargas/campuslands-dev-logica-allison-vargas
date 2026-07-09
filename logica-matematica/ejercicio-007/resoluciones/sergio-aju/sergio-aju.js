function calcularPuntajePlaylist(participantes, bono, penalizacion) {
    if (!participantes || participantes.length === 0) {
        return { puntaje_final: 0, clasificacion: "sin datos" };
    }
    const sumaParticipantes = participantes.reduce((acc, val) => acc + val, 0);
    const puntajeFinal = sumaParticipantes + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "profesional";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "principiante";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma de participantes (${sumaParticipantes}) + bono (${bono}) - penalizacion (${penalizacion}).`
    };
}
console.log("Caso Normal:", calcularPuntajePlaylist([12, 18, 25, 30], 8, 3));
console.log("Caso Borde:", calcularPuntajePlaylist([], 8, 3));