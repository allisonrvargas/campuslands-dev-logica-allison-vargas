// Reto Campuslands - Organización de listas de Comida Urbana

// Entradas
const puestosComida = [
    {
        nombre: "Tacos El Sabor",
        especialidad: "Tacos",
        calificacion: 4.8
    },
    {
        nombre: "Burger Street",
        especialidad: "Hamburguesas",
        calificacion: 4.5
    },
    {
        nombre: "Hot Dog Express",
        especialidad: "Hot Dogs",
        calificacion: 4.2
    },
    {
        nombre: "Pizza Rápida",
        especialidad: "Pizza",
        calificacion: 4.7
    },
    {
        nombre: "Arepas Urbanas",
        especialidad: "Arepas",
        calificacion: 4.9
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la calificación
const ranking = puestosComida.sort((a, b) => b.calificacion - a.calificacion);

// Salida
console.log("=== Ranking de Puestos de Comida Urbana ===");

ranking.forEach((puesto, posicion) => {
    console.log(
        `${posicion + 1}. ${puesto.nombre} | Especialidad: ${puesto.especialidad} | Calificación: ${puesto.calificacion}`
    );
});