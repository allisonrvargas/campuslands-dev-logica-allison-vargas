// Reto Campuslands - Organización de listas de Tatuajes

// Entradas
const tatuadores = [
    {
        nombre: "Laura",
        especialidad: "Realismo",
        clientesAtendidos: 120
    },
    {
        nombre: "Carlos",
        especialidad: "Tradicional",
        clientesAtendidos: 95
    },
    {
        nombre: "Andrea",
        especialidad: "Minimalista",
        clientesAtendidos: 150
    },
    {
        nombre: "Miguel",
        especialidad: "Blackwork",
        clientesAtendidos: 110
    },
    {
        nombre: "Sofía",
        especialidad: "Acuarela",
        clientesAtendidos: 135
    }
];

// Organización de la lista
// Ordenar de mayor a menor según la cantidad de clientes atendidos
const ranking = tatuadores.sort(
    (a, b) => b.clientesAtendidos - a.clientesAtendidos
);

// Salida
console.log("=== Ranking de Tatuadores ===");

ranking.forEach((tatuador, posicion) => {
    console.log(
        `${posicion + 1}. ${tatuador.nombre} | Especialidad: ${tatuador.especialidad} | Clientes atendidos: ${tatuador.clientesAtendidos}`
    );
});