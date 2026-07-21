function calcularNuevoMMR(mmrActual, performanceScore, victoria, nivelOponente) {
    let cambioMMR = 0;

    cambioMMR = victoria ? 20 : -20;

    cambioMMR *= nivelOponente;

    if (performanceScore > 80) {
        cambioMMR += (cambioMMR * 0.5);
    }

    const nuevoMMR = Math.max(0, mmrActual + cambioMMR);

    return {
        mmr_anterior: mmrActual,
        mmr_nuevo: nuevoMMR,
        cambio: cambioMMR,
        explicacion: `Resultado: ${victoria ? "Victoria" : "Derrota"} contra oponente nivel ${nivelOponente}. Desempeño: ${performanceScore}.`
    };
}

console.log("Caso normal (Victoria):", calcularNuevoMMR(1200, 85, true, 2));
console.log("Caso borde (Derrota, MMR cerca de 0):", calcularNuevoMMR(10, 50, false, 3));