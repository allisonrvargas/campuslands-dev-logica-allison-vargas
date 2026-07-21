function calcularRankingArquitectura(metricas, numTexturas, tiempoRender, factorEscala) {
    let puntaje = metricas.reduce((acc, val) => acc + val, 0);

    if (numTexturas > 50) {
        puntaje *= factorEscala;
    }

    if (tiempoRender > 120) {
        puntaje -= (puntaje * 0.10);
    }

    let categoria = "";
    if (puntaje > 100) categoria = "Maestría";
    else if (puntaje >= 50) categoria = "Prototipo avanzado";
    else categoria = "Fase inicial";

    return {
        puntaje_final: parseFloat(puntaje.toFixed(2)),
        categoria: categoria,
        explicacion: `Puntaje ajustado tras aplicar reglas de complejidad (${numTexturas} texturas) y optimización (${tiempoRender} min).`
    };
}

console.log("Caso normal:", calcularRankingArquitectura([20, 30, 40], 30, 100, 1.2));
console.log("Caso borde (penalizado):", calcularRankingArquitectura([20, 30, 40], 60, 150, 1.2));