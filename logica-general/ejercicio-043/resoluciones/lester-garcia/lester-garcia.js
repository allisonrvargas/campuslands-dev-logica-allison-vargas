const equipo = {
    inscritos: true,
    jugadores: 5,
    ranking: 12,
    sancionado: false
};

let decision = "";
let motivo = "";

if (!equipo.inscritos) {
    decision = "Rechazar participación";
    motivo = "El equipo no está inscrito en el torneo.";
} else if (equipo.jugadores < 5) {
    decision = "Rechazar participación";
    motivo = "El equipo no cuenta con el número mínimo de jugadores.";
} else if (equipo.sancionado) {
    decision = "Rechazar participación";
    motivo = "El equipo tiene una sanción activa.";
} else if (equipo.ranking <= 16) {
    decision = "Clasifica a la fase final";
    motivo = "Cumple todos los requisitos y su ranking está dentro del límite.";
} else {
    decision = "Pasa a fase clasificatoria";
    motivo = "Cumple los requisitos, pero debe disputar la fase clasificatoria.";
}

console.log("decision:", decision);
console.log("motivo:", motivo);