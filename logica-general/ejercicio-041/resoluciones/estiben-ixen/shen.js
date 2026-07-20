function clasificarJugador(jugador) {
    const { rango, tasaVictorias, reportesComportamiento } = jugador;

    if (reportesComportamiento > 5) {
        return { clasificacion: "Suspendido", razon: "El jugador excede el límite permitido de reportes negativos." };
    }

    if (rango === "Platino" && tasaVictorias > 70) {
        return { clasificacion: "Pro", razon: "Alto rendimiento y comportamiento ejemplar." };
    }
    
    if ((rango === "Platino" || rango === "Oro") && tasaVictorias >= 50) {
        return { clasificacion: "Semi-Pro", razon: "Rendimiento sólido dentro de los estándares competitivos." };
    }

    return { clasificacion: "Casual", razon: "Jugador en desarrollo, no clasifica para torneos de élite." };
}

const jugadorEjemplo = { rango: "Oro", tasaVictorias: 60, reportesComportamiento: 0 };
console.log(clasificarJugador(jugadorEjemplo));