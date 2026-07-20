function validarRankingFutbolSala(equipos) {
  if (!Array.isArray(equipos) || equipos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un equipo registrado."
    };
  }

  const resultados = [];
  let puntosTotales = 0;
  let mejorEquipo = null;

  for (const equipo of equipos) {
    const {
      nombre,
      partidosJugados,
      victorias,
      empates,
      derrotas,
      golesFavor,
      golesContra
    } = equipo;

    if (
      partidosJugados < 0 ||
      victorias < 0 ||
      empates < 0 ||
      derrotas < 0 ||
      golesFavor < 0 ||
      golesContra < 0
    ) {
      return {
        estado: "Error",
        motivo: "Los valores estadísticos no pueden ser negativos."
      };
    }

    if (
      victorias + empates + derrotas !== partidosJugados
    ) {
      return {
        estado: "Error",
        motivo: `Los partidos del equipo ${nombre} no coinciden con sus resultados.`
      };
    }

    const puntos =
      (victorias * 3) +
      (empates * 1);

    const diferenciaGoles =
      golesFavor - golesContra;

    puntosTotales += puntos;

    if (
      mejorEquipo === null ||
      puntos > mejorEquipo.puntos ||
      (
        puntos === mejorEquipo.puntos &&
        diferenciaGoles > mejorEquipo.diferenciaGoles
      )
    ) {
      mejorEquipo = {
        nombre,
        puntos,
        diferenciaGoles
      };
    }

    let estadoRanking;

    if (puntos >= 20) {
      estadoRanking = "Zona de clasificación";
    } else if (puntos >= 10) {
      estadoRanking = "Zona media";
    } else {
      estadoRanking = "Zona baja";
    }

    resultados.push({
      nombre,
      puntos,
      diferenciaGoles,
      estadoRanking
    });
  }

  return {
    equiposEvaluados: equipos.length,
    puntosTotales,
    equipoLider: mejorEquipo.nombre,
    resultados
  };
}

const equipos = [
  {
    nombre: "Titanes FC",
    partidosJugados: 8,
    victorias: 6,
    empates: 1,
    derrotas: 1,
    golesFavor: 35,
    golesContra: 15
  },
  {
    nombre: "Rápidos FS",
    partidosJugados: 8,
    victorias: 3,
    empates: 2,
    derrotas: 3,
    golesFavor: 20,
    golesContra: 18
  }
];

console.log(validarRankingFutbolSala(equipos));