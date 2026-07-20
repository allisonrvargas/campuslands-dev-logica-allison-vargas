const jugador = {
    victorias: 18,
    derrotas: 4,
    nivel: 32,
    sancionado: false
};

let clasificacion = "";
let motivo = "";

if (jugador.sancionado) {
    clasificacion = "No clasificado";
    motivo = "El jugador tiene una sanción activa.";
} else if (jugador.victorias >= 15 && jugador.nivel >= 30) {
    clasificacion = "Liga Diamante";
    motivo = "Cumple el mínimo de victorias y nivel requerido.";
} else if (jugador.victorias >= 10 && jugador.nivel >= 20) {
    clasificacion = "Liga Oro";
    motivo = "Cumple los requisitos para la Liga Oro.";
} else {
    clasificacion = "Liga Plata";
    motivo = "No alcanza los requisitos para una liga superior.";
}

console.log("clasificacion:", clasificacion);
console.log("motivo:", motivo);