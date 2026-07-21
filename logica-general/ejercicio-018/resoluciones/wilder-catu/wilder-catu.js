// Reto Campuslands - Organización de listas de Soldadura

// Entradas
const soldadores = [
    {
        nombre: "Carlos",
        piezasSoldadas: 120,
        calidad: 96
    },
    {
        nombre: "Andrea",
        piezasSoldadas: 145,
        calidad: 99
    },
    {
        nombre: "Miguel",
        piezasSoldadas: 110,
        calidad: 91
    },
    {
        nombre: "Laura",
        piezasSoldadas: 130,
        calidad: 94
    },
    {
        nombre: "Sofía",
        piezasSoldadas: 125,
        calidad: 97
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la calidad obtenida
const ranking = soldadores.sort((a, b) => b.calidad - a.calidad);

// Salida
console.log("=== Ranking de Soldadores ===");

ranking.forEach((soldador, posicion) => {
    console.log(
        `${posicion + 1}. ${soldador.nombre} | Calidad: ${soldador.calidad} | Piezas soldadas: ${soldador.piezasSoldadas}`
    );
});