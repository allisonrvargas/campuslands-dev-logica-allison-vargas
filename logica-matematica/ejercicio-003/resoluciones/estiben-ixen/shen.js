function calcularEstadisticasJugador(partidas) {
    if (partidas.length === 0) return { promedio: 0, mediana: 0 };

    const suma = partidas.reduce((acc, val) => acc + val, 0);
    const promedio = suma / partidas.length;

    const ordenadas = [...partidas].sort((a, b) => a - b);
    const mitad = Math.floor(ordenadas.length / 2);
    const mediana = ordenadas.length % 2 !== 0 
        ? ordenadas[mitad] 
        : (ordenadas[mitad - 1] + ordenadas[mitad]) / 2;

    return { promedio, mediana };
}

const puntuaciones = [1200, 1500, 1000, 2000, 1800];
console.log(calcularEstadisticasJugador(puntuaciones));