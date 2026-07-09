function validarYClasificarEquipo(golesAnotados, golesRecibidos, partidosJugados) {
    if (golesAnotados < 0 || golesRecibidos < 0 || partidosJugados < 0) {
        return "Error: Los datos no pueden ser negativos";
    }

    if (partidosJugados === 0 && (golesAnotados > 0 || golesRecibidos > 0)) {
        return "Error: Incongruencia en el historial de partidos";
    }

    if (partidosJugados === 0) {
        return "Rango: Sin Clasificar (Inactivo)";
    }

    let diferenciaGoles = golesAnotados - golesRecibidos;
    let promedioGoles = golesAnotados / partidosJugados;

    if (diferenciaGoles > 15 && promedioGoles >= 3) {
        return "Rango: Élite del Torneo";
    } else if (diferenciaGoles >= 0) {
        return "Rango: Competitivo Medio";
    } else {
        return "Rango: Grupo de Desarrollo";
    }
}

let golesFavor = 18;
let golesContra = 2;
let partidos = 4;

let resultadoClasificacion = validarYClasificarEquipo(golesFavor, golesContra, partidos);

console.log("Goles a Favor:", golesFavor);
console.log("Goles en Contra:", golesContra);
console.log("Partidos Jugados:", partidos);
console.log("Resultado de Validación:", resultadoClasificacion);