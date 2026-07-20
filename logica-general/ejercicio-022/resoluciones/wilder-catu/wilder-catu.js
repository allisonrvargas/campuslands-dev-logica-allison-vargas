// Reto Campuslands - Clasificación por Reglas
// Temática: Ranking de Fútbol Sala

// Entradas
const equipos = [
    {
        nombre: "Tigres FC",
        puntos: 38
    },
    {
        nombre: "Leones FS",
        puntos: 31
    },
    {
        nombre: "Águilas United",
        puntos: 25
    },
    {
        nombre: "Halcones",
        puntos: 18
    },
    {
        nombre: "Panteras",
        puntos: 10
    }
];

// Función para clasificar a los equipos
function clasificarEquipo(puntos) {
    if (puntos >= 35) {
        return "Candidato al campeonato";
    } else if (puntos >= 28) {
        return "Zona de clasificación";
    } else if (puntos >= 20) {
        return "Media tabla";
    } else if (puntos >= 12) {
        return "Zona de riesgo";
    } else {
        return "Último lugar";
    }
}

// Salida
console.log("=== Clasificación de Equipos de Fútbol Sala ===");

equipos.forEach(equipo => {
    console.log(
        `${equipo.nombre} | ${equipo.puntos} puntos | Estado: ${clasificarEquipo(equipo.puntos)}`
    );
});