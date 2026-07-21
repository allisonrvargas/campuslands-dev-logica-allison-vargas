function calcularPuntajeKickboxing(participantes, bono, penalizacion) {    
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "La lista de participantes no puede estar vacía" };
    }


    const sumaBase = participantes.reduce((acc, pts) => acc + pts, 0);
    const puntajeFinal = sumaBase + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "profesional";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "amateur";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base (${sumaBase}) + bono (${bono}) - penalización (${penalizacion}) = ${puntajeFinal}.`
    };
}

const resultado1 = calcularPuntajeKickboxing([12, 18, 25, 30], 8, 3);
console.log("Caso Normal:", resultado1);

const resultado2 = calcularPuntajeKickboxing([5, 2], 0, 10);
console.log("Caso Borde:", resultado2);