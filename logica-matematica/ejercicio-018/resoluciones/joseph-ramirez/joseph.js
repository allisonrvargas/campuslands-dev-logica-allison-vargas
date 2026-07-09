const normalizarPuntajesSoldadura = (participantes, bono, penalizacion) => {
    if (!participantes?.length || typeof bono !== 'number' || typeof penalizacion !== 'number') {
        return { puntaje_final: 0, clasificacion: "inválido", explicacion: "Error: Parámetros numéricos corruptos o vacíos." };
    }

    const sumaTotal = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedioBase = sumaTotal / participantes.length;

    const puntajeFinal = Math.round(promedioBase + bono - penalizacion);

    const clasificacion = puntajeFinal >= 25 ? "competitivo" : puntajeFinal >= 15 ? "estándar" : "principiante";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(normalizarPuntajesSoldadura([12, 18, 25, 30], 8, 3));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías) ---");
console.log(normalizarPuntajesSoldadura([], 0, 0));

console.log("\n--- Prueba 3: Caso Propio (Certificación de Soldadura TIG de Alta Precisión) ---");
console.log(calcularRankingArquitectura([26, 24, 22, 28], 6, 3));