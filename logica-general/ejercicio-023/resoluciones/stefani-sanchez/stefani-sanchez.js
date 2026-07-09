// Ejercicio 023 - Toma de decisiones
// Tematica: Torneo de esports

// Entradas del problema
const jugador = {
    nombre: "Shadow",
    victorias: 8,
    derrotas: 2,
    nivel: 15,
    conducta: "buena"
};

// Funcion que clasifica al jugador según reglas del torneo
function clasificarJugador(datos) {

    if (
        datos.victorias >= 10 &&
        datos.nivel >= 20 &&
        datos.conducta === "buena"
    ) {
        return {
            categoria: "Jugador Elite",
            motivo: "Cumple todos los requisitos para competir en la categoria mas alta."
        };
    }

    if (
        datos.victorias >= 5 &&
        datos.nivel >= 10 &&
        datos.conducta === "buena"
    ) {
        return {
            categoria: "Jugador Competitivo",
            motivo: "Tiene experiencia suficiente para participar en torneos."
        };
    }

    if (datos.conducta === "mala") {
        return {
            categoria: "Jugador Restringido",
            motivo: "Su comportamiento no cumple las reglas del torneo."
        };
    }

    return {
        categoria: "Jugador Principiante",
        motivo: "Debe mejorar sus resultados y experiencia."
    };
}


// Prueba normal
const resultado1 = clasificarJugador(jugador);

console.log("Prueba normal:");
console.log(resultado1);


// Caso borde
const jugadorNuevo = {
    nombre: "Nova",
    victorias: 0,
    derrotas: 5,
    nivel: 1,
    conducta: "buena"
};

const resultado2 = clasificarJugador(jugadorNuevo);

console.log("\nCaso borde:");
console.log(resultado2);