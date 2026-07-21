// entradas
const partidas = ["ganada", "pendiente", "perdida"];
const prioridad = "alta";

// funcion para decidir que hacer
function decidirAccion(partidas, prioridad) {

    if (!Array.isArray(partidas) || partidas.length === 0) {
        return {
            accion: "sin accion",
            motivo: "no hay partidas para revisar"
        };
    }

    if (prioridad === "alta" && partidas.includes("perdida")) {
        return {
            accion: "analizar partida perdida",
            motivo: "las derrotas tienen prioridad para mejorar el rendimiento"
        };
    }

    if (partidas.includes("pendiente")) {
        return {
            accion: "jugar partida pendiente",
            motivo: "hay partidas que aun no se han completado"
        };
    }

    return {
        accion: "continuar entrenamiento",
        motivo: "no hay partidas pendientes ni derrotas por revisar"
    };
}

const resultado = decidirAccion(partidas, prioridad);

console.log("Resultado");
console.log(resultado);

// pruebas

console.log("\nCaso normal");

console.log(
    decidirAccion(
        ["ganada", "perdida", "pendiente"],
        "alta"
    )
);

console.log("\nCaso borde");

console.log(
    decidirAccion(
        [],
        "alta"
    )
);