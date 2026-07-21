// Reto Campuslands - Organización de listas de Paracaidismo

// Entradas
const participantes = [
    {
        nombre: "Carlos",
        saltos: 45,
        puntaje: 92
    },
    {
        nombre: "María",
        saltos: 60,
        puntaje: 98
    },
    {
        nombre: "Andrés",
        saltos: 38,
        puntaje: 85
    },
    {
        nombre: "Sofía",
        saltos: 52,
        puntaje: 95
    },
    {
        nombre: "Valeria",
        saltos: 41,
        puntaje: 89
    }
];

// Organización de la lista
// Ordenar de mayor a menor según el puntaje obtenido
const ranking = participantes.sort((a, b) => b.puntaje - a.puntaje);

// Salida
console.log("=== Ranking de Participantes de Paracaidismo ===");

ranking.forEach((participante, posicion) => {
    console.log(
        `${posicion + 1}. ${participante.nombre} | Puntaje: ${participante.puntaje} | Saltos: ${participante.saltos}`
    );
});