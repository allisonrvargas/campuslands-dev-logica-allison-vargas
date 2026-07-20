function validarDatosEquipo(datos) {
    const validaciones = [
        { 
            test: d => d.golesAnotados < 0 || d.golesRecibidos < 0 || d.partidosJugados < 0, 
            error: "Error: Los datos no pueden ser negativos" 
        },
        { 
            test: d => d.partidosJugados === 0 && (d.golesAnotados > 0 || d.golesRecibidos > 0), 
            error: "Error: Incongruencia en el historial de partidos" 
        }
    ];

    for (let validacion of validaciones) {
        if (validacion.test(datos)) {
            return { valido: false, mensaje: validacion.error };
        }
    }
    return { valido: true };
}

function clasificarEquipoEstructurado(golesAnotados, golesRecibidos, partidosJugados) {
    let datos = { golesAnotados, golesRecibidos, partidosJugados };
    let controlCalidad = validarDatosEquipo(datos);

    if (!controlCalidad.valido) {
        return controlCalidad.mensaje;
    }

    if (partidosJugados === 0) {
        return "Rango: Sin Clasificar (Inactivo)";
    }

    let diferenciaGoles = golesAnotados - golesRecibidos;
    let promedioGoles = golesAnotados / partidosJugados;

    let esElite = diferenciaGoles > 15 && promedioGoles >= 3;
    let esCompetitivo = diferenciaGoles >= 0;

    switch (true) {
        case esElite:
            return "Rango: Élite del Torneo";
        case esCompetitivo:
            return "Rango: Competitivo Medio";
        default:
            return "Rango: Grupo de Desarrollo";
    }
}

let golesFavor = 10;
let golesContra = 12;
let partidos = 3;

let resultadoClasificacion = clasificarEquipoEstructurado(golesFavor, golesContra, partidos);

console.log("Goles a Favor:", golesFavor);
console.log("Goles en Contra:", golesContra);
console.log("Partidos Jugados:", partidos);
console.log("Resultado de Validación:", resultadoClasificacion);