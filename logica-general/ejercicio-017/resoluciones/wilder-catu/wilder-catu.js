// Reto Campuslands - Organización de listas de Arquitectura 3D

// Entradas
const arquitectos = [
    {
        nombre: "Andrea",
        proyectos: 15,
        puntuacion: 96
    },
    {
        nombre: "Carlos",
        proyectos: 12,
        puntuacion: 89
    },
    {
        nombre: "Sofía",
        proyectos: 20,
        puntuacion: 99
    },
    {
        nombre: "Miguel",
        proyectos: 18,
        puntuacion: 94
    },
    {
        nombre: "Valeria",
        proyectos: 16,
        puntuacion: 91
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la puntuación obtenida
const ranking = arquitectos.sort((a, b) => b.puntuacion - a.puntuacion);

// Salida
console.log("=== Ranking de Arquitectos 3D ===");

ranking.forEach((arquitecto, posicion) => {
    console.log(
        `${posicion + 1}. ${arquitecto.nombre} | Puntuación: ${arquitecto.puntuacion} | Proyectos: ${arquitecto.proyectos}`
    );
});