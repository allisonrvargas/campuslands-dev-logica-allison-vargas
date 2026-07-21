function evaluarTorneoPingPong(jugadorA, jugadorB) {
    if (jugadorA.setsGanados > jugadorB.setsGanados) {
        return { ganador: jugadorA.nombre };
    } else if (jugadorB.setsGanados > jugadorA.setsGanados) {
        return { ganador: jugadorB.nombre };
    } else {
        const diffA = jugadorA.puntosFavor - jugadorA.puntosContra;
        const diffB = jugadorB.puntosFavor - jugadorB.puntosContra;
        
        if (diffA > diffB) return { ganador: jugadorA.nombre };
        if (diffB > diffA) return { ganador: jugadorB.nombre };
        return { ganador: "Empate técnico" };
    }
}