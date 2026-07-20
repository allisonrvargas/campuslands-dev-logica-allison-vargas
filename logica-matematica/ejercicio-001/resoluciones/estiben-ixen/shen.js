function calcularPuntajeFinal(puntosBase, eliminaciones, muertes, esVictoria) {
    const bonoVictoria = esVictoria ? 50 : 0;
    const bonoEliminaciones = eliminaciones * 10;
    const penalizacionMuertes = muertes * 5;
    
    let puntajeTotal = puntosBase + bonoVictoria + bonoEliminaciones - penalizacionMuertes;
    
    if (puntajeTotal < 0) {
        puntajeTotal = 0;
    }
    
    return puntajeTotal;
}

const resultado = calcularPuntajeFinal(100, 5, 2, true);
console.log("Puntaje Final:", resultado);