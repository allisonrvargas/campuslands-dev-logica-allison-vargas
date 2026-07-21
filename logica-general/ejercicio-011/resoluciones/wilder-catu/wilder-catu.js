// Reto Campuslands - Organización de listas de Kickboxing

// Entradas
const peleadores = [
    {
        nombre: "Carlos",
        victorias: 15,
        derrotas: 2
    },
    {
        nombre: "Luis",
        victorias: 10,
        derrotas: 5
    },
    {
        nombre: "Andrea",
        victorias: 18,
        derrotas: 1
    },
    {
        nombre: "Miguel",
        victorias: 8,
        derrotas: 4
    }
];

// Organización de la lista
// Ordenar de mayor a menor según cantidad de victorias
const ranking = peleadores.sort((a, b) => b.victorias - a.victorias);

// Salida
console.log("=== Ranking de Peleadores de Kickboxing ===");

ranking.forEach((peleador, posicion) => {
    console.log(
        `${posicion + 1}. ${peleador.nombre} - Victorias: ${peleador.victorias} | Derrotas: ${peleador.derrotas}`
    );
});