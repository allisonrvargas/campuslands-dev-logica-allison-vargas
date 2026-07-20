/**
 * Calcula la probabilidad de que el jugador A gane el próximo punto.
 * @param {number} efectividadA - Victorias de A en sus últimos 100 puntos.
 * @param {number} efectividadB - Victorias de B en sus últimos 100 puntos.
 * @returns {string} - Porcentaje de probabilidad de victoria para A.
 */
function calcularProbabilidadPunto(efectividadA, efectividadB) {
    const totalEfectividad = efectividadA + efectividadB;
    
    if (totalEfectividad === 0) return "50.00%";
    
    const probabilidadA = (efectividadA / totalEfectividad) * 100;
    
    return `${probabilidadA.toFixed(2)}%`;
}

// Ejemplo: Jugador A tiene 60/100, Jugador B tiene 40/100
console.log("Probabilidad de victoria del Jugador A:", calcularProbabilidadProbabilidad(60, 40));