const analizarTiempos = (tiempos, umbral) => {
    if (tiempos.length === 0) return { error: "Sin datos" };

    const suma = tiempos.reduce((a, b) => a + b, 0);
    const promedio = suma / tiempos.length;

    const ordenados = [...tiempos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    const mediana = ordenados.length % 2 !== 0 
        ? ordenados[mitad] 
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    const clasificacion = mediana > umbral ? "Larga" : "Estándar";

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        clasificacion: clasificacion,
        explicacion: "Comparación de tendencia central para determinar categoría de duración."
    };
};

console.log(analizarTiempos([20, 25, 30, 40, 50], 30));
console.log(analizarTiempos([10, 12, 15], 30));