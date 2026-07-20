function calcularRankingFutbolSala(victorias, empates, derrotas, golesFavor, golesContra) {
    const totalPartidos = victorias + empates + derrotas;
    
    const puntosTotales = (victorias * 3) + empates;
    
    const porcentajeVictorias = totalPartidos > 0 ? (victorias / totalPartidos) * 100 : 0;
    
    const diferenciaGoles = golesFavor - golesContra;
    
    let nivel = "";
    if (puntosTotales >= 20 && porcentajeVictorias >= 50) nivel = "Élite";
    else if (puntosTotales >= 10) nivel = "Competitivo";
    else nivel = "En formación";

    return {
        puntos: puntosTotales,
        efectividad: `${porcentajeVictorias.toFixed(2)}%`,
        diferencia_goles: diferenciaGoles,
        nivel: nivel,
        explicacion: `Ranking calculado tras ${totalPartidos} partidos. Diferencia de goles: ${diferenciaGoles}.`
    };
}

console.log("Caso normal:", calcularRankingFutbolSala(7, 2, 1, 25, 10));
console.log("Caso borde (Equipo sin victorias):", calcularRankingFutbolSala(0, 2, 5, 2, 15));