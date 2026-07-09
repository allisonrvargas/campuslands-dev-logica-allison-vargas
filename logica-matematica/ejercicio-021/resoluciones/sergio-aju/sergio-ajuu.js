function calcularPuntajeCompetitivo(victorias, derrotas, rachasConsecutivas) {
    const puntosPorVictoria = 10;
    const puntosPorDerrota = 5;
    const bonoRacha = 15;

    let puntaje = (victorias * puntosPorVictoria) - (derrotas * puntosPorDerrota);
    if (rachasConsecutivas >= 3) {
        puntaje += bonoRacha;
    }
    puntaje = Math.max(0, puntaje);

    return {
        puntaje_final: puntaje,
        clasificacion: puntaje > 50 ? "Pro" : "Amateur",
        explicacion: `Puntos: (${victorias}V * 10) - (${derrotas}D * 5) ${rachasConsecutivas >= 3 ? '+ bono racha' : ''}.`
    };
}
console.log("Caso Normal:", calcularPuntajeCompetitivo(6, 2, 4)); 
console.log("Caso Borde (Muchas derrotas):", calcularPuntajeCompetitivo(1, 5, 0));