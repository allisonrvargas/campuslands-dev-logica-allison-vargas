function calcularPuntajePeliculas(votos, multiplicador, ajuste) {
    if (!votos || votos.length === 0) {
        return { puntaje_final: 0, clasificacion: "sin datos" };
    }

    const sumaVotos = votos.reduce((acc, val) => acc + val, 0);
    const promedio = sumaVotos / votos.length;
    const puntajeFinal = Math.round(promedio * multiplicador + ajuste)
    let clasificacion = "";
    if (puntajeFinal >= 80) {
        clasificacion = "culto";
    } else if (puntajeFinal >= 50) {
        clasificacion = "popular";
    } else {
        clasificacion = "experimental";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio de votos (${promedio.toFixed(2)}) multiplicado por ${multiplicador} con ajuste de ${ajuste}.`
    };
}
console.log("Caso Normal:", calcularPuntajePeliculas([7, 9, 8, 10], 5, 2));
console.log("Caso Borde (Voto cero):", calcularPuntajePeliculas([0, 0], 5, 2));