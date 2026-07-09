function calcularRanking(participantes, bono, penalizacion) {
    if (!participantes || participantes.length === 0) {
        return { puntaje_final: 0, clasificacion: "sin datos" };
    }

    let sumaTotal = participantes.reduce((acc, val) => acc + val, 0);
    let promedio = sumaTotal / participantes.length;
    let puntajeFinal = promedio + bono - penalizacion;

    let clasificacion = "";
    if (puntajeFinal >= 30) {
        clasificacion = "elite";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        puntaje_final: parseFloat(puntajeFinal.toFixed(2)),
        clasificacion: clasificacion
    };
}