// entradas

const jugador1 = {
    nombre: "Carlos",
    puntos: 11
};

const jugador2 = {
    nombre: "Luis",
    puntos: 8
};

// funcion para comparar jugadores

function compararJugadores(jugadorA, jugadorB) {

    if (!jugadorA || !jugadorB) {
        return "No hay suficientes datos para comparar.";
    }

    if (jugadorA.puntos > jugadorB.puntos) {
        return `${jugadorA.nombre} gana la partida.`;
    }

    if (jugadorB.puntos > jugadorA.puntos) {
        return `${jugadorB.nombre} gana la partida.`;
    }

    return "La partida termina en empate.";
}

console.log(compararJugadores(jugador1, jugador2));

// pruebas

console.log("\nCaso normal");

console.log(
    compararJugadores(
        { nombre: "Ana", puntos: 9 },
        { nombre: "Sofia", puntos: 11 }
    )
);

console.log("\nCaso borde");

console.log(
    compararJugadores(
        { nombre: "Pedro", puntos: 10 },
        { nombre: "Juan", puntos: 10 }
    )
);