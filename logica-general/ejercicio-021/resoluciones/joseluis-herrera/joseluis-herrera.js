function clasificarJugador(puntosKills, partidasGanadas, penalizado) {
    if (penalizado) {
        return "Descalificado / Revisión de Conducta";
    }

    let puntajeEstrategia = puntosKills + (partidasGanadas * 10);

    if (puntajeEstrategia >= 150 && partidasGanadas >= 5) {
        return "Rango Leyenda Pro";
    } else if (puntajeEstrategia >= 90) {
        return "Rango Aspirante Competitivo";
    } else {
        return "Rango Recluta";
    }
}

let kills = 100;
let victorias = 6;
let cuentaSancionada = false;

let rangoFinal = clasificarJugador(kills, victorias, cuentaSancionada);

console.log("Puntos por Kills:", kills);
console.log("Partidas Ganadas:", victorias);
console.log("Resultado del Rango:", rangoFinal);