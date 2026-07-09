const jugadores = [
    {
        nombre: "Carlos",
        victorias: 12,
        derrotas: 3,
        puntosPorVictoria: 3,
        puntosPorDerrota: 0
    },
    {
        nombre: "Laura",
        victorias: 10,
        derrotas: 5,
        puntosPorVictoria: 3,
        puntosPorDerrota: 0
    },
    {
        nombre: "Miguel",
        victorias: 15,
        derrotas: 2,
        puntosPorVictoria: 3,
        puntosPorDerrota: 0
    },
    {
        nombre: "Sofía",
        victorias: 8,
        derrotas: 6,
        puntosPorVictoria: 3,
        puntosPorDerrota: 0
    },
    {
        nombre: "Andrés",
        victorias: 11,
        derrotas: 4,
        puntosPorVictoria: 3,
        puntosPorDerrota: 0
    }
];

function calcularPuntaje(jugadores) {

    console.log("=== VIDEOJUEGOS COMPETITIVOS ===");

    jugadores.forEach(jugador => {

        const partidas = jugador.victorias + jugador.derrotas;

        const puntos =
            (jugador.victorias * jugador.puntosPorVictoria) +
            (jugador.derrotas * jugador.puntosPorDerrota);

        const promedio = puntos / partidas;

        console.log(`Jugador: ${jugador.nombre}`);
        console.log(`Victorias: ${jugador.victorias}`);
        console.log(`Derrotas: ${jugador.derrotas}`);
        console.log(`Partidas jugadas: ${partidas}`);
        console.log(`Puntaje total: ${puntos}`);
        console.log(`Promedio por partida: ${promedio.toFixed(2)}`);
        console.log("--------------------------------");
    });

}

calcularPuntaje(jugadores);