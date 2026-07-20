// Reto Campuslands - Organización de listas de Animación 3D

// Entradas
const animadores = [
    {
        nombre: "Andrea",
        proyectos: 18,
        calificacion: 97
    },
    {
        nombre: "Carlos",
        proyectos: 12,
        calificacion: 89
    },
    {
        nombre: "Sofía",
        proyectos: 25,
        calificacion: 100
    },
    {
        nombre: "Miguel",
        proyectos: 20,
        calificacion: 95
    },
    {
        nombre: "Valeria",
        proyectos: 16,
        calificacion: 92
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la calificación obtenida
const ranking = animadores.sort((a, b) => b.calificacion - a.calificacion);

// Salida
console.log("=== Ranking de Animadores 3D ===");

ranking.forEach((animador, posicion) => {
    console.log(
        `${posicion + 1}. ${animador.nombre} | Calificación: ${animador.calificacion} | Proyectos: ${animador.proyectos}`
    );
});