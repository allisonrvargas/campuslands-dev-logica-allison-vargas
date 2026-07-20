// Reto Campuslands - Clasificación por reglas
// Temática: Videojuegos Competitivos

// Entradas
const jugadores = [
    {
        nombre: "Carlos",
        puntos: 1850
    },
    {
        nombre: "Andrea",
        puntos: 1420
    },
    {
        nombre: "Miguel",
        puntos: 980
    },
    {
        nombre: "Sofía",
        puntos: 680
    },
    {
        nombre: "Valeria",
        puntos: 320
    }
];

// Clasificación según los puntos obtenidos
function clasificarJugador(puntos) {
    if (puntos >= 1800) {
        return "Diamante";
    } else if (puntos >= 1400) {
        return "Platino";
    } else if (puntos >= 1000) {
        return "Oro";
    } else if (puntos >= 600) {
        return "Plata";
    } else {
        return "Bronce";
    }
}

// Salida
console.log("=== Clasificación de Jugadores Competitivos ===");

jugadores.forEach(jugador => {
    console.log(
        `${jugador.nombre} | ${jugador.puntos} puntos | Rango: ${clasificarJugador(jugador.puntos)}`
    );
});