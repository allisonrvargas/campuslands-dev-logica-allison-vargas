// Reto Campuslands - Organización de listas de Dibujo Digital

// Entradas
const ilustradores = [
    {
        nombre: "Andrea",
        ilustraciones: 35,
        calificacion: 98
    },
    {
        nombre: "Carlos",
        ilustraciones: 28,
        calificacion: 90
    },
    {
        nombre: "Sofía",
        ilustraciones: 42,
        calificacion: 100
    },
    {
        nombre: "Miguel",
        ilustraciones: 31,
        calificacion: 94
    },
    {
        nombre: "Valeria",
        ilustraciones: 39,
        calificacion: 97
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la calificación obtenida
const ranking = ilustradores.sort((a, b) => b.calificacion - a.calificacion);

// Salida
console.log("=== Ranking de Ilustradores de Dibujo Digital ===");

ranking.forEach((ilustrador, posicion) => {
    console.log(
        `${posicion + 1}. ${ilustrador.nombre} | Calificación: ${ilustrador.calificacion} | Ilustraciones: ${ilustrador.ilustraciones}`
    );
});