// Reto Campuslands - Clasificación por Reglas
// Temática: Torneo de Esports

// Entradas
const equipos = [
    {
        nombre: "Shadow Wolves",
        victorias: 12
    },
    {
        nombre: "Cyber Titans",
        victorias: 9
    },
    {
        nombre: "Nova Gaming",
        victorias: 7
    },
    {
        nombre: "Phoenix Squad",
        victorias: 4
    },
    {
        nombre: "Storm Legends",
        victorias: 2
    }
];

// Función para clasificar los equipos
function clasificarEquipo(victorias) {
    if (victorias >= 10) {
        return "Favorito al título";
    } else if (victorias >= 8) {
        return "Clasificado a playoffs";
    } else if (victorias >= 5) {
        return "En competencia";
    } else if (victorias >= 3) {
        return "En riesgo de eliminación";
    } else {
        return "Eliminado";
    }
}

// Salida
console.log("=== Clasificación del Torneo de Esports ===");

equipos.forEach((equipo) => {
    console.log(
        `${equipo.nombre} | Victorias: ${equipo.victorias} | Estado: ${clasificarEquipo(equipo.victorias)}`
    );
});