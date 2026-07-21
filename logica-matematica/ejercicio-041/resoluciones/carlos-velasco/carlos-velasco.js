const calcularRanking = (victorias, derrotas, factorBono, penalizacion) => {
    let puntaje = (victorias * factorBono) - (derrotas * penalizacion);
    
    if (puntaje < 0) {
        puntaje = 0;
    }

    const clasificacion = puntaje > 50 ? "Élite" : "Competitivo";

    return {
        puntaje_final: puntaje,
        clasificacion: clasificacion,
        explicacion: "Cálculo basado en victorias ponderadas menos penalización de derrotas."
    };
};

console.log(calcularRanking(10, 2, 8, 3));
console.log(calcularRanking(1, 5, 8, 3));