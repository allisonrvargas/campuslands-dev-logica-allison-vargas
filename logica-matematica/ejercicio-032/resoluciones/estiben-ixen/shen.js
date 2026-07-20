function calcularDesempeno(participantes, bono, penalizacion) {
    const sumaBase = participantes.reduce((acc, val) => acc + val, 0);
    
    let puntajeFinal = sumaBase + bono - penalizacion;
    
    if (puntajeFinal < 0) puntajeFinal = 0;
    
    let clasificacion = "";
    if (puntajeFinal <= 20) {
        clasificacion = "principiante";
    } else if (puntajeFinal <= 40) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "profesional";
    }
    
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion
    };
}

console.log(calcularDesempeno([12, 18, 25, 30], 8, 3)); 
console.log(calcularDesempeno([], 5, 10));