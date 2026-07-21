function calcularKickboxing(participantes, bono, penalizacion) {
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return "Error: Lista de participantes vacía.";
    }

    let puntajesIndividuales = participantes.map(p => p + bono - penalizacion);
    let puntajeGlobal = puntajesIndividuales.reduce((acc, curr) => acc + curr, 0);
    
    let promedio = puntajeGlobal / participantes.length;
    let clasificacion = "";

    if (promedio >= 30) clasificacion = "elite";
    else if (promedio >= 20) clasificacion = "competitivo";
    else clasificacion = "novato";

    return {
        puntaje_final: puntajeGlobal,
        clasificacion: clasificacion,
        detalle: puntajesIndividuales
    };
}

console.log(calcularKickboxing([12, 18, 25, 30], 8, 3)); 
console.log(calcularKickboxing([5, 2], 1, 10));