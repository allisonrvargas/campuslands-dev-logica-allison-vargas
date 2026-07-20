function analizarDesempenoEsports(partidas) {
    if (!partidas || partidas.length === 0) return "Error: No hay datos.";

    const suma = partidas.reduce((a, b) => a + b, 0);
    const promedio = suma / partidas.length;

    const sorted = [...partidas].sort((a, b) => a - b);
    const mitad = Math.floor(sorted.length / 2);
    const mediana = sorted.length % 2 !== 0 
        ? sorted[mitad] 
        : (sorted[mitad - 1] + sorted[mitad]) / 2;

    let estatus = "";
    if (promedio < mediana * 0.8) estatus = "Inconsistente (picos negativos)";
    else if (promedio > mediana * 1.2) estatus = "Estrella (picos positivos)";
    else estatus = "Jugador Estable";

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        mediana: mediana,
        estatus: estatus,
        explicacion: `Análisis basado en ${partidas.length} partidas. Diferencia estadística detectada.`
    };
}

console.log("Caso normal (estable):", analizarDesempenoEsports([10, 12, 11, 13, 11]));
console.log("Caso borde (picos positivos):", analizarDesempenoEsports([5, 6, 5, 25, 6]));