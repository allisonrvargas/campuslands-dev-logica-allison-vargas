const calcularRankingPlaylist = (duraciones, factor, penalizacion) => {
    if (duraciones.length === 0) return { puntaje_final: 0, clasificacion: "Estándar", explicacion: "Sin datos." };

    const suma = duraciones.reduce((a, b) => a + b, 0);
    let puntaje = (suma / factor) - (duraciones.length * penalizacion);
    
    if (puntaje < 0) puntaje = 0;

    return {
        puntaje_final: puntaje.toFixed(2),
        clasificacion: puntaje > 100 ? "Premium" : "Estándar",
        explicacion: "Cálculo de secuencia de duración ponderada con ajuste de penalización."
    };
};

console.log(calcularRankingPlaylist([180, 240, 300], 2, 10));
console.log(calcularRankingPlaylist([30, 30], 2, 50));