/**
 * Calcula la actualización del Elo tras una partida.
 * @param {number} eloActual - Puntaje del jugador.
 * @param {number} eloOponente - Puntaje del rival.
 * @param {boolean} victoria - Resultado de la partida.
 * @returns {number} - Nuevo puntaje Elo.
 */
function calcularNuevoElo(eloActual, eloOponente, victoria) {
    const K = 32; 
    const diferencia = eloOponente - eloActual;
    
    const probabilidadVictoria = 1 / (1 + Math.pow(10, (diferencia / 400)));
    
    const ajuste = victoria ? (1 - probabilidadVictoria) : (0 - probabilidadVictoria);
    const nuevoElo = Math.round(eloActual + (K * ajuste));
    
    return Math.max(0, nuevoElo);
}

console.log("Nuevo Elo tras victoria:", calcularNuevoElo(1500, 1700, true));