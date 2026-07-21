// Reto Campuslands - Organización de listas de Ping Pong

// Entradas
const jugadores = [
    {
        nombre: "Ana",
        puntos: 320,
        victorias: 12
    },
    {
        nombre: "David",
        puntos: 450,
        victorias: 18
    },
    {
        nombre: "Sofía",
        puntos: 390,
        victorias: 15
    },
    {
        nombre: "Miguel",
        puntos: 280,
        victorias: 10
    },
    {
        nombre: "Laura",
        puntos: 500,
        victorias: 20
    }
];

// Organización de la lista
// Ordenar de mayor a menor según los puntos obtenidos
const ranking = jugadores.sort((a, b) => b.puntos - a.puntos);

// Salida
console.log("=== Ranking de Jugadores de Ping Pong ===");

ranking.forEach((jugador, posicion) => {
    console.log(
        `${posicion + 1}. ${jugador.nombre} | Puntos: ${jugador.puntos} | Victorias: ${jugador.victorias}`
    );
});