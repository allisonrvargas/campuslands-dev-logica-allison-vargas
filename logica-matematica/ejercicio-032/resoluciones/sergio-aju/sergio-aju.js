/**
  @param {number} efectividadJugador 
  @param {number} puntosParaGanar 
 */
  function calcularProbabilidadSet(efectividadJugador, puntosParaGanar) {
    if (efectividadJugador < 0 || efectividadJugador > 100) {
        return { error: "La efectividad debe estar entre 0 y 100" };
    }
    const p = efectividadJugador / 100;
    const probabilidadGanar = Math.pow(p, puntosParaGanar);

    return {
        probabilidad_porcentaje: (probabilidadGanar * 100).toFixed(2) + "%",
        resultado: probabilidadGanar > 0.5 ? "Alta probabilidad" : "Baja probabilidad",
        explicacion: `Con una efectividad del ${efectividadJugador}%, la probabilidad de ganar ${puntosParaGanar} puntos seguidos es del ${(probabilidadGanar * 100).toFixed(2)}%.`
    };
}
console.log("Caso Normal:", calcularProbabilidadSet(80, 11));
console.log("Caso Borde:", calcularProbabilidadSet(0, 11));